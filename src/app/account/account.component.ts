import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation, NgModule } from '@angular/core';
import { AccountService } from '../account.service';
import { NavigationService } from '../navigation.service';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: [
    './account.component.css',
    '../../assets/bootstrap/sb-admin2/dist/css/sb-admin-2.css'
  ],
  providers: [NavigationService]
})
export class AccountComponent implements OnInit {

  account: any = {};
  status: string;
  message: string;
  timeZone: string = '+01:00';
  timeFormat: string = 'DD-MM-YYYY HH:mm:ss';

  constructor(private accountService: AccountService, private navigationService: NavigationService) {
    navigationService.navMessage$.subscribe(message => {
      this.message = message;
      console.log(`[EasyInside - account] navigation message: ${this.message}`);
    });
    navigationService.navStatus$.subscribe(status => {
      this.status = status;
      console.log(`[EasyInside - account] navigation status: ${this.status}`);
    });
  }

  ngOnInit() {
    this.accountService.getAccount().subscribe(account => {
      this.account = account;
    });
    this.navigationService.setNavigationStatus('maker');
  }

}
