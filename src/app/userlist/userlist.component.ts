import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { AccountService } from '../account.service';
import { NavigationService } from '../navigation.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: [
    './userlist.component.css',
    '../../assets/bootstrap/sb-admin2/dist/css/sb-admin-2.css'
  ],
  providers: [NavigationService]
})

export class UserlistComponent implements OnInit, AfterViewInit {

  accounts: any = [];
  status: string;
  message: string;
  limit: string = '10';
  page: number = 1;
  total: number;
  timeZone: string = '+01:00';
  timeFormat: string = 'DD-MM-YYYY HH:mm:ss';
  pageFrom: number;
  pageTo: number;
  keyword: string;

  constructor(private elementRef: ElementRef, private accountService: AccountService, private navigationService: NavigationService) {
    navigationService.navMessage$.subscribe(message => {
      this.message = message;
      console.log(`[EasyInside - account] navigation message: ${this.message}`);
    });
    navigationService.navStatus$.subscribe(status => {
      this.status = status;
      console.log(`[EasyInside - account] navigation status: ${this.status}`);
    });
    /*route.params.subscribe(params => {
      this.page = +params['page'];
      this.limit = +params['limit'];
    });*/
  }

  ngOnInit() {
    this.navigationService.setNavigationStatus('admin');
    this.getAccounts();
    /*this.route.params
      .switchMap((params: Params) => 
        this.accountService.getAcconts(+params['limit'],(+params['page']-1))
      )
      .subscribe(req => {
        this.accounts = req.users;
        this.page = parseInt(req.page) + 1;
        this.limit = req.limit;
        this.total = req.total;
      });*/
  }

  ngAfterViewInit() {

  }

  setPage(p: number): void {
    this.page = p;
  }

  pageChanged(event: any): void {
    //this.accountService.getAcconts(this.limit, event.page - 1).subscribe(res => this.accounts = res.users);
    this.page = event.page;
    this.getAccounts();
  }

  onClickLimit(event: any): void {
    this.getAccounts();
  }

  onChangeKeyword(event: any): void {
    if (event.keyCode == 13) {
      if (event.srcElement.value != '') {
        this.keyword = event.srcElement.value;
      } else {
        this.keyword = '';
      }
      this.page = 1;
      this.getAccounts();
    }
  }

  getAccounts(): void {
    if (!this.keyword) {
      this.accountService.getAcconts(parseInt(this.limit), this.page - 1).subscribe(res => {
        this.accounts = res.users;
        this.total = res.total;
        this.page = res.page + 1;
        this.pageFrom = (this.page - 1) * parseInt(this.limit) + 1;
        let pt = this.pageFrom + parseInt(this.limit) - 1;
        this.pageTo = (pt > this.total) ? this.total : pt;
      });
    } else {
      this.accountService.getAccountsByKeyword(parseInt(this.limit), this.page - 1, this.keyword).subscribe(res => {
        this.accounts = res.users;
        this.keyword = res.keyword;
        this.total = res.total;
        this.page = res.page + 1;
        this.pageFrom = (this.page - 1) * parseInt(this.limit) + 1;
        let pt = this.pageFrom + parseInt(this.limit) - 1;
        this.pageTo = (pt > this.total) ? this.total : pt;
      });
    }
  }
}
