import { Component, OnInit, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { RobotService } from '../robot.service';
import { SpaceService } from '../space.service';
import { NavigationService } from '../navigation.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { ModalDirective } from 'ngx-bootstrap/modal';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-robots',
  templateUrl: './robots.component.html',
  styleUrls: [
    './robots.component.css',
    '../../assets/bootstrap/sb-admin2/dist/css/sb-admin-2.css'
  ],
  providers: [NavigationService]
})
export class RobotsComponent implements OnInit, AfterViewInit {

  status: string;
  message: string;
  maps: any = [];
  robots: any = [];
  limit: string = '10';
  page: number = 1;
  total: number;
  pageFrom: number;
  pageTo: number;
  keyword: string;
  newRobotForm: FormGroup;
  alert: any = {
    visible: false,
    message: ''
  };
  @ViewChild('robotCreationModal') public robotCreationModal: ModalDirective;
  robotId: string;
  robot: any = {};
  isbusy: string = 'no';
  ishost: string = 'no';
  editComplete: boolean = false;
  deleteProcess: boolean = false;
  editRobotForm: FormGroup;
  @ViewChild('robotEditModal') public robotEditModal: ModalDirective;

  constructor(private elementRef: ElementRef, private robotService: RobotService, private spaceService: SpaceService, private navigationService: NavigationService, fb: FormBuilder) {
    navigationService.navMessage$.subscribe(message => {
      this.message = message;
    });
    navigationService.navStatus$.subscribe(status => {
      this.status = status;
    });
    this.newRobotForm = fb.group({
      'name': [null, [Validators.required, Validators.pattern('[0-9A-Za-z ]*')]],
      'positionx': [null, [Validators.required, Validators.pattern('[0-9\-]*')]],
      'positiony': [null, [Validators.required, Validators.pattern('[0-9\-]*')]]
    });
    this.editRobotForm = fb.group({
      'name': [null, [Validators.required, Validators.pattern('[0-9A-Za-z ]*')]],
      'positionx': [null, [Validators.required, Validators.pattern('[0-9\-]*')]],
      'positiony': [null, [Validators.required, Validators.pattern('[0-9\-]*')]]
    });
  }

  ngOnInit() {
    this.navigationService.setNavigationStatus('maker');
    this.getMaps();
    this.getRobots();
  }

  ngAfterViewInit() {

  }
  setPage(p: number): void {
    this.page = p;
  }

  pageChanged(event: any): void {
    this.page = event.page;
    this.getRobots();
  }

  onClickLimit(event: any): void {
    this.getRobots();
  }

  onChangeKeyword(event: any): void {
    if (event.keyCode == 13) {
      if (event.srcElement.value != '') {
        this.keyword = event.srcElement.value;
      } else {
        this.keyword = '';
      }
      this.page = 1;
      this.getRobots();
    }
  }

  getMaps(): void {
    if (this.maps.length == 0) {
      this.spaceService.getAllMaps().subscribe(res => {
        this.maps = res;
      });
    }
  }

  getRobots(): void {
    if (!this.keyword) {
      this.robotService.getRobots(parseInt(this.limit), this.page - 1).subscribe(res => {
        this.robots = res.robots;
        this.total = res.total;
        this.page = res.page + 1;
        this.pageFrom = (this.page - 1) * parseInt(this.limit) + 1;
        let pt = this.pageFrom + parseInt(this.limit) - 1;
        this.pageTo = (pt > this.total) ? this.total : pt;
      });
    } else {
      this.robotService.getRobotsByKeyword(parseInt(this.limit), this.page - 1, this.keyword).subscribe(res => {
        this.robots = res.robots;
        this.keyword = res.keyword;
        this.total = res.total;
        this.page = res.page + 1;
        this.pageFrom = (this.page - 1) * parseInt(this.limit) + 1;
        let pt = this.pageFrom + parseInt(this.limit) - 1;
        this.pageTo = (pt > this.total) ? this.total : pt;
      });
    }
  }

  changeRobotStatus(event, property, value): void {
    event.preventDefault();
    switch (property) {
      case 'map':
        for (let m of this.maps) {  // of maps -> value, in maps -> index
          if (m._id.toString() == value) {
            this.robot._map = m;
          }
        }
        break;
      default:
        this.robot[property] = value;
        break;
    }
    this.isbusy = this.robot.isBusy ? 'yes' : 'no';
    this.ishost = this.robot.isHost ? 'yes' : 'no';
    this.newRobotForm.updateValueAndValidity();
    this.editRobotForm.updateValueAndValidity();
  }

  openCreateModal(event): void {
    event.preventDefault();

    this.robot = {};
    this.ishost = 'no';
    this.isbusy = 'no';
    this.robot.name = '';
    this.robot.isBusy = false;
    this.robot.isHost = false;
    this.robot._map = this.maps[0];
    this.robot.position = { x: 0, y: 0 };
    this.robot.direction = 'x+';
    this.robotCreationModal.show();
  }

  createRobot(value: any): void {
    var rb = {
      name: value.name,
      isHost: this.robot.isHost,
      isBusy: this.robot.isBusy,
      map: this.robot._map._id,
      positionX: value.positionx,
      positionY: value.positiony,
      direction: this.robot.direction
    }
    this.robotService.createRobot(rb).subscribe(res => {
      this.getRobots();
    }, err => {
      this.alert.visible = true;
      this.alert.message = err;
    });
    this.robotCreationModal.hide();
    this.newRobotForm.reset();
  }

  openEditModal(event: any, rId: any): void {
    event.preventDefault();
    this.robotService.getRobotById(rId).subscribe(res => {
      this.robot = res;
      this.robotId = res._id;
      this.editRobotForm.controls['name'].setValue(this.robot.name, { onlySelf: true });
      this.ishost = this.robot.isHost ? 'yes' : 'no';
      this.isbusy = this.robot.isBusy ? 'yes' : 'no';
      this.robotEditModal.show();
    }, err => {
      this.alert.visible = true;
      this.alert.message = err;
    })
  }

  editRobot(value: any): void {
    var rb = {
      name: value.name,
      isHost: this.robot.isHost,
      isBusy: this.robot.isBusy,
      map: this.robot._map._id,
      positionX: value.positionx,
      positionY: value.positiony,
      direction: this.robot.direction
    }
    this.robotService.saveRobot(this.robotId, rb).subscribe(res => {
      this.getRobots();
      this.editComplete = true;
      this.robotEditModal.hide();

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
    this.robotEditModal.hide();
    this.deleteProcess = true;
  }

  deleteRobot(event): void {
    event.preventDefault();
    this.robotService.deleteRobot(this.robotId).subscribe(res => {
      this.deleteProcess = false;
      this.getRobots();
      this.robotEditModal.hide();
    }, err => {
      this.deleteProcess = false;
      this.alert.visible = true;
      this.alert.message = err;
    });
  }
}
