import { Component, OnInit, ElementRef, AfterViewInit, HostListener, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { NavigationService } from '../navigation.service';
import { SpaceService } from '../space.service';
import { ApiService } from '../api.service';
import { ModalDirective } from 'ngx-bootstrap/modal';
import * as THREE from 'three';     // must 'npm install @types/three'!!!
import ThreeBSP from '../../assets/csg/ThreeCSG';

@Component({
  selector: 'app-map-optimizer',
  templateUrl: './map-optimizer.component.html',
  styleUrls: [
    './map-optimizer.component.css',
    '../../assets/bootstrap/sb-admin2/dist/css/sb-admin-2.css'
  ],
  providers: [NavigationService]
})
export class MapOptimizerComponent implements OnInit, AfterViewInit {

  status: string;
  message: string;
  mapId: string;
  map: any = {};
  dings: any = [];
  graphicCardNeeded: boolean = false;
  browserNeeded: boolean = false;
  viewInitFinished: boolean = false;
  dataInitFinished: boolean = false;
  @ViewChild('loadingModal') public loadingModal: ModalDirective;
  @ViewChild('optimizationModal') public optimizationModal: ModalDirective;
  @ViewChild('savingModal') public savingModal: ModalDirective;

  container: any;
  renderer: any;
  camera:any;
  scene: any;
  bspByTypes: any = {};

  constructor(private route: ActivatedRoute, private location: Location, private navigationService: NavigationService, private spaceService: SpaceService, private apiService: ApiService, private elementRef: ElementRef) {
    navigationService.navMessage$.subscribe(message => {
      this.message = message;
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
        this.getDings();
      });

    this.navigationService.setNavigationStatus('mapoptimizer');
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
            t.loadingModal.hide();
            t.mapOptimizing(data);
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

  checkVoxDiffer(vox1: any, vox2: any): any {
    var dX = vox2.x - vox1.x,
        dY = vox2.y - vox1.y,
        dZ = vox2.z - vox1.z,
        score = Math.abs(dX) + Math.abs(dY) + Math.abs(dZ);

    return {
      'dX': dX,
      'dY': dY,
      'dZ': dZ,
      'score': score
    };
  }

  mapOptimizing(data: any): void {
    this.optimizationModal.show();

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

    let voxels = data.d;
    let voxelLength = voxels.length;
    let voxel;
    let structuredVoxels: any = {};
    let structuredPaths: any = {};
    let paths: any;

    for (let i = 0; i < voxelLength; i++) {
      voxel = voxels[i];

      // path objects will be managed separately
      if (voxel.p === 2) {
        if (typeof structuredPaths[voxel.t] === 'undefined') {
          structuredPaths[voxel.t] = {};
        }
        if (typeof structuredPaths[voxel.t][voxel.y] === 'undefined') {
          structuredPaths[voxel.t][voxel.y] = {};
        }
        if (typeof structuredPaths[voxel.t][voxel.y][voxel.x] === 'undefined') {
          structuredPaths[voxel.t][voxel.y][voxel.x] = [];
        }
        structuredPaths[voxel.t][voxel.y][voxel.x].push(voxel);
        continue;
      }
      // map objects except path
      if (typeof structuredVoxels[voxel.t] === 'undefined') {
        structuredVoxels[voxel.t] = {};
      }
      if (typeof structuredVoxels[voxel.t][voxel.y] === 'undefined') {
        structuredVoxels[voxel.t][voxel.y] = {};
      }
      if (typeof structuredVoxels[voxel.t][voxel.y][voxel.x] === 'undefined') {
        structuredVoxels[voxel.t][voxel.y][voxel.x] = [];
      }
      structuredVoxels[voxel.t][voxel.y][voxel.x].push(voxel);
    }

    voxels = [];
    for (let t in structuredVoxels) {
      for (let y in structuredVoxels[t]) {
        for (let x in structuredVoxels[t][y]) {
          structuredVoxels[t][y][x].sort(function (a, b) {
            if (a.z < b.z) {
                return -1;
            } else if (a.z > b.z) {
                return 1;
            } else {
                return 0;
            }
          });
          voxels = voxels.concat(structuredVoxels[t][y][x]);
        }
      }
    }

    paths = [];
    for (let t in structuredPaths) {
      for (let y in structuredPaths[t]) {
        for (let x in structuredPaths[t][y]) {
          structuredPaths[t][y][x].sort(function (a, b) {
            if (a.z < b.z) {
                return -1;
            } else if (a.z > b.z) {
                return 1;
            } else {
                return 0;
            }
          });
          paths = paths.concat(structuredPaths[t][y][x]);
        }
      }
    }

    let rawStructureBox = function() {
      return {
        size: {
          x: 10,
          y: 10,
          z: 10
        },
        position: {
          x: 0,
          y: 0,
          z: 0
        }
      };
    };

    let box, dObj, mesh;
    let scaleFactor: number = 10;
    // merging objs except path
    voxelLength = voxels.length;
    for (let i = 0; i < voxelLength; i++) {
      voxel = voxels[i];

      if (i === 0) {
        box = rawStructureBox();
        box.position.x = voxel.x * scaleFactor + (scaleFactor / 2);
        box.position.y = voxel.y * scaleFactor + (scaleFactor / 2);
        box.position.z = voxel.z * scaleFactor + (scaleFactor / 2);
        box.__t = voxel.t;
        continue;
      }

      dObj = this.checkVoxDiffer(voxels[i - 1], voxel);

      if (box.__t === voxel.t && dObj.score === 1 && Math.abs(dObj.dZ) === 1) {
        if (dObj.dZ !== 0) {
          box.size.z += Math.abs(dObj.dZ) * scaleFactor;
          box.position.z += (dObj.dZ * scaleFactor) / 2;
        }
      } else {
        if (this.getSelectedDing(box.__t).type === 'wall') {
          box.size.y = 200;
          box.position.y = 110;
        }

        mesh = new THREE.Mesh(new THREE.BoxGeometry(box.size.x, box.size.y, box.size.z));
        mesh.position.x = box.position.x;
        mesh.position.y = box.position.y;
        mesh.position.z = box.position.z;
        mesh.__t = box.__t;
        this.mergeMesh(mesh, mesh.__t);

        box = rawStructureBox();
        box.position.x = voxel.x * scaleFactor + (scaleFactor / 2);
        box.position.y = voxel.y * scaleFactor + (scaleFactor / 2);
        box.position.z = voxel.z * scaleFactor + (scaleFactor / 2);
        box.__t = voxel.t;
      }

      if (i === voxelLength - 1) {
        if (this.getSelectedDing(box.__t).type === 'wall') {
          box.size.y = 200;
          box.position.y = 110;
        }

        mesh = new THREE.Mesh(new THREE.BoxGeometry(box.size.x, box.size.y, box.size.z));
        mesh.position.x = box.position.x;
        mesh.position.y = box.position.y;
        mesh.position.z = box.position.z;
        mesh.__t = box.__t;
        this.mergeMesh(mesh, mesh.__t);
      }
    }

    /*for (let t in this.bspByTypes) {
      let tempMesh = this.getBsp(t).toMesh(this.getSelectedDing(t)._material);
      tempMesh.name = 'map';
      this.scene.add(tempMesh);
    }*/

    // merging path
    voxelLength = paths.length;
    for (let i = 0; i < voxelLength; i++) {
      voxel = paths[i];

      if (i === 0) {
        box = rawStructureBox();
        box.position.x = voxel.x * scaleFactor + (scaleFactor / 2);
        box.position.y = voxel.y * scaleFactor + (scaleFactor / 2);
        box.position.z = voxel.z * scaleFactor + (scaleFactor / 2);
        box.__t = voxel.t;
        continue;
      }

      dObj = this.checkVoxDiffer(paths[i - 1], voxel);

      if (box.__t === voxel.t && dObj.score === 1 && Math.abs(dObj.dZ) === 1) {
        if (dObj.dZ !== 0) {
          box.size.z += Math.abs(dObj.dZ) * scaleFactor;
          box.position.z += (dObj.dZ * scaleFactor) / 2;
        }
      } else {
        if (this.getSelectedDing(box.__t).type === 'wall') {
          box.size.y = 200;
          box.position.y = 110;
        }

        mesh = new THREE.Mesh(new THREE.BoxGeometry(box.size.x, box.size.y, box.size.z));
        mesh.position.x = box.position.x;
        mesh.position.y = box.position.y;
        mesh.position.z = box.position.z;
        mesh.__t = box.__t;
        this.mergeMesh(mesh, mesh.__t);

        box = rawStructureBox();
        box.position.x = voxel.x * scaleFactor + (scaleFactor / 2);
        box.position.y = voxel.y * scaleFactor + (scaleFactor / 2);
        box.position.z = voxel.z * scaleFactor + (scaleFactor / 2);
        box.__t = voxel.t;
      }

      if (i === voxelLength - 1) {
        mesh = new THREE.Mesh(new THREE.BoxGeometry(box.size.x, box.size.y, box.size.z));
        mesh.position.x = box.position.x;
        mesh.position.y = box.position.y;
        mesh.position.z = box.position.z;
        mesh.__t = box.__t;
        this.mergeMesh(mesh, mesh.__t);
      }
    }

    for (let t in this.bspByTypes) {
      let tempMesh = this.getBsp(t).toMesh(this.getSelectedDing(t)._material);
      let tmpType = this.getSelectedDing(t).type;
      tempMesh.name = (tmpType === 'path') ? 'path' : 'map';
      this.scene.add(tempMesh);
    }

    this.optimizationModal.hide();
    this.saveOptMap();
  }

  saveOptMap(): void {
    this.savingModal.show();
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
			if (child.name !== 'map' && child.name !== 'path') {
        continue;
      }
			
			voxels.push({
				x: child.position.x,
				y: child.position.y,
				z: child.position.z,
				t: child.material._idx,
        g: child.geometry.toJSON()
			});
		}

    let fileStr = {
      m: ds,
      d: voxels
    }
		let dataUri = JSON.stringify(fileStr);
		this.spaceService.saveOptFile(this.mapId, {file:dataUri}).subscribe(res => {
      if (res.result) {
        this.savingModal.hide();
        document.location.href = '/maker/desk-edit/' + this.mapId;
      }
    });
  }

  setBsp(t: any, bsp: any): void {
      if (typeof this.bspByTypes[t] === 'undefined') {
          this.bspByTypes[t] = null;
      }
      
      if (bsp) {
          this.bspByTypes[t] = bsp;
      }
  }
    
  getBsp(t: any): any {
      this.setBsp(t, null);
      return this.bspByTypes[t];
  }
    
  mergeMesh(mesh: any, t: any): void {
      let bsp = new ThreeBSP(mesh);
      let targetBsp = this.getBsp(t);
      let mergedBsp;
      
      if (targetBsp === null) {
          this.setBsp(t, bsp);
      } else {
          mergedBsp = targetBsp.union(bsp);
          this.setBsp(t, mergedBsp);
      }
  }

  animate(): void {
    requestAnimationFrame(function() {
      let t = this;
      return function() {
        t.animate();
      }
    }.call(this));
    this.render();
  }

  render(): void {
    this.renderer.render(this.scene, this.camera);
  }
}
