import { Component, OnInit, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { TexturesService } from '../textures.service';
import { NavigationService } from '../navigation.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { ModalDirective } from 'ngx-bootstrap/modal';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-textures',
  templateUrl: './textures.component.html',
  styleUrls: [
    './textures.component.css',
    '../../assets/bootstrap/sb-admin2/dist/css/sb-admin-2.css'
  ],
  providers: [NavigationService]
})
export class TexturesComponent implements OnInit, AfterViewInit {

  status: string;
  message: string;
  textures: any = [];
  limit: string = '10';
  page: number = 1;
  total: number;
  timeZone: string = '+01:00';
  timeFormat: string = 'DD-MM-YYYY HH:mm:ss';
  pageFrom: number;
  pageTo: number;
  keyword: string;
  newTextureForm: FormGroup;
  alert: any = {
    visible: false,
    message: ''
  };
  @ViewChild('textureCreationModal') public textureCreationModal: ModalDirective;
  textureId: string;
  texture: any = {};
  published: string = 'no';
  editComplete: boolean = false;
  deleteProcess: boolean = false;
  editTextureForm: FormGroup;
  @ViewChild('textureEditModal') public textureEditModal: ModalDirective;

  constructor(private elementRef: ElementRef, private texturesService: TexturesService, private navigationService: NavigationService, fb: FormBuilder) {
    navigationService.navMessage$.subscribe(message => {
      this.message = message;
      console.log(`[EasyInside - account] navigation message: ${this.message}`);
    });
    navigationService.navStatus$.subscribe(status => {
      this.status = status;
      console.log(`[EasyInside - account] navigation status: ${this.status}`);
    });
    this.newTextureForm = fb.group({
      'name': [null, [Validators.required, Validators.pattern('[0-9A-Za-z ]*')]],
      'shading': ["THREE.FlatShading", [Validators.required]],
      'color': "0.5,0.5,0.5",
      'map': "",
      'opacity': [1, [Validators.required, Validators.pattern(/^\d+(\.\d{1})?$/), CustomValidators.min(0), CustomValidators.max(1)]]
    });
    this.editTextureForm = fb.group({
      'name': [null, [Validators.required, Validators.pattern('[0-9A-Za-z ]*')]],
      'shading': ["THREE.FlatShading", [Validators.required]],
      'color': "0.5,0.5,0.5",
      'map': "",
      'opacity': [1, [Validators.required, Validators.pattern(/^\d+(\.\d{1})?$/), CustomValidators.min(0), CustomValidators.max(1)]]
    });
  }

  ngOnInit() {
    this.navigationService.setNavigationStatus('maker');
    this.getTextures();
  }

  ngAfterViewInit() {

  }

  setPage(p: number): void {
    this.page = p;
  }

  pageChanged(event: any): void {
    this.page = event.page;
    this.getTextures();
  }

  onClickLimit(event: any): void {
    this.getTextures();
  }

  onChangeKeyword(event: any): void {
    if (event.keyCode == 13) {
      if (event.srcElement.value != '') {
        this.keyword = event.srcElement.value;
      } else {
        this.keyword = '';
      }
      this.page = 1;
      this.getTextures();
    }
  }

  getTextures(): void {
    if (!this.keyword) {
      this.texturesService.getTextures(parseInt(this.limit), this.page - 1).subscribe(res => {
        this.textures = res.textures;
        this.total = res.total;
        this.page = res.page + 1;
        this.pageFrom = (this.page - 1) * parseInt(this.limit) + 1;
        let pt = this.pageFrom + parseInt(this.limit) - 1;
        this.pageTo = (pt > this.total) ? this.total : pt;
      });
    } else {
      this.texturesService.getTexturesByKeyword(parseInt(this.limit), this.page - 1, this.keyword).subscribe(res => {
        this.textures = res.textures;
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
    this.textureCreationModal.show();
  }

  createTexture(value: any) {
    this.texturesService.createTexture(value).subscribe(res => {
      this.getTextures();
    }, err => {
      this.alert.visible = true;
      this.alert.message = err;
    });
    this.textureCreationModal.hide();
    this.newTextureForm.reset();
  }

  openEditModal(event: any, tId: any): void {
    event.preventDefault();
    this.texturesService.getTextureById(tId).subscribe(res => {
      this.texture = res;
      this.textureId = res._id;
      this.editTextureForm.controls['name'].setValue(this.texture.name, { onlySelf: true });
      this.editTextureForm.controls['shading'].setValue(this.texture.shading, { onlySelf: true });
      this.editTextureForm.controls['color'].setValue(this.texture.color, { onlySelf: true });
      this.editTextureForm.controls['map'].setValue(this.texture.map, { onlySelf: true });
      this.editTextureForm.controls['opacity'].setValue(this.texture.opacity, { onlySelf: true });
      this.published = this.texture.published ? 'yes' : 'no';
      this.textureEditModal.show();
    }, err => {
      this.alert.visible = true;
      this.alert.message = err;
    })
  }

  changeTextureStatus(event, property, value): void {
    event.preventDefault();
    this.texture[property] = value;
    this.published = this.texture.published ? 'yes' : 'no';
    this.editTextureForm.updateValueAndValidity();
  }

  editTexture(value: any): void {
    var tt = {
      name: value.name,
      shading: value.shading,
      color: value.color,
      map: value.map,
      opacity: value.opacity,
      published: this.texture.published
    };
    this.texturesService.saveTexture(this.textureId, tt).subscribe(res => {
      this.getTextures();
      this.editComplete = true;
      this.textureEditModal.hide();

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
    this.textureEditModal.hide();
    this.deleteProcess = true;
  }

  deleteTexture(event): void {
    event.preventDefault();
    this.texturesService.deleteTexture(this.textureId).subscribe(res => {
      this.deleteProcess = false;
      this.getTextures();
      this.textureEditModal.hide();
    }, err => {
      this.deleteProcess = false;
      this.alert.visible = true;
      this.alert.message = err;
    });
  }
}
