import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-map-login',
  templateUrl: './map-login.component.html',
  styleUrls: [
    '../../assets/bootstrap/landingpage/css/landing-page.css',
    './map-login.component.css'
  ],
  encapsulation: ViewEncapsulation.None
})
export class MapLoginComponent implements OnInit {

  mapId: string;
  infoId: string;
  wrongPassword: boolean = false;
  pwForm: FormGroup;

  constructor(private route: ActivatedRoute, private location: Location, private apiService: ApiService, fb: FormBuilder) {
    this.pwForm = fb.group({
      'pw': [null, [Validators.required]]
    });
  }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => 
        this.mapId = params['id']
      )
      .subscribe(res => {
        //console.log(res, this.mapId);
      });
    this.route.queryParams.subscribe(params => {
      this.infoId = params['infoId'];
    });
  }

  submitPassword(value: any): void {
    let data = {
      password: value.pw
    }
    this.apiService.mapPassword(this.mapId, data).subscribe(res => {
      if (typeof res.error !== 'undefined') {
        if (res.error.includes('PASSWORD')) {
          this.wrongPassword = true;
        }
      }
      if (typeof res.result !== 'undefined') {
        if (res.result.includes('PASS')) {
          this.wrongPassword = false;
          if (this.infoId) {
            document.location.href = '/map/' + this.mapId + '?infoId=' + this.infoId;
          } else {
            document.location.href = '/map/' + this.mapId;
          }
        }
      }
    });
  }
}
