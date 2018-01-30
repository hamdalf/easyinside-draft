import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { AccountService } from '../account.service';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-userview',
  templateUrl: './userview.component.html',
  styleUrls: [
    './userview.component.css',
    '../../assets/bootstrap/sb-admin2/dist/css/sb-admin-2.css'
  ],
  providers: [NavigationService]
})
export class UserviewComponent implements OnInit {

  userId: string;
  account: any;
  status: string;
  message: string;
  editComplete: boolean = false;
  timeZone: string = '+01:00';
  timeFormat: string = 'DD-MM-YYYY HH:mm:ss';

  constructor(private accountService: AccountService, private route: ActivatedRoute, private location: Location, private navigationService: NavigationService) {
    navigationService.navMessage$.subscribe(message => {
      this.message = message;
      console.log(`[EasyInside - account] navigation message: ${this.message}`);
    });
    navigationService.navStatus$.subscribe(status => {
      this.status = status;
      console.log(`[EasyInside - account] navigation status: ${this.status}`);
    });
    /*route.params.subscribe(params => {
      this.userId = params['id'];
      this.accountService.getAccountById(this.userId).subscribe(res => {
        console.log(res);
        this.account = res[0];
      });
    });*/
  }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => 
        this.accountService.getAccountById(params['id'])
      )
      .subscribe(res => {
        this.account = res[0];
        this.userId = this.account._id;
      });
    this.navigationService.setNavigationStatus('admin');
  }

  changeUserStauts(event, property: string, value: string) {
    event.preventDefault();
    var objUser = {
      oauthID: this.account.oauthID,
      provider: this.account.provider,
      name: this.account.name,
      created: this.account.created,
      userGroup: this.account.userGroup,
      grade: this.account.grade
    };

    switch (property) {
      case 'usergroup':
        objUser.userGroup = value;
        break;
      case 'grade':
        objUser.grade = value;
        break;
    }

    this.accountService.setAccountById(this.userId, objUser).subscribe(res => {
      this.account = res;
      this.editComplete = true;

      setTimeout(() => {
        this.editComplete = false;
      }, 3000);
    });
  }

  deleteAccount(event) {
    event.preventDefault();
    this.accountService.deleteAccountById(this.userId).subscribe(res => {
      history.back();
    });
  }
}
