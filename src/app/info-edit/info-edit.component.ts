import { Component, OnInit, ElementRef, AfterViewInit, HostListener, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { NavigationService } from '../navigation.service';
import { SpaceService } from '../space.service';
import { ApiService } from '../api.service';
import { InfosService } from '../infos.service';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { FennecFox } from '../fennecfox';
import { FileUploader } from 'ng2-file-upload';
import * as THREE from 'three';     // must 'npm install @types/three'!!!
import TrackballControls from '../../../node_modules/three/examples/js/controls/NgTrackballControls.js';

@Component({
  selector: 'app-info-edit',
  templateUrl: './info-edit.component.html',
  styleUrls: [
    './info-edit.component.css',
    '../../assets/bootstrap/sb-admin2/dist/css/sb-admin-2.css'
  ],
  providers: [NavigationService]
})
export class InfoEditComponent implements OnInit, AfterViewInit {

  renderingAllowed: boolean = true;
  status: string;
  message: string;
  timeZone: string = '+01:00';
  timeFormat: string = 'DD-MM-YYYY HH:mm:ss';
  mapId: string;
  map: any = {};
  dings: any = [];
  infos: any = [];
  info: any = {};
  infoAssigned: string;
  infoIdAssigned: string;
  infoId: string;
  //selectedMeshId: string;
  graphicCardNeeded: boolean = false;
  browserNeeded: boolean = false;
  saveProcessStarted: boolean = false;
  saveFinished: boolean = false;
  viewInitFinished: boolean = false;
  dataInitFinished: boolean = false;
  firstInitFinished: boolean = false;
  deleteProcess: boolean = false;
  editComplete: boolean = false;
  needSave: boolean = false;
  public uploader: FileUploader;
  public uploader2: FileUploader;
  @ViewChild('optAskModal') public optAskModal: ModalDirective;
  @ViewChild('loadingModal') public loadingModal: ModalDirective;
  @ViewChild('loadingDeskModal') public loadingDeskModal: ModalDirective;
  @ViewChild('saveAskModal') public saveAskModal: ModalDirective;
  @ViewChild('infoListModal') public infoListModal: ModalDirective;
  @ViewChild('infoCreateModal') public infoCreateModal: ModalDirective;
  @ViewChild('infoEditModal') public infoEditModal: ModalDirective;
  @ViewChild('foxInfoModal') public foxInfoModal: ModalDirective;
  @ViewChild('infoCreateUploader') public infoCreateUploader: any;
  @ViewChild('infoEditUploader') public infoEditUploader: any;

  container: any;
  renderer: any;
  controls: any;
  camera:any;
  scene: any;
  pathObj: any;
  zoomFactor: number = 1;
  zoomIncFactor: number = 0.01;
  raycaster: any;
  mouse2D: any;
  foxes: any = {};
  preChangedFoxId: any;
  selectedFoxId: any;
  newInfoForm: FormGroup;
  editInfoForm: FormGroup;
  alert: any = {
    visible: false,
    message: ''
  };

  constructor(private route: ActivatedRoute, private location: Location, private navigationService: NavigationService, private spaceService: SpaceService, private apiService: ApiService, private infosService: InfosService, private elementRef: ElementRef, private router: Router, fb: FormBuilder) {
    navigationService.navMessage$.subscribe(message => {
      this.message = message;

      if (message.includes('showinfos')) {
        this.infoListModal.show();
      } else if (message.includes('save')) {
        this.saveMap(false);
      } else if (message.includes('safeexit')) {
        this.saveMap(true);
      } else if (message.includes('exit')) {
        this.exitEditor();
      } else if (message.includes('pathtoggle')) {
        let data: any = this.message.split('=');
        this.setPath((data[1] == 'On') ? true : false);
      } else if (message.includes('home')) {
        this.goHome();
      }
    });
    navigationService.navStatus$.subscribe(status => {
      this.status = status;
    });
    this.newInfoForm = fb.group({
      'name': [null, [Validators.required, Validators.pattern('[0-9A-Za-zàâçéèêëîïôûùüÿñæœäöüÀÂÇÉÈÊËÎÏÔÛÙÜŸÑÆŒÄÖÜß&:)(,.+–?!/\' -]*')]],
      'description': "",
      'contact': ""
    });
    this.editInfoForm = fb.group({
      'name': [null, [Validators.required, Validators.pattern('[0-9A-Za-zàâçéèêëîïôûùüÿñæœäöüÀÂÇÉÈÊËÎÏÔÛÙÜŸÑÆŒÄÖÜß&:)(,.+–?!/\' -]*')]],
      'description': "",
      'contact': ""
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
        this.getDings();
      });
    this.uploader = new FileUploader({url:''});
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      var responsePath = JSON.parse(response);
    };
    this.uploader2 = new FileUploader({url:''});
    this.uploader2.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      var responsePath = JSON.parse(response);
    };
    this.navigationService.setNavigationStatus('infoeditor');
  }

  ngAfterViewInit() {
    this.container = document.querySelector('#page-wrapper');
    this.mouse2D = new THREE.Vector2();
    this.viewInitFinished = true;

    if (this.dataInitFinished == true) {
      this.initWebGL();
    }
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

      this.getInfos();
    });
  }

  getInfos(): void {
    this.infosService.getInfos(this.map._space).subscribe(infos => {
      this.infos = infos;

      this.navigationService.sendNavigationMessage('infocount=' + this.infos.length);

      if (this.firstInitFinished === false) {
        this.dataInitFinished = true;
        if (this.viewInitFinished == true) {
          this.initWebGL();
        }
        this.firstInitFinished = true;
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

    let ambientLight = new THREE.AmbientLight(0x606060);
		let directionalLight = new THREE.DirectionalLight(0xffffff);
    directionalLight.position.set(1, 1, -1).normalize();
    this.scene.add(ambientLight);
    this.scene.add(directionalLight);

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

  setPath(status: boolean): void {
    if (this.pathObj) {
      if (status) {
        this.scene.add(this.pathObj);
      } else {
        this.scene.remove(this.pathObj);
      }
    }
  }

  @HostListener('window:keydown', ['$event']) onDocumentKeyDown(e: KeyboardEvent):void {
		switch (e.keyCode) {
			case 38:  // up arrow
				this.zoomInOut('in');
				break;
			case 40:  // down arrow
				this.zoomInOut('out');
				break;
		}	
	};

  onDocumentMouseMove(event: MouseEvent): void {
    this.mouse2D.x = ((event.clientX - this.container.offsetLeft) / this.container.clientWidth) * 2 - 1;
		this.mouse2D.y = - ((event.clientY - this.container.offsetTop) / this.container.clientHeight) * 2 + 1;
  }

  onDocumentMouseUp(event: MouseEvent): void {
    this.raycaster.setFromCamera(this.mouse2D, this.camera);
    var intersects = this.raycaster.intersectObjects(this.scene.children, true);
    if (intersects.length > 0) {
			var intersector = this.getRealIntersector(intersects);

			if (intersector) {
        this.selectOnFox(intersector);
        this.openFoxInfo(intersector.ding._userID, intersector.ding.uuid);
			}
		}
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

  getRealIntersector(intersects): any {
    let intersector: any;
		for (let i = 0; i < intersects.length; i++) {
			intersector = intersects[i];
			if (intersector.object.name === 'ding') {
				return this.foxes[intersector.object.uuid];
			}
		}
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

  getSelectedDing(idx: any): any {
    let dingChoosen;

    for (let i in this.dings) {
      if (this.dings[i]._idx == idx) {
        dingChoosen = this.dings[i];
      }
    }

    return dingChoosen;
  }

  findInfoById(id: any): any {
    for (let i in this.infos) {
      if (this.infos[i]._id === id) {
        return this.infos[i];
      }
    }

    return null;
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
			this.scene.remove(children[i]);
		}

    let voxels = data;
    let voxelLength = voxels.length;
    let fennecFox, voxel, tmpInfo;
    for (let i = 0; i < voxelLength; i++) {
      voxel = voxels[i];
      fennecFox = new FennecFox(this.getSelectedDing(voxel.t));
      fennecFox.setPosition(voxel.x, voxel.y, voxel.z);
      fennecFox.setRotation(voxel.r === 1 ? true : false);
      tmpInfo = this.findInfoById(voxel.i);
      if (tmpInfo) {
        fennecFox.setUser(voxel.i, tmpInfo.name);
      } else {
        fennecFox.setUser(null, null);
      }
      fennecFox.update();
      this.foxes[fennecFox.ding.uuid] = fennecFox;
      this.scene.add(fennecFox.root);
    }

    this.loadingDeskModal.hide();
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

  setFocusOnFox(aFox: any): void {
    if (aFox.ding.uuid !== this.preChangedFoxId) {
      if (typeof this.preChangedFoxId !== 'undefined') {
        if (this.preChangedFoxId !== this.selectedFoxId) {
          this.setBlurOnFox(this.foxes[this.preChangedFoxId]);
        }
      }
    }
    if (aFox.ding.uuid !== this.selectedFoxId) {
      this.preChangedFoxId = aFox.ding.uuid;
      aFox.setFocus();
    } else {
      this.preChangedFoxId = void(0);
    }  
  }

  setBlurOnFox(aFox: any): void {
    aFox.blur();
  }

  selectOnFox(aFox: any): void {
    if (aFox.ding.uuid !== this.selectedFoxId) {
      if (typeof this.selectedFoxId !== 'undefined') {
        this.setBlurOnFox(this.foxes[this.selectedFoxId]);
      }
    }
    this.selectedFoxId = aFox.ding.uuid;
    aFox.select();
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
    this.raycaster.setFromCamera(this.mouse2D, this.camera);

    let intersects = this.raycaster.intersectObjects(this.scene.children, true);
    if (intersects.length > 0) {
      let intersector = this.getRealIntersector(intersects);

      if (intersector) {
        this.setFocusOnFox(intersector);
      } else {
        if (typeof this.preChangedFoxId !== 'undefined') {
          if (this.preChangedFoxId !== this.selectedFoxId) {
            this.setBlurOnFox(this.foxes[this.preChangedFoxId]);
          }
        }
      }
    }

    this.renderer.render(this.scene, this.camera);
  }

  openCreateModal(event): void {
    event.preventDefault();

    this.info = {};
    this.info.type = 'people';
    this.info._space = this.map._space;
    this.infoCreateUploader.nativeElement.value = '';
    this.infoListModal.hide();
    this.infoCreateModal.show();
  }

  uploaderAvailable(): boolean {
    if (this.uploader) {
      return (!this.uploader.getNotUploadedItems().length);
    } else {
      return true;
    }
  }

  uploader2Available(): boolean {
    if (this.uploader2) {
      return (!this.uploader2.getNotUploadedItems().length);
    } else {
      return true;
    }
  }

  createInfo(value: any) {
    var ifo = {
      name: value.name,
      type: this.info.type,
      description: value.description,
      contact: value.contact,
      _space: this.info._space
    }
    this.infosService.createInfo(ifo).subscribe(res => {
      this.uploader.queue.forEach((el) => {
        el.url = '/info/pic-file/' + res._id;
      });
      if (this.uploaderAvailable() === false) {
        this.uploader.uploadAll();
      }
      this.getInfos();
    }, err => {
      this.alert.visible = true;
      this.alert.message = err;
    });
    this.infoCreateModal.hide();
    this.newInfoForm.reset();
    this.infoListModal.show();
  }

  closeCreateModal(event): void {
    event.preventDefault();
    this.infoCreateModal.hide();
    this.infoListModal.show();
  }

  changeInfoStatus(event, property, value): void {
    event.preventDefault();
    this.info[property] = value;
    this.editInfoForm.updateValueAndValidity();
  }

  openEditModal(event: any, iId: any): void {
    event.preventDefault();
    this.infosService.getInfoById(iId).subscribe(res => {
      this.info = res;
      this.infoId = res._id;
      this.editInfoForm.controls['name'].setValue(this.info.name, { onlySelf: true });
      this.editInfoForm.controls['description'].setValue(this.info.description, { onlySelf: true });
      this.editInfoForm.controls['contact'].setValue(this.info.contact, { onlySelf: true });
      this.editInfoForm.updateValueAndValidity();
      this.infoEditUploader.nativeElement.value = '';
      this.infoListModal.hide();
      this.infoEditModal.show();
    }, err => {
      this.alert.visible = true;
      this.alert.message = err;
    })
  }

  editInfo(value: any): void {
    let ifo = {
      name: value.name,
      type: this.info.type,
      description: value.description,
      contact: value.contact,
    };
    this.infosService.saveInfo(this.infoId, ifo).subscribe(res => {
      this.uploader2.queue.forEach((el) => {
        el.url = '/info/pic-file/' + res._id;
      });
      if (this.uploader2Available() === false) {
        this.uploader2.uploadAll();
      }
      this.getInfos();
      this.editComplete = true;
      this.infoEditModal.hide();
      this.infoListModal.show();

      setTimeout(() => {
        this.editComplete = false;
      }, 3000);
    }, err => {
      this.alert.visible = true;
      this.alert.message = err;
    });
  }

  closeEditModal(event): void {
    event.preventDefault();
    this.infoListModal.show();
    this.infoEditModal.hide();
  }

  askDelete(event): void {
    event.preventDefault();
    this.infoEditModal.hide();
    this.deleteProcess = true;
  }

  deleteInfo(event): void {
    event.preventDefault();
    this.infosService.deleteInfo(this.infoId).subscribe(res => {
      this.deleteProcess = false;
      this.getInfos();
      this.infoEditModal.hide();
      this.infoListModal.show();
    }, err => {
      this.deleteProcess = false;
      this.alert.visible = true;
      this.alert.message = err;
    });
  }

  openFoxInfo(uId: string, meshId: string): void {
    //this.selectedMeshId = meshId;
    this.selectedFoxId = meshId;
    this.changeInfoAssigned(null, uId);
    /*let info = this.findInfoById(uId);
    if (info) {
      //this.infoAssigned = info.name;
    } else {
      //this.infoAssigned = 'not assigned yet';
    }*/
    this.foxInfoModal.show();
  }

  closeFoxModal(event): void {
    event.preventDefault();
    if (typeof this.selectedFoxId !== 'undefined') {
      this.setBlurOnFox(this.foxes[this.selectedFoxId]);
      this.selectedFoxId = void(0);
    }
    this.foxInfoModal.hide();
  }

  changeInfoAssigned(event: any, uId: string): void {
    if (event) {
      event.preventDefault();
    }
    let info = this.findInfoById(uId);
    if (info) {
      this.infoAssigned = info.name;
      this.infoIdAssigned = uId;
    } else {
      this.infoAssigned = 'not assigned yet';
      this.infoIdAssigned = null;
    }
  }

  saveInfoAssign(event): void {
    event.preventDefault();
    let info = this.findInfoById(this.infoIdAssigned);
    let ifo = {
      mapid: this.mapId
    };
    this.infosService.setInfoMap(this.infoIdAssigned, ifo).subscribe(res => {
      this.foxes[this.selectedFoxId].setUser(this.infoIdAssigned, info.name);
      this.closeFoxModal(event);
    });
    this.needSave = true;
  }

  clearInfoAssign(event): void {
    event.preventDefault();
    console.log(this.infoIdAssigned);
    this.infosService.delInfoMap(this.infoIdAssigned).subscribe(res => {
      this.foxes[this.selectedFoxId].clearUser();
      this.closeFoxModal(event);
    });
    this.needSave = true;
  }

  saveMap(exitAfterSave: boolean): void {
    this.saveProcessStarted = true;
		let children = this.scene.children;
		let voxels: any = [];
		let child: any;

		for (let i = 0; i < children.length; i++) {
			child = children[i];
			if (typeof child.ding === 'undefined') {
				continue;
			}
			
			voxels.push({
				x: child.ding.position.x,
				y: child.ding.position.y,
				z: child.ding.position.z,
				t: child.ding._t,
        p: child.ding._p,
        n: child.ding._n,
        r: (child.ding._r === true) ? 1 : 0,
        i: child.ding._userID
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
}
