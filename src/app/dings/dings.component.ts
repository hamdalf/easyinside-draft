import { Component, OnInit, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { DingsService } from '../dings.service';
import { TexturesService } from '../textures.service';
import { GeometriesService } from '../geometries.service';
import { NavigationService } from '../navigation.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { ModalDirective } from 'ngx-bootstrap/modal';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-dings',
  templateUrl: './dings.component.html',
  styleUrls: [
    './dings.component.css',
    '../../assets/bootstrap/sb-admin2/dist/css/sb-admin-2.css'
  ],
  providers: [NavigationService]
})
export class DingsComponent implements OnInit, AfterViewInit {

  status: string;
  message: string;
  textures: any = [];
  geometries: any = [];
  dings: any = [];
  limit: string = '10';
  page: number = 1;
  total: number;
  timeZone: string = '+01:00';
  timeFormat: string = 'DD-MM-YYYY HH:mm:ss';
  pageFrom: number;
  pageTo: number;
  keyword: string;
  newDingForm: FormGroup;
  alert: any = {
    visible: false,
    message: ''
  };
  @ViewChild('dingCreationModal') public dingCreationModal: ModalDirective;
  dingId: string;
  ding: any = {};
  published: string = 'no';
  geometry: any;
  texture: any;
  editComplete: boolean = false;
  deleteProcess: boolean = false;
  editDingForm: FormGroup;
  @ViewChild('dingEditModal') public dingEditModal: ModalDirective;

  constructor(private elementRef: ElementRef, private dingsService: DingsService, private texturesService: TexturesService, private geometriesService: GeometriesService, private navigationService: NavigationService, fb: FormBuilder) {
    navigationService.navMessage$.subscribe(message => {
      this.message = message;
    });
    navigationService.navStatus$.subscribe(status => {
      this.status = status;
    });
    this.newDingForm = fb.group({
      'name': [null, [Validators.required, Validators.pattern('[0-9A-Za-z ]*')]]
    });
    this.editDingForm = fb.group({
      'name': [null, [Validators.required, Validators.pattern('[0-9A-Za-z ]*')]]
    });
  }

  ngOnInit() {
    this.navigationService.setNavigationStatus('maker');
    this.getAvailableTextures();
    this.getAvailableGeometries();
    this.getDings();
  }

  ngAfterViewInit() {
  }

  setPage(p: number): void {
    this.page = p;
  }

  pageChanged(event: any): void {
    this.page = event.page;
    this.getDings();
  }

  onClickLimit(event: any): void {
    this.getDings();
  }

  onChangeKeyword(event: any): void {
    if (event.keyCode == 13) {
      if (event.srcElement.value != '') {
        this.keyword = event.srcElement.value;
      } else {
        this.keyword = '';
      }
      this.page = 1;
      this.getDings();
    }
  }

  getDings(): void {
    if (!this.keyword) {
      this.dingsService.getDings(parseInt(this.limit), this.page - 1).subscribe(res => {
        this.dings = res.dings;
        this.total = res.total;
        this.page = res.page + 1;
        this.pageFrom = (this.page - 1) * parseInt(this.limit) + 1;
        let pt = this.pageFrom + parseInt(this.limit) - 1;
        this.pageTo = (pt > this.total) ? this.total : pt;
      });
    } else {
      this.dingsService.getDingsByKeyword(parseInt(this.limit), this.page - 1, this.keyword).subscribe(res => {
        this.dings = res.dings;
        this.keyword = res.keyword;
        this.total = res.total;
        this.page = res.page + 1;
        this.pageFrom = (this.page - 1) * parseInt(this.limit) + 1;
        let pt = this.pageFrom + parseInt(this.limit) - 1;
        this.pageTo = (pt > this.total) ? this.total : pt;
      });
    }
  }

  getAvailableTextures(): void {
    if (this.textures.length == 0) {
      this.texturesService.getAvailableTextures().subscribe(res => {
        this.textures = res.textures;
      });
    }
  }

  getAvailableGeometries(): void {
    if (this.geometries.length == 0) {
      this.geometriesService.getAvailableGeometries().subscribe(res => {
        this.geometries = res.geometries;
      });
    }
  }

  openCreateModal(event): void {
    event.preventDefault();
    //this.getAvailableTextures();
    //this.getAvailableGeometries();
    this.ding = {};
    this.published = 'no';
    this.ding.type = 'floor';
    this.ding.published = false;
    this.ding.material = 'THREE.MeshBasicMaterial';
    this.geometry = this.geometries[0];
    this.texture = this.textures[0];
    this.dingCreationModal.show();
  }

  createDing(value: any) {
    var dg = {
      name: value.name,
      type: this.ding.type,
      geometry: this.geometry._id,
      texture: this.texture._id,
      material: this.ding.material,
      published: this.ding.published
    }
    this.dingsService.createDing(dg).subscribe(res => {
      this.getDings();
    }, err => {
      this.alert.visible = true;
      this.alert.message = err;
    });
    this.dingCreationModal.hide();
    this.newDingForm.reset();
  }

  openEditModal(event: any, dId: any): void {
    event.preventDefault();
    this.dingsService.getDingById(dId).subscribe(res => {
      this.ding = res;
      this.dingId = res._id;
      this.editDingForm.controls['name'].setValue(this.ding.name, { onlySelf: true });
      this.published = this.ding.published ? 'yes' : 'no';
      this.geometry = this.ding.geometry;
      this.texture = this.ding.texture;
      //this.getAvailableTextures();
      //this.getAvailableGeometries();
      this.dingEditModal.show();
    }, err => {
      this.alert.visible = true;
      this.alert.message = err;
    })
  }

  changeDingStatus(event, property, value): void {
    event.preventDefault();
    switch (property) {
      case 'texture':
        for (let t of this.textures) {  // of textures -> value, in textures -> index
          console.log(t._id);
          if (t._id.toString() == value) {
            this.texture = t;
            this.ding.texture = t;
          }
        }
        break;
      case 'geometry':
        for (let g of this.geometries) {  // of textures -> value, in textures -> index
          if (g._id.toString() == value) {
            this.geometry = g;
            this.ding.geometry = g;
          }
        }
        break;
      default:
        this.ding[property] = value;
        break;
    }
    this.published = this.ding.published ? 'yes' : 'no';
    this.editDingForm.updateValueAndValidity();
  }

  editDing(value: any): void {
    var dg = {
      name: value.name,
      type: this.ding.type,
      geometry: this.geometry._id,
      texture: this.texture._id,
      material: this.ding.material,
      published: this.ding.published
    };
    this.dingsService.saveDing(this.dingId, dg).subscribe(res => {
      this.getDings();
      this.editComplete = true;
      this.dingEditModal.hide();

      setTimeout(() => {
        this.editComplete = false;
      }, 3000);
    }, err => {
      this.alert.visible = true;
      this.alert.message = err;
    });
  }

  askDelete(event): void {
    event.preventDefault();
    this.dingEditModal.hide();
    this.deleteProcess = true;
  }

  deleteDing(event): void {
    event.preventDefault();
    this.dingsService.deleteDing(this.dingId).subscribe(res => {
      this.deleteProcess = false;
      this.getDings();
      this.dingEditModal.hide();
    }, err => {
      this.deleteProcess = false;
      this.alert.visible = true;
      this.alert.message = err;
    });
  }
}
