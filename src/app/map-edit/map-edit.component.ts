import { Component, OnInit, ElementRef, AfterViewInit, HostListener, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { NavigationService } from '../navigation.service';
import { SpaceService } from '../space.service';
import { ApiService } from '../api.service';
import { ModalDirective } from 'ngx-bootstrap/modal';
import * as THREE from 'three';     // must 'npm install @types/three'!!!
import TrackballControls from '../../../node_modules/three/examples/js/controls/NgTrackballControls.js';

@Component({
  selector: 'app-map-edit',
  templateUrl: './map-edit.component.html',
  styleUrls: [
    './map-edit.component.css',
    '../../assets/bootstrap/sb-admin2/dist/css/sb-admin-2.css'
  ],
  providers: [NavigationService]
})
export class MapEditComponent implements OnInit, AfterViewInit {

  renderingAllowed: boolean = true;
  status: string;
  message: string;
  mapId: string;
  map: any = {};
  dings: any = [];
  graphicCardNeeded: boolean = false;
  browserNeeded: boolean = false;
  saveProcessStarted: boolean = false;
  saveFinished: boolean = false;
  viewInitFinished: boolean = false;
  dataInitFinished: boolean = false;
  needSave: boolean = false;
  @ViewChild('loadingModal') public loadingModal: ModalDirective;
  @ViewChild('saveAskModal') public saveAskModal: ModalDirective;

  container: any;
  renderer: any;
  controls: any;
  camera:any;
  scene: any;
  planeObj: any;
  //bgObj: any;
  voxelPosition: any = new THREE.Vector3();
  selectedDing: any;
  zoomFactor: number = 1;
  zoomIncFactor: number = 0.01;
  //voxelSize: number = 10;
  rolloverTexture: any;
  rolloverGeo: any;
  rolloverMesh: any;
  //rolloverMaterial: any;
  raycaster: any;
  mouse2D: any;
  //checker: boolean = false;
  isCtrlDown: boolean = false;
  isAltDown: boolean = false;
  lastPutDelTime: any = Date.now();

  constructor(private route: ActivatedRoute, private location: Location, private navigationService: NavigationService, private spaceService: SpaceService, private apiService: ApiService, private elementRef: ElementRef, private router: Router) {
    navigationService.navMessage$.subscribe(message => {
      this.message = message;

      if (message.includes('dingid')) {
        let data: any = this.message.split('=');
        this.setVoxel(data[1]);
      } else if (message.includes('fillFloor')) {
        this.fillFloorWithVoxel();
      } else if (message.includes('gridlayer')) {
        let data: any = this.message.split('=');
        this.moveGrid(data[1]);
      } else if (message.includes('gridtoggle')) {
        let data: any = this.message.split('=');
        let bgStat = (data[1] == 'On') ? true : false;
        this.setBackground(bgStat);
      } else if (message.includes('mapreload')) {
        this.reloadMap();
      } else if (message.includes('save')) {
        this.saveMap(false);
      } else if (message.includes('safeexit')) {
        this.saveMap(true);
      } else if (message.includes('exit')) {
        this.exitEditor();
      } else if (message.includes('home')) {
        this.goHome();
      }
    });
    navigationService.navStatus$.subscribe(status => {
      this.status = status;
    });
  }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) =>
        this.spaceService.getMapById(params['id'])
      )
      .subscribe(res => {
        this.map = res;
        this.mapId = this.map._id;
        this.navigationService.sendNavigationMessage('mapid=' + this.mapId);
        let bgImgName = (this.map.bgImgName) ? this.map.bgImgName : 'null';
        this.navigationService.sendNavigationMessage('bgfile=' + bgImgName);
        this.getDings();
        //this.mapForm.updateValueAndValidity();
        //this.mapForm.controls['password'].updateValueAndValidity(); // custom validator must be called like as this
      });
    this.rolloverTexture = {
      opacity: 0.6,
      transparent: true
    };

    this.navigationService.setNavigationStatus('mapeditor');
  }

  reloadMap() {
    this.spaceService.getMapById(this.mapId).subscribe(res => {
      this.map = res;
      let bgImgName = (this.map.bgImgName) ? this.map.bgImgName : 'null';
      this.navigationService.sendNavigationMessage('bgfile=' + bgImgName);
    });
  }

  getDings(): void {
    this.apiService.getDings().subscribe(dings => {
      this.dings = dings;

      let texture: any = {};
      let material: any = {};
      for (let i in this.dings) {
        this.dings[i]._idx = i;

        switch (this.dings[i].texture.shading) {
          case 'THREE.FlatShading':
            texture.shading = THREE.FlatShading;
            break;
        }
        if (this.dings[i].texture.color != '') {
          let colors = this.dings[i].texture.color.split(',');
          texture.color = new THREE.Color().setRGB(parseFloat(colors[0]), parseFloat(colors[1]), parseFloat(colors[2]));
        }
        if (this.dings[i].texture.map != null && this.dings[i].texture.map != '') {
          // make map logic
        }
        texture.opacity = this.dings[i].texture.opacity;
        if (texture.opacity < 1) {
          texture.transparent = true;
        }

        switch (this.dings[i].material) {
          case 'THREE.MeshPhongMaterial':
            material = new THREE.MeshPhongMaterial(texture);
            break;
          case 'THREE.MeshBasicMaterial':
            material = new THREE.MeshBasicMaterial(texture);
            break;
          case 'THREE.MeshLambertMaterial':
            material = new THREE.MeshLambertMaterial(texture);
            break;
        }

        material._idx = i;
        //material._p = (this.dings[i].type === 'floor') ? 1 : 0;
        switch(this.dings[i].type) {
          case 'floor':
            material._p = 1;
            break;
          case 'path':
            material._p = 2;
            break;
          default:
            material._p = 0;
            break;
        }
        this.dings[i]._material = material;
      }

      this.dataInitFinished = true;

      if (this.viewInitFinished == true) {
        this.initWebGL();
      }
    });
  }

  ngAfterViewInit() {
    this.container = document.querySelector('#page-wrapper');
    this.mouse2D = new THREE.Vector2();
    this.viewInitFinished = true;

    if (this.dataInitFinished == true) {
      this.initWebGL();
    }
  }

  initWebGL(): void {
    if (this.detectWebGL() === false) {
      this.showWebGLAlert();
    }
    
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      preserveDrawingBuffer: true
    });

    this.camera = new THREE.PerspectiveCamera(25, this.container.clientWidth / this.container.clientHeight, 50, 1e7);
    this.camera.position.x = 800;
    this.camera.position.y = 800;
    this.camera.position.z = 800;
    this.camera.lookAt(new THREE.Vector3(0, 0, 0));

    this.controls = new TrackballControls(this.camera, this.renderer.domElement);
    this.controls.rotateSpeed = 1.0;
    this.controls.zoomSpeed = 3.6;
    this.controls.panSpeed = 2;
    this.controls.noZoom = false;
    this.controls.noPan = false;
    this.controls.staticMoving = true;
    this.controls.dynamicDampingFactor = 0.3;
    this.controls.keys = [65, 83, 68];	// a:rotate, s:zoom, d:pan

    /*setTimeout(function() {
      let t = this;
      return function() {
        t.setRendererSize();
      }
    }.call(this), 3000);*/
    this.container.appendChild(this.renderer.domElement);
    this.navigationService.window.addEventListener('resize', function() {
      let t = this;
      return function() {
        t.setRendererSize();
      }
    }.call(this));

    this.scene = new THREE.Scene();
    this.setGrid();

    let ambientLight = new THREE.AmbientLight(0x606060);
		let directionalLight = new THREE.DirectionalLight(0xffffff);
    directionalLight.position.set(1, 1, -1).normalize();
    this.scene.add(ambientLight);
    this.scene.add(directionalLight);

    this.rolloverGeo = new THREE.BoxGeometry(10, 10, 10);
    this.setVoxel(this.dings[0]._id);

    this.raycaster = new THREE.Raycaster();
    
    this.animate();

    if (this.map.fileName.length > 0) {
      this.loadingModal.show();
      let url = 'https://s3.eu-central-1.amazonaws.com/easyinside/maps/' + this.map.fileName;
      let xhr = new XMLHttpRequest();
      if ('withCredentials' in xhr) {
        xhr.open('GET', url, true);
        //xhr.withCredentials = true;
        //xhr.setRequestHeader('Authorization', 'AKIAICLUJEHJFYOPSNAA');
      }
      //xhr.responseType = 'json';
      let t = this;
      xhr.onreadystatechange = function() {
        let status;
        let data;
        if (xhr.readyState == 4) {
          status = xhr.status;
          if (status == 200) {
            data = JSON.parse(xhr.responseText);
            t.initAfterDataLoad(data);
          } else {
            console.log('Error in reading json data');
          }
        }
      };
      xhr.send();
    }
  }

  detectWebGL() {
    try { 
      return !!this.navigationService.window.WebGLRenderingContext && !!document.createElement('canvas').getContext('experimental-webgl');
    } catch (e) {
      return false;
    }
  }

  showWebGLAlert(): void {
    if (this.navigationService.window.WebGLRenderingContext) {
      this.graphicCardNeeded = true;
    } else {
      this.browserNeeded = true;
    }
  }

  onCloseGraphicCardAlert(event): void {
    this.graphicCardNeeded = false;
  }

  onCloseBrowserAlert(event): void {
    this.browserNeeded = false;
  }

  setRendererSize(): void {
    let w = this.container.clientWidth;
    let h = this.container.clientHeight;
    this.renderer.setSize(w, h);

    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.controls.handleResize();
  }

  @HostListener('window:keydown', ['$event']) onDocumentKeyDown(e: KeyboardEvent):void {
		switch (e.keyCode) {
			case 17:
				this.isCtrlDown = true;
				break;
			case 18:
				this.isAltDown = true;
				break;
			case 38:  // up arrow
				this.zoomInOut('in');
				break;
			case 40:  // down arrow
				this.zoomInOut('out');
				break;
		}	
	};

  @HostListener('window:keyup', ['$event']) onDocumentKeyUp(e: KeyboardEvent):void {
		switch (e.keyCode) {
			case 17:
				this.isCtrlDown = false;
				break;
			case 18:
				this.isAltDown = false;
				break;
		}	
	}

  setVoxel(dId) {
    for (let d of this.dings) {
      if (d._id == dId) {
        this.selectedDing = d;
        break;
      }
    }
    
    let texture: any = {};
    let material: any = {};
    for (let k in this.rolloverTexture) {
      texture[k] = this.rolloverTexture[k];
    }
    switch (this.selectedDing.texture.shading) {
      case 'THREE.FlatShading':
        texture.shading = THREE.FlatShading;
        break;
    }
    if (this.selectedDing.texture.color != '') {
      let colors = this.selectedDing.texture.color.split(',');
      texture.color = new THREE.Color().setRGB(parseFloat(colors[0]), parseFloat(colors[1]), parseFloat(colors[2]));
    }
    //texture.opacity = this.selectedDing.texture.opacity;

    switch (this.selectedDing.material) {
      case 'THREE.MeshPhongMaterial':
        //this.rolloverMaterial = new THREE.MeshPhongMaterial(texture);
        material = new THREE.MeshPhongMaterial(texture);
        break;
      case 'THREE.MeshBasicMaterial':
        //this.rolloverMaterial = new THREE.MeshBasicMaterial(texture);
        material = new THREE.MeshBasicMaterial(texture);
        break;
      case 'THREE.MeshLambertMaterial':
        material = new THREE.MeshLambertMaterial(texture);
        break;
    }
    material._idx = this.selectedDing._idx;
    
    if (!this.rolloverMesh) {
      //this.rolloverMesh = new THREE.Mesh(this.rolloverGeo, this.rolloverMaterial);
      this.rolloverMesh = new THREE.Mesh(this.rolloverGeo, material);
      this.scene.add(this.rolloverMesh);
    } else {
      this.rolloverMesh.material = material;
    }
	};

/**
 * voxelSize : 10 = map.width : planeWidth
 * planeWidth = 10 * map.width / voxelSize
 * planeHeight = 10 * map.height / voxelSize
 */
  setGrid(): void {
    if (this.planeObj) {
        this.scene.remove(this.planeObj);
    }

    let planeWidth = Math.floor(10 * this.map.width / this.map.voxelSize);
    let planeHeight = Math.floor(10 * this.map.height / this.map.voxelSize);

    let planeMaterial = new THREE.MeshBasicMaterial({
      color: 0x777777,
      opacity: 0.1,
      transparent: true
      //wireframe: true
    });

    //this.planeObj = new THREE.Mesh(new THREE.PlaneGeometry(planeWidth, planeHeight, Math.floor(planeWidth / 10), Math.floor(planeHeight / 10)), planeMaterial);
    this.planeObj = new THREE.Mesh(new THREE.PlaneGeometry(planeWidth, planeHeight, 1, 1), planeMaterial);

    // add lines on plane
    let lineMaterial = new THREE.LineBasicMaterial({
      color: 0x777777,
      linewidth: 1,
      opacity: 0.7,
      transparent: true
    });

    let gridGeo = new THREE.Geometry();
    let halfW = Math.floor(planeWidth / 2);
    let halfH = Math.floor(planeHeight / 2);

    for (let i = -halfW; i <= halfW; i += 10) {
      gridGeo.vertices.push(new THREE.Vector3(i, -halfH, 0));
      gridGeo.vertices.push(new THREE.Vector3(i, halfH, 0));
    }

    for (let i = -halfH; i <= halfH; i += 10) {
      gridGeo.vertices.push(new THREE.Vector3(-halfW, i, 0));
      gridGeo.vertices.push(new THREE.Vector3(halfW, i, 0));
    }

    let grid = new THREE.LineSegments(gridGeo, lineMaterial);
    this.planeObj.add(grid);
		this.planeObj.overdraw = true;
    this.planeObj.rotation.x = -(Math.PI * 90 / 180);
    this.planeObj.material.depthTest = false;
    this.planeObj.renderOrder = 1;

    this.scene.add(this.planeObj);
  }

  moveGrid(layer: string): void {
    this.planeObj.position.y = parseInt(layer) * 10;
  }

  setBackground(status: boolean): void {
    if (status) {
      //this.planeObj.material.map = THREE.ImageUtils.loadTexture('https://s3.eu-central-1.amazonaws.com/easyinside/gridbgs/' + this.map.bgImgName);
      /*let imgUrl = 'https://s3.eu-central-1.amazonaws.com/easyinside/gridbgs/' + this.map.bgImgName;
      let tLoader = new THREE.TextureLoader();
      tLoader.load(imgUrl, function(t) {
        return function(tex) {
          t.planeObj.material.map = tex;
          t.planeObj.material.needsUpdate = true;
        }
      }(this));*/
      let img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = function(t) {
        return function(tex) {
          t.planeObj.material.map = new THREE.Texture(this);
          t.planeObj.material.transparent = false;
          t.planeObj.material.map.needsUpdate = true;
          t.planeObj.material.needsUpdate = true;
        }
      }(this);
      img.src = 'https://s3.eu-central-1.amazonaws.com/easyinside/gridbgs/' + this.map.bgImgName;
    } else {
      this.planeObj.material.map = null;
      this.planeObj.material.transparent = true;
      this.planeObj.material.needsUpdate = true;
    }
  }

  onDocumentMouseMove(event: MouseEvent): void {
		this.mouse2D.x = ((event.clientX - this.container.offsetLeft) / this.container.clientWidth) * 2 - 1;
		this.mouse2D.y = - ((event.clientY - this.container.offsetTop) / this.container.clientHeight) * 2 + 1;
	}

  zoomInOut(cmd: string): void {
    switch (cmd) {
			case 'in':
				this.zoomFactor = (this.zoomFactor > 1) ? 1 : this.zoomFactor;
				this.zoomFactor = this.zoomFactor - this.zoomIncFactor;
				this.zoomFactor = (this.zoomFactor <= 0.2) ? 0.2 : this.zoomFactor;
				break;
			case 'out':
				this.zoomFactor = (this.zoomFactor < 1) ? 1 : this.zoomFactor;
				this.zoomFactor = this.zoomFactor + this.zoomIncFactor;
				this.zoomFactor = (this.zoomFactor >= 2) ? 1 : this.zoomFactor;
				break;
		}

		this.camera.fov *= this.zoomFactor;
		this.camera.updateProjectionMatrix();
  }

  fillFloorWithVoxel(): void {
    let planeWidth = Math.floor(10 * this.map.width / this.map.voxelSize);
    let planeHeight = Math.floor(10 * this.map.height / this.map.voxelSize);
    let halfW = Math.floor(planeWidth / 2);
    let halfH = Math.floor(planeHeight / 2);
    let material = this.getSelectedDingsMaterial(this.selectedDing._idx);
    let voxel: any;

    for (let x = -halfW; x < halfW; x += 10) {
      for (let z = -halfH; z < halfH; z += 10) {
        voxel = new THREE.Mesh(this.rolloverGeo, material);
        voxel.position.x = Math.floor(x / 10) * 10 + 5;
        voxel.position.y = 5;
        voxel.position.z = Math.floor(z / 10) * 10 + 5;
        voxel.matrixAutoUpdate = true;
        voxel.updateMatrix();
        this.scene.add(voxel);
      }
    }
  }

  getSelectedDingsMaterial(idx: any): any {
    //let texture: any = {};
    //let material: any = {};
    let dingChoosen;

    for (let i in this.dings) {
      if (this.dings[i]._idx == idx) {
        dingChoosen = this.dings[i];
      }
    }

    /*switch (dingChoosen.texture.shading) {
      case 'THREE.FlatShading':
        texture.shading = THREE.FlatShading;
        break;
    }
    if (dingChoosen.texture.color != '') {
      let colors = dingChoosen.texture.color.split(',');
      texture.color = new THREE.Color().setRGB(parseFloat(colors[0]), parseFloat(colors[1]), parseFloat(colors[2]));
    }
    if (dingChoosen.texture.map != null && dingChoosen.texture.map != '') {
      // make map logic
    }
    texture.opacity = dingChoosen.texture.opacity;
    if (texture.opacity < 1) {
      texture.transparent = true;
    }

    switch (dingChoosen.material) {
      case 'THREE.MeshPhongMaterial':
        material = new THREE.MeshPhongMaterial(texture);
        break;
      case 'THREE.MeshBasicMaterial':
        material = new THREE.MeshBasicMaterial(texture);
        break;
    }
    material._type = dingChoosen.type;
    material._idx = dingChoosen.idx;
    
    return material;*/
    return dingChoosen._material;
  }

	putDelVoxel(): void {
		if (this.isCtrlDown === false && this.isAltDown === false) {
			return;
		}
		
		if (Date.now() - this.lastPutDelTime < 500) {
			return;
		} else {
			this.lastPutDelTime = Date.now();
		}
		
		let intersects = this.raycaster.intersectObjects(this.scene.children);
		
		if (intersects.length > 0) {
			let intersector = this.getRealIntersector(intersects);
			
			if (this.isAltDown) {
				if (intersector.object != this.planeObj) {
					this.scene.remove(intersector.object);
          this.needSave = true;
				}
			} else if (this.isCtrlDown) {
				this.setVoxelPosition(intersector);

        let material = this.getSelectedDingsMaterial(this.selectedDing._idx);
        let voxel = new THREE.Mesh(this.rolloverGeo, material);
				voxel.position.copy(this.voxelPosition);
				voxel.matrixAutoUpdate = false;
				voxel.updateMatrix();
				this.scene.add(voxel);
        this.needSave = true;
			}
		}
	};

  getRealIntersector(intersects): any {
    let intersector: any;
		for (let i = 0; i < intersects.length; i++) {
			intersector = intersects[i];
			if (intersector.object != this.rolloverMesh) {
				return intersector;
			}
		}
  }

  setVoxelPosition(intersector): void {
    let normalMatrix = new THREE.Matrix3();
		normalMatrix.getNormalMatrix(intersector.object.matrixWorld);
		let rotatedNormal = new THREE.Vector3().copy(intersector.face.normal);
		rotatedNormal.applyMatrix3(normalMatrix);
		this.voxelPosition.addVectors(intersector.point, rotatedNormal);
		this.voxelPosition.x = Math.floor(this.voxelPosition.x / 10) * 10 + 5;
		this.voxelPosition.y = Math.floor(this.voxelPosition.y / 10) * 10 + 5;
		this.voxelPosition.z = Math.floor(this.voxelPosition.z / 10) * 10 + 5;
  }

  initAfterDataLoad(data: any): void {
    let maxIdx = 0;
    for (let i in this.dings) {
      this.dings[i]._idx = null;
      this.dings[i]._material._idx = null;
    }

    for (let i in data.m) {
      for (let j in this.dings) {
        if (this.dings[j]._id == data.m[i]._id) {
          this.dings[j]._idx = data.m[i].idx;
          this.dings[j]._material._idx = data.m[i].idx;
          maxIdx = (data.m[i].idx > maxIdx) ? data.m[i].idx : maxIdx;
        }
      }
    }
    for (let i in this.dings) {
      if (this.dings[i]._idx == null) {
        maxIdx++;
        this.dings[i]._idx = maxIdx;
        this.dings[i]._material._idx = maxIdx;
      }
    }

    let children = this.scene.children.slice(0);
		for (let i = 0; i < children.length; i++) {
			if (children[i] instanceof THREE.Mesh === false) {
				continue;
			}
			if (children[i].geometry instanceof THREE.BoxGeometry === false) {
				continue;
			}
			if (children[i] === this.rolloverMesh) {
				continue;
			}
			
			this.scene.remove(children[i]);
		}
		
		let voxels = data.d;
		let voxel, mesh, tmpMaterial;
    let voxelLength = voxels.length;
		for (let i = 0; i < voxelLength; i++) {
    //for (let i = 0; i < 10000; i++) {
      //console.log(i);
      voxel = voxels[i];
      tmpMaterial = this.getSelectedDingsMaterial(voxel.t);
			mesh = new THREE.Mesh(this.rolloverGeo, tmpMaterial);
			mesh.position.x = voxel.x * 10 + 5;
			mesh.position.y = voxel.y * 10 + 5;
			mesh.position.z = voxel.z * 10 + 5;
			mesh.matrixAutoUpdate = true;
			mesh.updateMatrix();
			this.scene.add(mesh);
    }
    
    this.setRendererSize();
    this.loadingModal.hide();
  }

  saveMap(exitAfterSave: boolean): void {
    this.saveProcessStarted = true;
		let children = this.scene.children;
		let voxels: any = [];
		let child: any;
    let ds: any = [];

    for (let i in this.dings) {
      ds.push({
        idx: this.dings[i]._idx,
        _id: this.dings[i]._id
      });
    }

		for (let i = 0; i < children.length; i++) {
			child = children[i];
			if (child instanceof THREE.Mesh === false) {
				continue;
			}
			if (child.geometry instanceof THREE.BoxGeometry === false) {
				continue;
			}
			if (child === this.rolloverMesh) {
				continue;
			}
			
			voxels.push({
				x: (child.position.x - 5) / 10,
				y: (child.position.y - 5) / 10,
				z: (child.position.z - 5) / 10,
				t: child.material._idx,
        p: child.material._p
			});
		}

    let fileStr = {
      m: ds,
      d: voxels
    }
		let dataUri = JSON.stringify(fileStr);
		this.spaceService.saveMapFile(this.mapId, {file:dataUri}).subscribe(res => {
      if (res.result) {
        this.needSave = false;
        if (exitAfterSave) {
          //document.location.href = '/maker/map-detail/' + this.mapId;
          this.exitToDetail();
        } else {
          this.saveProcessStarted = false;
          this.saveFinished = true;
          setTimeout(() => {
            this.saveFinished = false;
          }, 3000);
        }
      }
    });
	}

  exitEditor(): void {
    if (this.needSave) {
      this.saveAskModal.show();
    } else {
      //document.location.href = '/maker/map-detail/' + this.mapId;
      this.exitToDetail();
    }
  }

  exitToDetail(): void {
    this.renderingAllowed = false;
    this.router.navigate(['/maker/map-detail', this.mapId]);
  }

  goHome(): void {
    this.renderingAllowed = false;
    this.router.navigate(['/']);
  }

  animate(): void {
    if (this.renderingAllowed) {
      requestAnimationFrame(function() {
        let t = this;
        return function() {
          t.animate();
        }
      }.call(this));
    }
    this.controls.update();
    this.render();
  }

  render(): void {
    this.putDelVoxel();

    this.raycaster.setFromCamera(this.mouse2D, this.camera);
    let intersects = this.raycaster.intersectObjects(this.scene.children);

    if (intersects.length > 0) {
			let intersector = this.getRealIntersector(intersects);

			if (intersector) {
				this.setVoxelPosition(intersector);
				this.rolloverMesh.position.copy(this.voxelPosition);
			}
		}

    this.renderer.render(this.scene, this.camera);
  }
}