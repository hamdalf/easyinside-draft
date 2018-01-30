import { Component, OnInit, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { GeometriesService } from '../geometries.service';
import { NavigationService } from '../navigation.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { ModalDirective } from 'ngx-bootstrap/modal';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-geometries',
  templateUrl: './geometries.component.html',
  styleUrls: [
    './geometries.component.css',
    '../../assets/bootstrap/sb-admin2/dist/css/sb-admin-2.css'
  ],
  providers: [NavigationService]
})
export class GeometriesComponent implements OnInit, AfterViewInit {

  status: string;
  message: string;
  geometries: any = [];
  limit: string = '10';
  page: number = 1;
  total: number;
  timeZone: string = '+01:00';
  timeFormat: string = 'DD-MM-YYYY HH:mm:ss';
  pageFrom: number;
  pageTo: number;
  keyword: string;
  newGeometryForm: FormGroup;
  alert: any = {
    visible: false,
    message: ''
  };
  @ViewChild('geometryCreationModal') public geometryCreationModal: ModalDirective;
  geometryId: string;
  geometry: any = {};
  published: string = 'no';
  editComplete: boolean = false;
  deleteProcess: boolean = false;
  editGeometryForm: FormGroup;
  @ViewChild('geometryEditModal') public geometryEditModal: ModalDirective;

  constructor(private elementRef: ElementRef, private geometriesService: GeometriesService, private navigationService: NavigationService, fb: FormBuilder) {
    navigationService.navMessage$.subscribe(message => {
      this.message = message;
    });
    navigationService.navStatus$.subscribe(status => {
      this.status = status;
    });
    this.newGeometryForm = fb.group({
      'name': [null, [Validators.required, Validators.pattern('[0-9A-Za-z ]*')]],
      'data': ["THREE.BoxGeometry(10, 10, 10)", [Validators.required]]
    });
    this.editGeometryForm = fb.group({
      'name': [null, [Validators.required, Validators.pattern('[0-9A-Za-z ]*')]],
      'data': ["THREE.BoxGeometry(10, 10, 10)", [Validators.required]]
    });
  }

  ngOnInit() {
    this.navigationService.setNavigationStatus('maker');
    this.getGeometries();
  }

  ngAfterViewInit() {

  }

  setPage(p: number): void {
    this.page = p;
  }

  pageChanged(event: any): void {
    this.page = event.page;
    this.getGeometries();
  }

  onClickLimit(event: any): void {
    this.getGeometries();
  }

  onChangeKeyword(event: any): void {
    if (event.keyCode == 13) {
      if (event.srcElement.value != '') {
        this.keyword = event.srcElement.value;
      } else {
        this.keyword = '';
      }
      this.page = 1;
      this.getGeometries();
    }
  }

  getGeometries(): void {
    if (!this.keyword) {
      this.geometriesService.getGeometries(parseInt(this.limit), this.page - 1).subscribe(res => {
        this.geometries = res.geometries;
        this.total = res.total;
        this.page = res.page + 1;
        this.pageFrom = (this.page - 1) * parseInt(this.limit) + 1;
        let pt = this.pageFrom + parseInt(this.limit) - 1;
        this.pageTo = (pt > this.total) ? this.total : pt;
      });
    } else {
      this.geometriesService.getGeometriesByKeyword(parseInt(this.limit), this.page - 1, this.keyword).subscribe(res => {
        this.geometries = res.geometries;
        this.keyword = res.keyword;
        this.total = res.total;
        this.page = res.page + 1;
        this.pageFrom = (this.page - 1) * parseInt(this.limit) + 1;
        let pt = this.pageFrom + parseInt(this.limit) - 1;
        this.pageTo = (pt > this.total) ? this.total : pt;
      });
    }
  }

  openCreateModal(event): void {
    event.preventDefault();
    this.geometryCreationModal.show();
  }

  createGeometry(value: any) {
    this.geometriesService.createGeometry(value).subscribe(res => {
      this.getGeometries();
    }, err => {
      this.alert.visible = true;
      this.alert.message = err;
    });
    this.geometryCreationModal.hide();
    this.newGeometryForm.reset();
  }

  openEditModal(event: any, gId: any): void {
    event.preventDefault();
    this.geometriesService.getGeometryById(gId).subscribe(res => {
      this.geometry = res;
      this.geometryId = res._id;
      this.editGeometryForm.controls['name'].setValue(this.geometry.name, { onlySelf: true });
      this.editGeometryForm.controls['data'].setValue(this.geometry.data, { onlySelf: true });
      this.published = this.geometry.published ? 'yes' : 'no';
      this.geometryEditModal.show();
    }, err => {
      this.alert.visible = true;
      this.alert.message = err;
    })
  }

  changeGeometryStatus(event, property, value): void {
    event.preventDefault();
    this.geometry[property] = value;
    this.published = this.geometry.published ? 'yes' : 'no';
    this.editGeometryForm.updateValueAndValidity();
  }

  editGeometry(value: any): void {
    var gm = {
      name: value.name,
      data: value.data,
      published: this.geometry.published
    };
    this.geometriesService.saveGeometry(this.geometryId, gm).subscribe(res => {
      this.getGeometries();
      this.editComplete = true;
      this.geometryEditModal.hide();

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
    this.geometryEditModal.hide();
    this.deleteProcess = true;
  }

  deleteGeometry(event): void {
    event.preventDefault();
    this.geometriesService.deleteGeometry(this.geometryId).subscribe(res => {
      this.deleteProcess = false;
      this.getGeometries();
      this.geometryEditModal.hide();
    }, err => {
      this.deleteProcess = false;
      this.alert.visible = true;
      this.alert.message = err;
    });
  }
}
