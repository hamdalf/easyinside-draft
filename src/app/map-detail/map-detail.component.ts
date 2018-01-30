import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { NavigationService } from '../navigation.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { SpaceService } from '../space.service';

@Component({
  selector: 'app-map-detail',
  templateUrl: './map-detail.component.html',
  styleUrls: [
    './map-detail.component.less',
    '../../assets/bootstrap/sb-admin2/dist/css/sb-admin-2.css'
  ]
})
export class MapDetailComponent implements OnInit {

  status: string;
  message: string;
  mapId: string;
  map: any = {};
  mapForm: FormGroup;
  searchable: string = 'no';
  allowrobot: string = 'no';
  usepath: string = 'no';
  security: string = 'private';
  editComplete: boolean = false;
  alert: any = {
    visible: false,
    message: ''
  };
  deleteProcess: boolean = false;
  timeZone: string = '+01:00';
  timeFormat: string = 'DD-MM-YYYY HH:mm:ss';

  constructor(private route: ActivatedRoute, private location: Location, private navigationService: NavigationService, private spaceService: SpaceService, fb: FormBuilder) {
    navigationService.navMessage$.subscribe(message => {
      this.message = message;
    });
    navigationService.navStatus$.subscribe(status => {
      this.status = status;
    });
    function minValue(c: FormControl) {
      if (parseInt(c.value) <= 0) {
        return { minValue: true };
      } else {
        return null;
      }
    }
    function makeRequiredForPassword() {
      var thisComponent = this;
      return function required(c: FormControl) {
        if (thisComponent.map.security == 'password' && c.value === '') {
          return { required: true };
        } else {
          return null;
        }
      };
    }
    function makePatternForPassword() {
      var thisComponent = this;
      return function pattern(c: FormControl) {
        let REGEXP = /^[0-9A-Za-z!@#$%^&*()]*$/i;
        if (thisComponent.map.security == 'password' && REGEXP.test(c.value) === false) {
          return { pattern: true };
        } else {
          return null;
        }
      };
    }
    function makeMinLengthForPassword() {
      var thisComponent = this;
      return function minLength(c: FormControl) {
        if (thisComponent.map.security == 'password' && c.value && c.value.length < 8) {
          return { minLength: true };
        } else {
          return null;
        }
      };
    }
    this.mapForm = fb.group({
      'name': [null, [Validators.required, Validators.pattern('[0-9A-Za-z ]*')]],
      'width': [null, [Validators.required, Validators.pattern('[0-9]*'), minValue]],
      'height': [null, [Validators.required, Validators.pattern('[0-9]*'), minValue]],
      'voxelSize': [null, [Validators.required, Validators.pattern('[0-9]*'), minValue]],
      'password': [null, [makeRequiredForPassword.call(this), makePatternForPassword.call(this), makeMinLengthForPassword.call(this)]]
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
        //this.mapForm.controls['name'].setValue(this.map.name, { onlySelf: true });
        //this.mapForm.controls['voxelSize'].setValue(this.map.voxelSize, { onlySelf: true });
        //this.mapForm.controls['password'].setValue(this.map.password, { onlySelf: true });
        this.searchable = this.map.searchable ? 'yes' : 'no';
        this.allowrobot = this.map.allowRobot ? 'yes' : 'no';
        this.usepath = this.map.usePath ? 'yes' : 'no';
        this.security = this.map.security;
        this.mapForm.updateValueAndValidity();
        this.mapForm.controls['password'].updateValueAndValidity(); // custom validator must be called like as this
      });
    this.navigationService.setNavigationStatus('maker');
  }

  changeMapStatus(event, property, value): void {
    event.preventDefault();
    this.map[property] = value;
    this.searchable = this.map.searchable ? 'yes' : 'no';
    this.allowrobot = this.map.allowRobot ? 'yes' : 'no';
    this.usepath = this.map.usePath ? 'yes' : 'no';
    this.security = this.map.security;
    this.mapForm.updateValueAndValidity();
    this.mapForm.controls['password'].updateValueAndValidity(); // custom validator must be called like as this
  }

  saveMap(value: any): void {
    var mp = {
      name: value.name,
      width: value.width,
      height: value.height,
      voxelSize: value.voxelSize,
      password: value.password,
      searchable: this.map.searchable,
      allowRobot: this.map.allowRobot,
      usePath: this.map.usePath,
      security: this.security
    };
    this.spaceService.saveMap(this.mapId, mp).subscribe(res => {
      this.map = res;
      //this.mapForm.controls['name'].setValue(this.map.name, { onlySelf: true });
      //this.mapForm.controls['voxelSize'].setValue(this.map.voxelSize, { onlySelf: true });
      //this.mapForm.controls['password'].setValue(this.map.password, { onlySelf: true });
      this.searchable = this.map.searchable ? 'yes' : 'no';
      this.security = this.map.security;
      this.editComplete = true;

      setTimeout(() => {
        this.editComplete = false;
      }, 3000);
    }, err => {
      this.alert.visible = true;
      this.alert.message = err;
    });
  }

  onCloseAlert(event): void {
    this.alert.visible = false;
  }

  askDelete(event): void {
    event.preventDefault();
    this.deleteProcess = true;
  }

  deleteMap(event): void {
    event.preventDefault();
    this.spaceService.deleteMap(this.mapId).subscribe(res => {
      history.back();
    }, err => {
      console.log(err);
      this.deleteProcess = false;
    });
  }
}
