import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { NavigationService } from '../navigation.service';
import { SpaceService } from '../space.service';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-space-edit',
  templateUrl: './space-edit.component.html',
  styleUrls: [
    './space-edit.component.css',
    '../../assets/bootstrap/sb-admin2/dist/css/sb-admin-2.css'
  ],
  providers: [NavigationService]
})
export class SpaceEditComponent implements OnInit {

  spaceId: string;
  space: any = {};
  searchable: string = 'no';
  published: string = 'no';
  status: string;
  message: string;
  editComplete: boolean = false;
  deleteProcess: boolean = false;
  timeZone: string = '+01:00';
  timeFormat: string = 'DD-MM-YYYY HH:mm:ss';
  spaceForm: FormGroup;
  newMapForm: FormGroup;
  maps: any = [];
  @ViewChild('mapCreationModal') public mapCreationModal: ModalDirective;

  constructor(private route: ActivatedRoute, private location: Location, private navigationService: NavigationService, private spaceService: SpaceService, fb: FormBuilder) {
    navigationService.navMessage$.subscribe(message => {
      this.message = message;
      console.log(`[EasyInside - space edit] navigation message: ${this.message}`);
    });
    navigationService.navStatus$.subscribe(status => {
      this.status = status;
      console.log(`[EasyInside - space edit] navigation status: ${this.status}`);
    });
    this.spaceForm = fb.group({
      'name': [null, [Validators.required, Validators.pattern('[0-9A-Za-z ]*')]],
      'description': ""
    });
    this.newMapForm = fb.group({
      'name': [null, [Validators.required, Validators.pattern('[0-9A-Za-z ]*')]]
    });
  }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => 
        this.spaceService.getSpaceById(params['id'])
      )
      .subscribe(res => {
        this.space = res;
        this.spaceId = this.space._id;
        this.spaceForm.controls['name'].setValue(this.space.name, { onlySelf: true });
        this.searchable = this.space.searchable ? 'yes' : 'no';
        this.published = this.space.published ? 'yes' : 'no';
        this.getMaps();
      });
    this.navigationService.setNavigationStatus('maker');
  }

  getMaps() {
    this.spaceService.getMaps(this.spaceId).subscribe(res => {
      this.maps = res;
    }, err => {
      console.log(err);
    })
  }

  changeSpaceStatus(event, property, value): void {
    event.preventDefault();
    this.space[property] = value;
    this.searchable = this.space.searchable ? 'yes' : 'no';
    this.published = this.space.published ? 'yes' : 'no';
    this.spaceForm.updateValueAndValidity();
  }

  saveSpace(value: any): void {
    var sp = {
      name: value.name,
      description: value.description,
      searchable: this.space.searchable,
      published: this.space.published
    };
    this.spaceService.saveSpace(this.spaceId, sp).subscribe(res => {
      this.space = res;
      this.spaceForm.controls['name'].setValue(this.space.name, { onlySelf: true });
      this.searchable = this.space.searchable ? 'yes' : 'no';
      this.published = this.space.published ? 'yes' : 'no';
      this.editComplete = true;

      setTimeout(() => {
        this.editComplete = false;
      }, 3000);
    }, err => {
      console.log(err);
    });
  }

  askDelete(event): void {
    event.preventDefault();
    this.deleteProcess = true;
  }

  deleteSpace(event): void {
    event.preventDefault();
    this.spaceService.deleteSpace(this.spaceId).subscribe(res => {
      history.back();
    }, err => {
      console.log(err);
      this.deleteProcess = false;
    });
  }

  openCreateModal(event): void {
    event.preventDefault();
    this.mapCreationModal.show();
  }

  createMap(value: any) {
    value.spaceId = this.spaceId;
    this.spaceService.createMap(value).subscribe(res => {
      this.getMaps();
    }, err => {
      console.log(err);
    });
    this.mapCreationModal.hide();
  }
}
