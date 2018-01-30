import { Component, OnInit, ViewChild } from '@angular/core';
import { ViewEncapsulation, NgModule } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SpaceService } from '../space.service';
import { NavigationService } from '../navigation.service';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-spaces',
  templateUrl: './spaces.component.html',
  styleUrls: [
    './spaces.component.css',
    '../../assets/bootstrap/sb-admin2/dist/css/sb-admin-2.css'
  ],
  providers: [NavigationService]
})
export class SpacesComponent implements OnInit {

  status: string;
  message: string;
  timeZone: string = '+01:00';
  timeFormat: string = 'DD-MM-YYYY HH:mm:ss';
  spaces: any = [];
  newSpaceForm: FormGroup;
  alert: any = {
    visible: false,
    message: ''
  };
  @ViewChild('spaceCreationModal') public spaceCreationModal: ModalDirective;

  constructor(private spaceService: SpaceService, private navigationService: NavigationService, fb: FormBuilder) {
    navigationService.navMessage$.subscribe(message => {
      this.message = message;
      console.log(`[EasyInside - account] navigation message: ${this.message}`);
    });
    navigationService.navStatus$.subscribe(status => {
      this.status = status;
      console.log(`[EasyInside - account] navigation status: ${this.status}`);
    });
    this.newSpaceForm = fb.group({
      'name': [null, [Validators.required, Validators.pattern('[0-9A-Za-z ]*')]],
      'description': ""
    });
  }

  ngOnInit() {
    this.getSpaces();
    this.navigationService.setNavigationStatus('maker');
  }

  getSpaces(): void {
    this.spaceService.getSpaces().subscribe(spaces => {
      this.spaces = spaces;
    });
  }

  openCreateModal(event): void {
    event.preventDefault();
    this.spaceCreationModal.show();
  }

  createSpace(value: any) {
    this.spaceService.createSpace(value).subscribe(res => {
      this.getSpaces();
    }, err => {
      this.alert.visible = true;
      this.alert.message = err;
    });
    this.spaceCreationModal.hide();
  }

  onCloseAlert(event): void {
    this.alert.visible = false;
  }
}
