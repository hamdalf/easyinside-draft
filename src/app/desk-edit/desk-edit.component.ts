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
  selector: 'app-desk-edit',
  templateUrl: './desk-edit.component.html',
  styleUrls: [
    './desk-edit.component.css',
    '../../assets/bootstrap/sb-admin2/dist/css/sb-admin-2.css'
  ],
  providers: [NavigationService]
})
export class DeskEditComponent implements OnInit, AfterViewInit {

  renderingAllowed: boolean = true;
  status: string;
  message: string;
  mapId: string;
  map: any = {};
  dings: any = [];
  firstDeskId: any = null;
  graphicCardNeeded: boolean = false;
  browserNeeded: boolean = false;
  saveProcessStarted: boolean = false;
  saveFinished: boolean = false;
  viewInitFinished: boolean = false;
  dataInitFinished: boolean = false;
  needSave: boolean = false;
  @ViewChild('optAskModal') public optAskModal: ModalDirective;
  @ViewChild('loadingModal') public loadingModal: ModalDirective;
  @ViewChild('loadingDeskModal') public loadingDeskModal: ModalDirective;
  @ViewChild('saveAskModal') public saveAskModal: ModalDirective;

  container: any;
  renderer: any;
  controls: any;
  camera:any;
  scene: any;
  planeObj: any;
  pathObj: any;
  rolloverPosition: any = new THREE.Vector3();
  selectedDing: any;
  zoomFactor: number = 1;
  zoomIncFactor: number = 0.01;
  rolloverTexture: any;
  rolloverMesh: any;
  raycaster: any;
  mouse2D: any;
  isCtrlDown: boolean = false;
  isAltDown: boolean = false;
  lastPutDelTime: any = Date.now();

  constructor(private route: ActivatedRoute, private location: Location, private navigationService: NavigationService, private spaceService: SpaceService, private apiService: ApiService, private elementRef: ElementRef, private router: Router) {
    navigationService.navMessage$.subscribe(message => {
      this.message = message;

      if (message.includes('dingid')) {
        let data: any = this.message.split('=');
        this.setRollover(data[1]);
      } else if (message.includes('gridlayer')) {
        let data: any = this.message.split('=');
        this.moveGrid(data[1]);
      } else if (message.includes('gridtoggle')) {
        let data: any = this.message.split('=');
        let bgStat = (data[1] == 'On') ? true : false;
        this.setBackground(bgStat);
      } else if (message.includes('pathtoggle')) {
        let data: any = this.message.split('=');
        this.setPath((data[1] == 'On') ? true : false);
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
        
        if (!this.map.optModified || this.map.fileModified > this.map.optModified) {
          this.optAskModal.show();
        } else {
          this.getDings();
        }
      });
    this.rolloverTexture = {
      opacity: 0.6,
      transparent: true
    };

    this.navigationService.setNavigationStatus('deskeditor');
  }

  ngAfterViewInit() {
    this.container = document.querySelector('#page-wrapper');
    this.mouse2D = new THREE.Vector2();
    this.viewInitFinished = true;

    if (this.dataInitFinished == true) {
      this.initWebGL();
    }
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
      let geoData: any = {};
      let dimensionPartFrom, dimensionPartTo, dimensionPart;
      let dimensionArray: any = [];
      for (let i in this.dings) {
        this.dings[i]._idx = i;

        if (this.firstDeskId === null && this.dings[i].type === 'desk') {
          this.firstDeskId = this.dings[i]._id;
        }

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
        this.dings[i]._material = material;
        if (this.dings[i].type === 'desk') {
          geoData = JSON.parse(this.dings[i].geometry.data);
          this.dings[i]._geometry = THREE.JSONLoader.prototype.parse(geoData[0].g.data);
        } else if (this.dings[i].type === 'place') {
          if (this.dings[i].geometry.data.includes('THREE.BoxGeometry')) {
            dimensionPartFrom = this.dings[i].geometry.data.indexOf('(');
            dimensionPartTo = this.dings[i].geometry.data.indexOf(')');
            dimensionPart = this.dings[i].geometry.data.substr(dimensionPartFrom + 1, dimensionPartTo - 1);
            dimensionArray = dimensionPart.split(',');
            this.dings[i]._geometry = {geometry: new THREE.BoxGeometry(parseInt(dimensionArray[0]), parseInt(dimensionArray[1]), parseInt(dimensionArray[2]))};
            this.dings[i]._geometry.geometry.applyMatrix(new THREE.Matrix4().makeTranslation(0, (parseInt(dimensionArray[1]) * 0.5), 0));
            this.dings[i]._w = parseInt(dimensionArray[0]);
            this.dings[i]._h = parseInt(dimensionArray[1]);
            this.dings[i]._d = parseInt(dimensionArray[2]);
          }
        } else if (this.dings[i].type === 'object') {
          if (this.dings[i].geometry.data.includes('THREE.BoxGeometry')) {
            dimensionPartFrom = this.dings[i].geometry.data.indexOf('(');
            dimensionPartTo = this.dings[i].geometry.data.indexOf(')');
            dimensionPart = this.dings[i].geometry.data.substr(dimensionPartFrom + 1, dimensionPartTo - 1);
            dimensionArray = dimensionPart.split(',');
            this.dings[i]._geometry = {geometry: new THREE.BoxGeometry(parseInt(dimensionArray[0]), parseInt(dimensionArray[1]), parseInt(dimensionArray[2]))};
            this.dings[i]._geometry.geometry.applyMatrix(new THREE.Matrix4().makeTranslation(0, (parseInt(dimensionArray[1]) * 0.5), 0));
            this.dings[i]._w = parseInt(dimensionArray[0]);
            this.dings[i]._h = parseInt(dimensionArray[1]);
            this.dings[i]._d = parseInt(dimensionArray[2]);
          }
        }
      }

      this.dataInitFinished = true;

      if (this.viewInitFinished == true) {
        this.initWebGL();
      }
    });
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

    //this.controls = new TrackballControls(this.camera, this.renderer.document);
    this.controls = new TrackballControls(this.camera, this.renderer.domElement);
    this.controls.rotateSpeed = 1.0;
    this.controls.zoomSpeed = 3.6;
    this.controls.panSpeed = 2;
    this.controls.noZoom = false;
    this.controls.noPan = false;
    this.controls.staticMoving = true;
    this.controls.dynamicDampingFactor = 0.3;
    this.controls.keys = [65, 83, 68];	// a:rotate, s:zoom, d:pan

    setTimeout(function() {
      let t = this;
      return function() {
        t.setRendererSize();
      }
    }.call(this), 3000);
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

    this.setRollover(this.firstDeskId);

    this.raycaster = new THREE.Raycaster();
    
    this.animate();

    if (this.map.optFileName.length > 0) {
      this.loadingModal.show();
      let url = 'https://s3.eu-central-1.amazonaws.com/easyinside/opts/' + this.map.optFileName;
      let xhr = new XMLHttpRequest();
      if ('withCredentials' in xhr) {
        xhr.open('GET', url, true);
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
            t.initAfterMapDataLoad(data);
          } else {
            console.log('Error in reading map data');
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
			case 'R'.charCodeAt(0):
				this.rotateRollover();
				break;
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

  setPath(status: boolean): void {
    if (this.pathObj) {
      if (status) {
        this.scene.add(this.pathObj);
      } else {
        this.scene.remove(this.pathObj);
      }
    }
  }

  setRollover(dId) {
    this.scene.remove(this.rolloverMesh);

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

    switch (this.selectedDing.material) {
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
    material._idx = this.selectedDing._idx;
    this.rolloverMesh = new THREE.Mesh(this.selectedDing._geometry.geometry.clone(), material);
    this.rolloverMesh._idx = this.selectedDing._idx;
    this.rolloverMesh._r = false;

    if (this.selectedDing.type === 'desk') {
      if (this.selectedDing._id === '5909ef6f8a0d422b37dc5247') {
        this.rolloverMesh._w = 160;
        this.rolloverMesh._h = 72;
        this.rolloverMesh._d = 80;
        this.rolloverMesh.geometry.applyMatrix(new THREE.Matrix4().makeTranslation(-80, -36, -40));
      } else if (this.selectedDing._id === '5909efc18a0d422b37dc5248') {
        this.rolloverMesh._w = 200;
        this.rolloverMesh._h = 72;
        this.rolloverMesh._d = 100;
        this.rolloverMesh.geometry.applyMatrix(new THREE.Matrix4().makeTranslation(0, -70, 0));
      }
    } else {
      this.rolloverMesh._w = this.selectedDing._w;
      this.rolloverMesh._h = this.selectedDing._h;
      this.rolloverMesh._d = this.selectedDing._d;
    }

    this.scene.add(this.rolloverMesh);
	};

  rotateRollover():void {
    if (this.rolloverMesh._r === false) {
        //rollOverMesh.rotateOnAxis(new THREE.Vector3(0, 1, 0), Math.PI / 2);
        this.rolloverMesh.rotation.y += Math.PI / 2;
        this.rolloverMesh._r = true;
    } else {
        this.rolloverMesh.rotation.y -= Math.PI / 2;
        this.rolloverMesh._r = false;
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

  getSelectedDingsId(idx: any): any {
    let dingChoosen;

    for (let i in this.dings) {
      if (this.dings[i]._idx == idx) {
        dingChoosen = this.dings[i];
      }
    }

    return dingChoosen._id;
  }

  getSelectedDingsType(idx: any): any {
    let dingChoosen;

    for (let i in this.dings) {
      if (this.dings[i]._idx == idx) {
        dingChoosen = this.dings[i];
      }
    }

    return dingChoosen.type;
  }

  getSelectedDingsName(idx: any): any {
    let dingChoosen;

    for (let i in this.dings) {
      if (this.dings[i]._idx == idx) {
        dingChoosen = this.dings[i];
      }
    }

    return dingChoosen.name;
  }

  getSelectedDingsMaterial(idx: any): any {
    let dingChoosen;

    for (let i in this.dings) {
      if (this.dings[i]._idx == idx) {
        dingChoosen = this.dings[i];
      }
    }

    return dingChoosen._material;
  }

  getSelectedDingsGeometry(idx: any): any {
    let dingChoosen;

    for (let i in this.dings) {
      if (this.dings[i]._idx == idx) {
        dingChoosen = this.dings[i];
      }
    }

    return dingChoosen._geometry.geometry.clone();
  }

  getRealIntersector(intersects): any {
    let intersector: any;
		for (let i = 0; i < intersects.length; i++) {
			intersector = intersects[i];
			if (intersector.object != this.rolloverMesh && intersector.object.name != 'path') {
				return intersector;
			}
		}
  }

  setRolloverPosition(intersector): void {
    let normalMatrix = new THREE.Matrix3();
		normalMatrix.getNormalMatrix(intersector.object.matrixWorld);
		let rotatedNormal = new THREE.Vector3().copy(intersector.face.normal);
		rotatedNormal.applyMatrix3(normalMatrix);
		this.rolloverPosition.addVectors(intersector.point, rotatedNormal);

    if (this.rolloverMesh) {
      if (this.selectedDing.type === 'desk') {
        if (this.selectedDing._id === '5909ef6f8a0d422b37dc5247') {
          if (this.rolloverMesh._r) {
            this.rolloverPosition.x = Math.floor((this.rolloverPosition.x) / 10) * 10 + 2;
            this.rolloverPosition.y = Math.floor((this.rolloverPosition.y + (this.rolloverMesh._h)) / 10) * 10 + 1;
            this.rolloverPosition.z = Math.floor((this.rolloverPosition.z) / 10) * 10 + 7;
          } else {
            this.rolloverPosition.x = Math.floor((this.rolloverPosition.x) / 10) * 10 + 3.2;
            this.rolloverPosition.y = Math.floor((this.rolloverPosition.y + (this.rolloverMesh._h)) / 10) * 10 + 1;
            this.rolloverPosition.z = Math.floor((this.rolloverPosition.z) / 10) * 10 + 2;
          }
        } else if (this.selectedDing._id === '5909efc18a0d422b37dc5248') {
          this.rolloverPosition.y = Math.floor((this.rolloverPosition.y + (this.rolloverMesh._h)) / 10) * 10 + 1;
        }
      } else {
        if (this.rolloverMesh._r) {
          if (this.rolloverMesh._w % 20 === 0) {
            this.rolloverPosition.z = Math.floor(this.rolloverPosition.z / 10) * 10;
          } else {
            this.rolloverPosition.z = Math.floor(this.rolloverPosition.z / 10) * 10 + 5;
          }
          this.rolloverPosition.y = Math.floor(this.rolloverPosition.y / 10) * 10;
          if (this.rolloverMesh._d % 20 === 0) {
            this.rolloverPosition.x = Math.floor(this.rolloverPosition.x / 10) * 10;
          } else {
            this.rolloverPosition.x = Math.floor(this.rolloverPosition.x / 10) * 10 + 5;
          }
        } else {
          if (this.rolloverMesh._w % 20 === 0) {
            this.rolloverPosition.x = Math.floor(this.rolloverPosition.x / 10) * 10;
          } else {
            this.rolloverPosition.x = Math.floor(this.rolloverPosition.x / 10) * 10 + 5;
          }
          this.rolloverPosition.y = Math.floor(this.rolloverPosition.y / 10) * 10;
          if (this.rolloverMesh._d % 20 === 0) {
            this.rolloverPosition.z = Math.floor(this.rolloverPosition.z / 10) * 10;
          } else {
            this.rolloverPosition.z = Math.floor(this.rolloverPosition.z / 10) * 10 + 5;
          }
        }
      }
    }
  }

  initAfterMapDataLoad(data: any): void {
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
      if (children[i].name === 'map' || children[i].name === 'path') {
        this.scene.remove(children[i]);
        continue;
      }
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
		let voxel, mesh, tmpMaterial, tmpGeometry;
    let voxelLength = voxels.length;
		for (let i = 0; i < voxelLength; i++) {
      voxel = voxels[i];
      tmpMaterial = this.getSelectedDingsMaterial(voxel.t);
      tmpGeometry = THREE.JSONLoader.prototype.parse(voxel.g.data);
			mesh = new THREE.Mesh(tmpGeometry.geometry, tmpMaterial);
			mesh.position.x = voxel.x;
			mesh.position.y = voxel.y;
			mesh.position.z = voxel.z;
      mesh.name = (this.getSelectedDingsType(voxel.t) === 'path') ? 'path' : 'map';
      if (mesh.name == 'path') {
        this.pathObj = mesh;
      }
      this.scene.add(mesh);
      
      if (mesh.name == 'path') {
        this.setPath(false);
      }
		}
    this.loadingModal.hide();

    if (this.map.objFileName && this.map.objFileName.length > 0) {
      this.loadingDeskModal.show();
      let url = 'https://s3.eu-central-1.amazonaws.com/easyinside/desks/' + this.map.objFileName;
      let xhr = new XMLHttpRequest();
      if ('withCredentials' in xhr) {
        xhr.open('GET', url, true);
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
            t.initAfterDeskDataLoad(data);
          } else {
            console.log('Error in reading map data');
          }
        }
      };
      xhr.send();
    }
  }

  initAfterDeskDataLoad(data: any): void {
    var children = this.scene.children.slice(0);
        
    for (var i = 0; i < children.length; i++) {
			if (children[i]._p !== 'desk' && children[i]._p !== 'place' && children[i]._p !== 'object') {
				continue;
			}
			if (children[i] === this.rolloverMesh) {
				continue;
			}
			this.scene.remove(children[i]);
		}

    let desks = data;
    let deskLength = desks.length;
    let voxel, mesh, tmpMaterial, tmpGeometry;
    for (let i = 0; i < deskLength; i++) {
      voxel = desks[i];
      tmpMaterial = this.getSelectedDingsMaterial(voxel.t);
      tmpGeometry = this.getSelectedDingsGeometry(voxel.t);
      mesh = new THREE.Mesh(tmpGeometry, tmpMaterial);
      mesh.position.set(voxel.x, voxel.y, voxel.z);
      switch (this.getSelectedDingsId(voxel.t)) {
        case '5909ef6f8a0d422b37dc5247':
          mesh.geometry.applyMatrix(new THREE.Matrix4().makeTranslation(-80, -36, -40));
          break;
        case '5909efc18a0d422b37dc5248':
          mesh.geometry.applyMatrix(new THREE.Matrix4().makeTranslation(0, -70, 0));
          break;
      }
      if (voxel.r === 1) {
        mesh.rotation.y += Math.PI / 2;
        mesh._r = true;
      } else {
        mesh._r = false;
      }
      mesh.matrixAutoUpdate = false;
      mesh.updateMatrix();
      mesh._p = this.getSelectedDingsType(voxel.t);
      mesh._t = voxel.t;
      mesh._userID = voxel.i;
      mesh._n = this.getSelectedDingsName(voxel.t);
      this.scene.add(mesh);
    }

    this.loadingDeskModal.hide();
  }

  putDelRollover(): void {
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
        console.info(intersector);
        if (intersector.object._p === 'desk' || intersector.object._p === 'place' || intersector.object._p === 'object') {
          this.scene.remove(intersector.object);
          this.needSave = true;
        }
      } else if (this.isCtrlDown) {
        this.setRolloverPosition(intersector);

        let material = this.getSelectedDingsMaterial(this.selectedDing._idx);
        let geometry = this.getSelectedDingsGeometry(this.selectedDing._idx);
        let obj: any = new THREE.Mesh(geometry, material);
        if (this.selectedDing.type === 'desk') {
          if (this.selectedDing._id === '5909ef6f8a0d422b37dc5247') {
            obj.geometry.applyMatrix(new THREE.Matrix4().makeTranslation(-80, -36, -40));
          } else if (this.selectedDing._id === '5909efc18a0d422b37dc5248') {
            obj.geometry.applyMatrix(new THREE.Matrix4().makeTranslation(0, -70, 0));
          }
        }
        obj.position.copy(this.rolloverPosition);
        if (this.rolloverMesh._r === true) {
          obj.rotation.y += Math.PI / 2;
          obj._r = true;
        } else {
          obj._r = false;
        }
        obj.matrixAutoUpdate = false;
				obj.updateMatrix();
        obj._p = this.getSelectedDingsType(this.selectedDing._idx);
        obj._n = this.getSelectedDingsName(this.selectedDing._idx);
        obj._userID = null;
				this.scene.add(obj);
        this.needSave = true;
      }
    }
  }

  saveMap(exitAfterSave: boolean): void {
    this.saveProcessStarted = true;
		let children = this.scene.children;
		let voxels: any = [];
		let child: any;

		for (let i = 0; i < children.length; i++) {
			child = children[i];
			if (child._p !== 'desk' && child._p !== 'place' && child._p !== 'object') {
				continue;
			}
			if (child === this.rolloverMesh) {
				continue;
			}
			
			voxels.push({
				x: child.position.x,
				y: child.position.y,
				z: child.position.z,
				t: child.material._idx,
        r: (child._r === true) ? 1 : 0,
        i: child._userID,
        p: child._p,
        n: child._n
			});
		}

		let dataUri = JSON.stringify(voxels);
		this.spaceService.saveDeskFile(this.mapId, {file:dataUri}).subscribe(res => {
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
    this.putDelRollover();

    this.raycaster.setFromCamera(this.mouse2D, this.camera);

    let intersects = this.raycaster.intersectObjects(this.scene.children);
    if (intersects.length > 0) {
      let intersector = this.getRealIntersector(intersects);

      if (intersector) {
        this.setRolloverPosition(intersector);
        this.rolloverMesh.position.copy(this.rolloverPosition);
      }
    }

    this.renderer.render(this.scene, this.camera);
  }
}
