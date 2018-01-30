import { Component, OnInit, ElementRef, AfterViewInit, HostListener, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { ApiService } from '../api.service';
import { FennecFox } from '../fennecfox';
import { Zatoichi } from '../zatoichi';
import { CameraAction } from '../camera-action';
import { PlaneNavigator } from '../plane-navigator';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { IndoorLocationConverter, CanvasUnit, GeoUnit, ArrayUnit } from '../indoor-location-converter';
import { GraphSearch } from '../graph-search';
import * as THREE from 'three';     // must 'npm install @types/three'!!!

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.less']
})
export class MapViewComponent implements OnInit, AfterViewInit {

  public window = window as any;  // type assertion
  renderingAllowed: boolean = true;
  mapId: string;
  map: any = {};
  space: any = {};
  dings: any = [];
  infos: any = [];
  desks: any = [];
  robots: any = [];
  infoId: string;
  selectedInfo: any;
  selectedInfoType: string;
  multiMaps: boolean = false;
  graphicCardNeeded: boolean = false;
  browserNeeded: boolean = false;
  routeCalculating: boolean = false;
  navigationPreparing: boolean = false;
  viewInitFinished: boolean = false;
  dataInitFinished: boolean = false;
  firstInitFinished: boolean = false;
  robotStart: boolean = false;
  selectedRobotName: string;
  @ViewChild('loadingModal') public loadingModal: ModalDirective;
  @ViewChild('loadingDeskModal') public loadingDeskModal: ModalDirective;
  isDropup: boolean = false;
  robotTrafficTimer: any;
  robotMeshes: any = {};

  container: any;
  renderer: any;
  camera:any;
  scene: any;
  pathObj: any;
  pathOn: string = 'Off';
  cameraAction: CameraAction;
  planeNav: PlaneNavigator;
  raycaster: any;
  mouse2D: any;
  foxes: any = {};
  lastMsec: number;
  mapSizeMax: any = {
    x: 0,
    y: 0,
    z: 0
  };
  selectedFoxId: any;
  preChangedFoxId: any;
  infoShow: boolean = false;
  infoImgShow: boolean = false;
  arrayCoordinate: string;
  ILC: IndoorLocationConverter;
  startPoint: any;
  endPoint: any;
  routeMesh: any;
  graphSearch: GraphSearch;

  constructor(private route: ActivatedRoute, private location: Location, private apiService: ApiService, private elementRef: ElementRef, private router: Router, fb: FormBuilder) {


  }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => 
        this.apiService.getMap(params['id'])
      )
      .subscribe(res => {
        if (typeof res.error !== 'undefined') {
          if (res.error.includes('PASSWORD')) {
            if (this.infoId) {
              document.location.href = '/map/login/' + res.id + '?infoId=' + this.infoId;
            } else {
              document.location.href = '/map/login/' + res.id;
            }
          } else if (res.error.includes('PRIVATE')) {
            document.location.href = '/';
          }
        } else {
          this.map = res;
          this.mapId = this.map._id;
          this.multiMaps = (this.map._space.maps.length > 1) ? true : false;
          this.getSpace();
        }
      }, err => {
        console.log(err);
      });
    this.route.queryParams.subscribe(params => {
      this.infoId = params['infoId'];
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

  ngOnDestroy() {
    this.renderingAllowed = false;
  }

  getSpace(): void {
    this.apiService.getSpace(this.map._space._id).subscribe(space => {
      this.space = space;
      this.getDings();
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
    this.apiService.getInfo(this.map._space._id).subscribe(infos => {
      this.infos = infos;

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

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(25, this.container.clientWidth / this.container.clientHeight, 50, 1e7);
    this.raycaster = new THREE.Raycaster();
    this.planeNav = new PlaneNavigator();
    this.cameraAction = new CameraAction(this.window, this.scene, this.camera, this.container, this.planeNav, this.raycaster, null);
    this.cameraAction.callbackAfterMove = function(that) {
        let t = that;
        return function(aFox) {
          let info = t.findInfoById(aFox.ding._userID);
          if (info) {
            t.selectedInfo = info;
            if (info.picFileName) {
              t.infoImgShow = true;
            }
            switch (t.selectedInfo.type) {
              case 'people':
                t.selectedInfoType = 'fa fa-user';
                break;
              case 'place':
                t.selectedInfoType = 'fa fa-map-marker';
                break;
              default:
                t.selectedInfoType = 'fa fa-info';
                break;
            }
            t.infoShow = true;
          } else {
            t.infoShow = false;
          }
        }
    }(this);
    this.scene.add(this.camera);
    this.scene.add(this.planeNav.root);

    setTimeout(function() {
      let t = this;
      return function() {
        t.setRendererSize();
        if (t.infoId) {
          let fox = t.findFoxByUserId(t.infoId);
          if (fox) {
            t.selectOnFox(fox);
            t.cameraAction.closeToDesk(fox);
          }
        }
      }
    }.call(this), 3000);
    this.container.appendChild(this.renderer.domElement);
    this.window.addEventListener('resize', function() {
      let t = this;
      return function() {
        t.setRendererSize();
      }
    }.call(this));

    let ambientLight = new THREE.AmbientLight(0x606060);
		let directionalLight = new THREE.DirectionalLight(0xffffff);
    directionalLight.position.set(1, 1, -1).normalize();
    this.scene.add(ambientLight);
    this.scene.add(directionalLight);

    this.animate(0);

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
      return !!this.window.WebGLRenderingContext && !!document.createElement('canvas').getContext('experimental-webgl');
    } catch (e) {
      return false;
    }
  }

  showWebGLAlert(): void {
    if (this.window.WebGLRenderingContext) {
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
    this.planeNav.moveAtTheFrontOf(this.camera, this.window);
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
      mesh.pattern = this.getSelectedDing(voxel.t).type;
      mesh.name = (mesh.pattern === 'path') ? 'path' : 'map';
      if (mesh.pattern == 'path') {
        this.pathObj = mesh;
      }
      this.scene.add(mesh);
      if (mesh.name == 'path') {
        this.pathOn = 'Off';
        this.togglePath(null);
      }
      if (typeof mesh.geometry.boundingBox === 'undefined' || mesh.geometry.boundingBox === null) {
        mesh.geometry.computeBoundingBox();
      }
      if (this.mapSizeMax.x < mesh.geometry.boundingBox.max.x) {
        this.mapSizeMax.x = mesh.geometry.boundingBox.max.x;
      }
      if (this.mapSizeMax.y < mesh.geometry.boundingBox.max.y) {
        this.mapSizeMax.y = mesh.geometry.boundingBox.max.y;
      }
      if (this.mapSizeMax.z < mesh.geometry.boundingBox.max.z) {
        this.mapSizeMax.z = mesh.geometry.boundingBox.max.z;
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

    this.desks = data;
    let voxelLength = this.desks.length;
    let fennecFox, voxel, tmpInfo;
    for (let i = 0; i < voxelLength; i++) {
      voxel = this.desks[i];
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

    this.ILC = new IndoorLocationConverter();
    let canvasWidth = Math.floor(10 * this.map.width / this.map.voxelSize);
    let canvasHeight = Math.floor(10 * this.map.height / this.map.voxelSize);
    let halfCW = canvasWidth / 2;
    let halfCH = canvasHeight / 2;
    this.ILC.setArrayMap(0, (this.map.width / this.map.voxelSize) - 1, 0, (this.map.height / this.map.voxelSize) - 1, 1, 1);
    this.ILC.setCanvasMap(-halfCW, halfCW, -halfCH, halfCH, 1, 1);
    //this.ILC.setGeoMap(13.421238, 52.525556, 13.420783, 52.525176, 13.421007, 52.525659);

    //this.cameraAction.setPosition(-3000, 5000, -6500);
    let maxDist = Math.max(this.mapSizeMax.y, this.mapSizeMax.y, this.mapSizeMax.z);
    this.cameraAction.setPosition(this.mapSizeMax.x, maxDist * 3, maxDist * 3.5);
    this.cameraAction.setOriginPosition(this.mapSizeMax.x, maxDist * 3, maxDist * 3.5);
    this.cameraAction.setSpinPoint(0, 0, 0);
    this.container.classList.remove('hedgehop');
    this.container.classList.add('stratosphere');
    this.container.style.display = 'block';
    this.planeNav.hide();
    this.planeNav.moveAtTheFrontOf(this.camera, this.window);

    let s = document.createElement('script'); 
    s.innerText = 'function formatState(data) {'
      + 'var icon;'
      + 'if (!data.id) { return data.text; }'
      + 'switch (data.element.value.toLowerCase().split(\',\')[0]) {'
      + 'case \'people\':'
      + 'icon=\'fa fa-user\';'
      + 'break;'
      + 'case \'place\':'
      + 'icon=\'fa fa-map-marker\';'
      + 'break;}'
      + 'var rtn=$(\'<span><i class="\'+icon+\'" aria-hidden="true"></i> \'+data.text+\'</span>\');'
      + 'return rtn;'
      + '};'
      + '(function(){'
      + '$(\'#search-info\').select2({'
      + 'templateResult:formatState,'
      + 'templateSelection:formatState'
      + '});'
      + '})();';
    this.elementRef.nativeElement.appendChild(s);
    this.elementRef.nativeElement.querySelector('#search-info').onchange = function(that) {
      let t = that;
      return function (evt) {
        let vals = evt.target.value.split(',');
        let ifo = t.findInfoById(vals[1]);
        if (ifo._map && ifo._map._id !== t.mapId) {
          document.location.href = '/map/' + ifo._map._id + '?infoId=' + ifo._id;
        } else {
          let fox = t.findFoxByUserId(ifo._id);
          //console.log(fox);
          if (fox) {
            t.selectOnFox(fox);
            t.cameraAction.closeToDesk(fox);
          }
        }
      }
    }(this);

    if (this.map.allowRobot) {
      this.navigationPreparing = true;
      this.initMapGraph();
    }
  }

  onDocumentMouseMove(event): void {
    this.mouse2D.x = ((event.clientX - this.container.offsetLeft) / this.container.clientWidth) * 2 - 1;
		this.mouse2D.y = - ((event.clientY - this.container.offsetTop) / this.container.clientHeight) * 2 + 1;
  }

  onDocumentMouseUp(event): void {
    if (event.altKey) {
      return this.makePath(event);
    }

    this.raycaster.setFromCamera(this.mouse2D, this.camera);
    let intersects = this.raycaster.intersectObjects(this.scene.children, true);
    if (intersects.length > 0) {
      let intersector = this.getRealIntersector(intersects);

      if (intersector) {
        if (intersector.ding) {
          if (intersector.ding.name === 'ding') {
            let aFox = this.foxes[intersector.ding.uuid];
            this.preChangedFoxId = void(0);
            this.selectOnFox(aFox);
            this.cameraAction.closeToDesk(aFox);
          }
        } else if (intersector.object.name === 'btnUp') {
          this.cameraAction.hedgehop(400, 0, 0);
        } else if (intersector.object.name === 'btnDown') {
          this.cameraAction.hedgehop(-400, 0, 0);
        } else if (intersector.object.name === 'btnLeft') {
          this.cameraAction.hedgehop(0, 0, -400);
        } else if (intersector.object.name === 'btnRight') {
          this.cameraAction.hedgehop(0, 0, 400);
        }
      }
    }
  }

  togglePath(event): void {
    if (event) {
      event.preventDefault();
    }
    if (this.pathObj) {
      if (this.pathOn == 'On') {
        this.scene.add(this.pathObj);
      } else {
        this.scene.remove(this.pathObj);
      }
    }
  }

  makePath(e): void {
      this.raycaster.setFromCamera(this.mouse2D, this.camera);
      let intersects = this.raycaster.intersectObjects(this.scene.children, true);

      if (intersects.length > 0) {
          let intersector = this.getMapIntersector(intersects);
          
          if (intersector) {
              if (!this.startPoint) {
                  this.startPoint = new CanvasUnit(intersector.point.x, intersector.point.z, this.ILC);
              } else if (!this.endPoint) {
                  this.routeCalculating = true;
                  this.endPoint = new CanvasUnit(intersector.point.x, intersector.point.z, this.ILC);
                  let startArray = this.startPoint.toArray(),
                      endArray = this.endPoint.toArray();
                      //flipSArray = {x: 529 - startArray.x, y: 199 - startArray.y},
                      //flipEArray = {x: 529 - endArray.x, y: 199 - endArray.y};
                  let x1 = startArray.x,
                      y1 = startArray.y,
                      x2 = endArray.x,
                      y2 = endArray.y,
                      startPoint = this.graphSearch.graph.grid[x1][y1],
                      endPoint = this.graphSearch.graph.grid[x2][y2];

                  if (endPoint.weight === 0) {
                    let safePoint = this.graphSearch.getNearestPoint(x2, y2);
                    endPoint = this.graphSearch.graph.grid[safePoint.x][safePoint.y];
                  }

                  let path = this.graphSearch.astar.search(this.graphSearch.graph, startPoint, endPoint, {closest: false});
                  this.createRoute(path, null);
                  this.startPoint = null;
                  this.endPoint = null;
                  this.routeCalculating = false;
                  //this.apiService.getPath(this.mapId, startArray.x, startArray.y, endArray.x, endArray.y).subscribe(path => {});
              }
          }
      }
  }

  eraseRoute(): void {
    if (this.routeMesh) {
        this.scene.remove(this.routeMesh);
    }
  }

  createRoute(node, color): void {
      this.eraseRoute();
      var nodes = [],
          lineColor = color? color : {color: 0xff6600},
          posArray, posCanvas;

      for (var i = 0; i < node.length; i++) {
          posArray = new ArrayUnit(node[i].x, node[i].y, this.ILC);
          posCanvas = posArray.toCanvas();
          nodes.push(new THREE.Vector3(posCanvas.x, 50, posCanvas.y));
      }

      var curve = new THREE.CatmullRomCurve3(nodes),
          shape = new THREE.Shape([
              new THREE.Vector2(-5, 2),
              new THREE.Vector2(5, 2),
              new THREE.Vector2(5, -2),
              new THREE.Vector2(-5, -2)
          ]),
          curveGeo = new THREE.ExtrudeGeometry(shape, {
              steps: 200,
              bevelEnabled: false,
              extrudePath: curve
          }),
          curveMat = new THREE.MeshBasicMaterial(lineColor);
      this.routeMesh = new THREE.Mesh(curveGeo, curveMat);
      this.scene.add(this.routeMesh);
  }

  lighteningRoute(originalRoute: any): any {
    let lighteningRoute: any = [];

    for (var r of originalRoute) {
      lighteningRoute.push({x:r.x, y:r.y});
    }

    return lighteningRoute;
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

  getSelectedDingsType(idx: any): any {
    let dingChoosen;

    for (let i in this.dings) {
      if (this.dings[i]._idx == idx) {
        dingChoosen = this.dings[i];
      }
    }

    return dingChoosen.type;
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
    //this.selectedFoxId = void(0); // last check
    aFox.blur();
  }

  selectOnFox(aFox: any): void {
    //console.log(aFox.ding.uuid, this.selectedFoxId);
    if (aFox.ding.uuid !== this.selectedFoxId) {
      if (typeof this.selectedFoxId !== 'undefined') {
        this.setBlurOnFox(this.foxes[this.selectedFoxId]);
        this.selectedFoxId = void(0);
      }
    }
    this.selectedFoxId = aFox.ding.uuid;
    aFox.select();
  }

  findFoxByUserId(uId: string): any {
    for (let k in this.foxes) {
      if (this.foxes[k].ding._userID == uId) {
        return this.foxes[k];
      }
    }
    return void(0);
  }

  getRealIntersector(intersects) {
		var intersector;
		for (var i = 0; i < intersects.length; i++) {
			intersector = intersects[i];
      if (intersector.object.name) {
        switch (intersector.object.name) {
          case 'ding':
            return this.foxes[intersector.object.uuid];
          case 'btnUp':
          case 'btnDown':
          case 'btnLeft':
          case 'btnRight':
            return intersector;
        }
      }
		}
	}

  getMapIntersector(intersects) {
		var intersector;
		for (var i = 0; i < intersects.length; i++) {
			intersector = intersects[i];
      if (intersector.object.name) {
        switch (intersector.object.name) {
          case 'map':
            return intersector;
        }
      }
		}
	}

  animate(nowMsec): void {
    this.lastMsec = (this.lastMsec) ? this.lastMsec : nowMsec;
    let deltaMsec = nowMsec - this.lastMsec;
    if (this.cameraAction.isMoving === true) {
        this.cameraAction.animate(deltaMsec);
    }
    this.lastMsec = nowMsec;
    if (this.renderingAllowed) {
      requestAnimationFrame(function() {
        let t = this;
        return function(obj) {
          t.animate(obj);
        }
      }.call(this));
    }
    this.render();
  }

  render(): void {
    this.raycaster.setFromCamera(this.mouse2D, this.camera);

    let intersects = this.raycaster.intersectObjects(this.scene.children, true);
    if (intersects.length > 0) {
      let intersector = this.getRealIntersector(intersects);

      if (intersector) {
        if (intersector.ding) {
          if (intersector.ding.name === 'ding') {
            this.setFocusOnFox(intersector);
          }
        }
      } else {
        if (typeof this.preChangedFoxId !== 'undefined') {
          if (this.preChangedFoxId !== this.selectedFoxId) {
            this.setBlurOnFox(this.foxes[this.preChangedFoxId]);
          }
        }
        this.preChangedFoxId = void(0);
      }

      intersector = this.getMapIntersector(intersects);

      if (intersector) {
        if (intersector.object.name === 'map') {
          let nowPoint = new CanvasUnit(intersector.point.x, intersector.point.z, this.ILC);
          let nowArray = nowPoint.toArray();
          this.arrayCoordinate = 'x:' + nowArray.x + ', y:' + nowArray.y;
        }
      }
    }

    this.renderer.render(this.scene, this.camera);
  }

  changeMap(event, mapId): void {
    event.preventDefault();
    event.stopPropagation();
    document.location.href = '/map/' + mapId;
  }

  getRobotsStatus(): void {
    if (this.robotTrafficTimer) {
      clearTimeout(this.robotTrafficTimer);
    }
    this.apiService.getRobotsInMap(this.mapId).subscribe(robots => {
      this.afterRobotsStatusLoad(robots);
    });
  }

  afterRobotsStatusLoad(data: any): void {   
    for (let k in this.robotMeshes) {
			this.scene.remove(this.robotMeshes[k].root);
		}
    this.robotMeshes = {};

    this.robots = data;
    let voxelLength = this.robots.length;
    let zatoichi, robot, tmpPosArray, tmpPosCanvas;
    for (let i = 0; i < voxelLength; i++) {
      robot = this.robots[i];
      zatoichi = new Zatoichi(robot);
      tmpPosArray = new ArrayUnit(robot.position.x, robot.position.y, this.ILC);
      tmpPosCanvas = tmpPosArray.toCanvas();
      zatoichi.setPosition(tmpPosCanvas.x, 20, tmpPosCanvas.y);
      zatoichi.setDirection(robot.direction);
      zatoichi.setName(robot._id, robot.name);
      zatoichi.update();
      this.robotMeshes[robot._id] = zatoichi;
      this.scene.add(zatoichi.root);
    }

    if (this.renderingAllowed) {
      this.robotTrafficTimer = setTimeout(function(that) {
        let t = that;
        return function() {
          t.getRobotsStatus();
        }
      }(this), 5000);
    }
  }

  getRobotById(rId: string): any {
    for (let r of this.robots) {
      if (r._id === rId) {
        return r;
      }
    }
  }

  sendIdleHostRobot(targetPositionX: number, targetPositionY: number): void {
    this.apiService.getIdleHostRobot(this.mapId).subscribe(res => {
      if (typeof res.error !== 'undefined') {
        alert('All robots are busy now. Please try later.');
      } else {
        let robot = this.getRobotById(res._id);
        let x1 = robot.position.x,
            y1 = robot.position.y,
            x2 = targetPositionX,
            y2 = targetPositionY,
            startPoint = this.graphSearch.graph.grid[x1][y1],
            endPoint = this.graphSearch.graph.grid[x2][y2];

        if (endPoint.weight === 0) {
          let safePoint = this.graphSearch.getNearestPoint(x2, y2);
          endPoint = this.graphSearch.graph.grid[safePoint.x][safePoint.y];
        }

        let path = this.graphSearch.astar.search(this.graphSearch.graph, startPoint, endPoint, {closest: false});
        this.createRoute(path, {color: 0x0072c6});
        this.startPoint = null;
        this.endPoint = null;
        this.routeCalculating = false;
        let reqBody = {
          route: JSON.stringify(this.lighteningRoute(path))
        };
        this.apiService.setRoute(robot._id, reqBody).subscribe(res => {
          if (typeof res.error !== 'undefined') {
            alert(res.error);
          } else {
            this.selectedRobotName = robot.name;
            this.robotStart = true;
            setTimeout(function(that) {
              let t = that;
              return function() {
                t.robotStart = false;
              }
            }(this), 5000);
          }
        });
      }
    });
  }

  sendSpecificRobot(robotId: string, targetPositionX: number, targetPositionY: number): void {
    this.apiService.getSelectedRobot(robotId).subscribe(res => {
      if (typeof res.error !== 'undefined') {
        alert('That robot is busy now. Please try later.');
      } else {
        let robot = this.getRobotById(res._id);
        let x1 = robot.position.x,
            y1 = robot.position.y,
            x2 = targetPositionX,
            y2 = targetPositionY,
            startPoint = this.graphSearch.graph.grid[x1][y1],
            endPoint = this.graphSearch.graph.grid[x2][y2];

        if (endPoint.weight === 0) {
          let safePoint = this.graphSearch.getNearestPoint(x2, y2);
          endPoint = this.graphSearch.graph.grid[safePoint.x][safePoint.y];
        }

        let path = this.graphSearch.astar.search(this.graphSearch.graph, startPoint, endPoint, {closest: false});
        this.createRoute(path, {color: 0x0072c6});
        this.startPoint = null;
        this.endPoint = null;
        this.routeCalculating = false;
        let reqBody = {
          route: JSON.stringify(this.lighteningRoute(path))
        };
        this.apiService.setRoute(robot._id, reqBody).subscribe(res => {
          if (typeof res.error !== 'undefined') {
            alert(res.error);
          } else {
            this.selectedRobotName = robot.name;
            this.robotStart = true;
            setTimeout(function(that) {
              let t = that;
              return function() {
                t.robotStart = false;
              }
            }(this), 5000);
          }
        });
      }
    });
  }

  sendAnyRobot(event): void {
    event.preventDefault();
    this.infoShow = false;
    if (this.selectedFoxId) {
      let target = this.foxes[this.selectedFoxId];
      let targetPoint = new CanvasUnit(target.ding.position.x, target.ding.position.z, this.ILC),
          targetArray = targetPoint.toArray();
      this.sendIdleHostRobot(targetArray.x, targetArray.y);
      //this.apiService.sendAnyRobot(this.mapId, targetArray.x, targetArray.y).subscribe(res => {});
    }
  }

  sendRobot(event, rId: string): void {
    event.preventDefault();
    this.infoShow = false;
    if (this.selectedFoxId) {
      let target = this.foxes[this.selectedFoxId];
      let targetPoint = new CanvasUnit(target.ding.position.x, target.ding.position.z, this.ILC),
          targetArray = targetPoint.toArray();
          //console.log(targetArray);
      this.sendSpecificRobot(rId, targetArray.x, targetArray.y);
      //this.apiService.sendRobot(rId, targetArray.x, targetArray.y).subscribe(res => {});
    }
  }

  initMapGraph(): void {
    if (this.graphSearch) {

    } else {
      this.graphSearch = new GraphSearch();
      this.initGraph();
    }
  }

  initGraph(): void {
    if (this.map.fileName.length > 0) {
      let url = 'https://s3.eu-central-1.amazonaws.com/easyinside/maps/' + this.map.fileName;
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
            t.afterGridDataLoad(data.d);
          } else {
            console.log('Error in reading map-grid data');
          }
        }
      };
      xhr.send();
    }
  }

  afterGridDataLoad(data: any): void {
    this.graphSearch.set(data, this.desks, (this.map.width / this.map.voxelSize), (this.map.height / this.map.voxelSize), this.map.usePath, function(that) {
      var t = that;
      return function() {
        t.finishGraphSetting();
      }
    }(this));
  }

  finishGraphSetting(): void {
    this.navigationPreparing = false;
    this.getRobotsStatus();
  }

  exit(event, rt): void {
    event.preventDefault();
    this.renderingAllowed = false;
    this.router.navigate([rt]);
  }

  closeDetailPanel(event): void {
    event.preventDefault();
    if (typeof this.selectedFoxId !== 'undefined') {
      this.setBlurOnFox(this.foxes[this.selectedFoxId]);
      this.cameraAction.selectedDesk = void(0);
      this.selectedFoxId = void(0);
    }
    this.infoShow=false;
  }
}
