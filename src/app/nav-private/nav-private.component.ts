import { Component, Input, OnInit, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { NavigationService } from '../navigation.service';
import { SpaceService } from '../space.service';
import { Subscription } from 'rxjs/Subscription';
import { AccountService } from '../account.service';
import { ApiService } from '../api.service';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-nav-private',
  templateUrl: './nav-private.component.html',
  styleUrls: [
    './nav-private.component.css',
    '../../assets/bootstrap/sb-admin2/dist/css/sb-admin-2.css'
  ]
})
export class NavPrivateComponent implements OnInit, AfterViewInit, OnDestroy  {

  @Input() status: string;
  @Input() message: string;
  subscriptionStatus: Subscription;
  subscriptionMessage: Subscription;
  public isCollapsed: boolean = false;
  public uploader:FileUploader;
  account: any = {};
  dings: any = [];
  floors: any = [];
  walls: any = [];
  paths: any = [];
  desks: any = [];
  places: any = [];
  objs: any = [];
  mapId: string;
  gridLayer: string = '0';
  gridOn: string = 'Off';
  pathOn: string = 'Off';
  bgName: string = 'No BG';
  infoCount: number = 0;
  showAdminMenu: boolean = false;
 
  public collapsed(event:any): void {
    console.info(event);
  }
 
  public expanded(event:any): void {
    console.info(event);
  }

  constructor(private route: ActivatedRoute, private location: Location, private elementRef: ElementRef, private navigationService: NavigationService, private accountService: AccountService, private apiService: ApiService, private spaceService: SpaceService, private router: Router) {
    this.subscriptionStatus = navigationService.navStatus$.subscribe(
      status => {
        this.status = status;

        if (status == 'mapeditor') {
          this.getDings();
        } else if (status == 'deskeditor') {
          this.getDings();
        }
      }
    );
    this.subscriptionMessage = navigationService.navMessage$.subscribe(
      message => {
        this.message = message;

        if (message.includes('mapid')) {
          let data: any = this.message.split('=');
          this.mapId = data[1];
          //this.uploader = new FileUploader({url:'https://localhost:3000/space/map-bg/' + this.mapId});
          this.uploader = new FileUploader({url:'/space/map-bg/' + this.mapId});
          this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
            var responsePath = JSON.parse(response);
            //console.log(response, responsePath, item, status, headers);// the url will be in the response
            if (responsePath.result == true) {
              this.navigationService.sendNavigationMessage('mapreload');
            }
          };
        } else if (message.includes('bgfile')) {
          let data: any = this.message.split('=');
          this.bgName = (data[1] == 'null') ? 'No BG' : data[1];
        } else if (message.includes('infocount')) {
          let data: any = this.message.split('=');
          this.infoCount = parseInt(data[1]);
        }
      }
    );
  }

  ngOnInit() {
    this.accountService.getAccount().subscribe(account => {
      this.account = account;

      if (this.account.userGroup == 'administrators') {
        this.showAdminMenu = true;
      }
    }, err => {
      if (err == 'AUTH_NEEDED') {
        document.location.href = '/home';
      }
    });
  }

  ngAfterViewInit() {
    /*this.accountService.getAccount().subscribe(account => {
      this.account = account;

      if (this.account.userGroup == 'administrators') {
        var el = document.createElement('li');
        el.innerHTML = '<a href="/admin/userlist"><i class="fa fa-wrench fa-fw"></i> Admin Dashboard</a>';
        var menuParent = this.elementRef.nativeElement.querySelector('.dropdown-menu.dropdown-user'),
            divideBar = this.elementRef.nativeElement.querySelector('.dropdown-menu.dropdown-user .divider');
        menuParent.insertBefore(el, divideBar);
      }
    }, err => {
      if (err == 'AUTH_NEEDED') {
        document.location.href = '/home';
      }
    });*/
    // change menus by status
    let navbarTop = this.elementRef.nativeElement.querySelector('.navbar-static-top');
    let sidebarContainer = this.elementRef.nativeElement.querySelector('.sidebar-nav');
    switch (this.status) {
      case 'maker':
        navbarTop.removeChild(this.elementRef.nativeElement.querySelector('.navbar-admin'));
        navbarTop.removeChild(this.elementRef.nativeElement.querySelector('.navbar-mapeditor'));
        navbarTop.removeChild(this.elementRef.nativeElement.querySelector('.navbar-mapoptimizer'));
        navbarTop.removeChild(this.elementRef.nativeElement.querySelector('.navbar-deskeditor'));
        navbarTop.removeChild(this.elementRef.nativeElement.querySelector('.navbar-infoeditor'));
        sidebarContainer.removeChild(this.elementRef.nativeElement.querySelector('.nav-admin'));
        sidebarContainer.removeChild(this.elementRef.nativeElement.querySelector('.nav-mapeditor'));
        sidebarContainer.removeChild(this.elementRef.nativeElement.querySelector('.nav-mapoptimizer'));
        sidebarContainer.removeChild(this.elementRef.nativeElement.querySelector('.nav-deskeditor'));
        sidebarContainer.removeChild(this.elementRef.nativeElement.querySelector('.nav-infoeditor'));
        break;
      case 'admin':
        navbarTop.removeChild(this.elementRef.nativeElement.querySelector('.navbar-maker'));
        navbarTop.removeChild(this.elementRef.nativeElement.querySelector('.navbar-mapeditor'));
        navbarTop.removeChild(this.elementRef.nativeElement.querySelector('.navbar-mapoptimizer'));
        navbarTop.removeChild(this.elementRef.nativeElement.querySelector('.navbar-deskeditor'));
        navbarTop.removeChild(this.elementRef.nativeElement.querySelector('.navbar-infoeditor'));
        sidebarContainer.removeChild(this.elementRef.nativeElement.querySelector('.nav-maker'));
        sidebarContainer.removeChild(this.elementRef.nativeElement.querySelector('.nav-mapeditor'));
        sidebarContainer.removeChild(this.elementRef.nativeElement.querySelector('.nav-mapoptimizer'));
        sidebarContainer.removeChild(this.elementRef.nativeElement.querySelector('.nav-deskeditor'));
        sidebarContainer.removeChild(this.elementRef.nativeElement.querySelector('.nav-infoeditor'));
        break;
      case 'mapeditor':
        navbarTop.removeChild(this.elementRef.nativeElement.querySelector('.navbar-admin'));
        navbarTop.removeChild(this.elementRef.nativeElement.querySelector('.navbar-maker'));
        navbarTop.removeChild(this.elementRef.nativeElement.querySelector('.navbar-mapoptimizer'));
        navbarTop.removeChild(this.elementRef.nativeElement.querySelector('.navbar-deskeditor'));
        navbarTop.removeChild(this.elementRef.nativeElement.querySelector('.navbar-infoeditor'));
        sidebarContainer.removeChild(this.elementRef.nativeElement.querySelector('.nav-admin'));
        sidebarContainer.removeChild(this.elementRef.nativeElement.querySelector('.nav-maker'));
        sidebarContainer.removeChild(this.elementRef.nativeElement.querySelector('.nav-mapoptimizer'));
        sidebarContainer.removeChild(this.elementRef.nativeElement.querySelector('.nav-deskeditor'));
        sidebarContainer.removeChild(this.elementRef.nativeElement.querySelector('.nav-infoeditor'));
        break;
      case 'mapoptimizer':
        navbarTop.removeChild(this.elementRef.nativeElement.querySelector('.navbar-admin'));
        navbarTop.removeChild(this.elementRef.nativeElement.querySelector('.navbar-maker'));
        navbarTop.removeChild(this.elementRef.nativeElement.querySelector('.navbar-mapeditor'));
        navbarTop.removeChild(this.elementRef.nativeElement.querySelector('.navbar-deskeditor'));
        navbarTop.removeChild(this.elementRef.nativeElement.querySelector('.navbar-infoeditor'));
        sidebarContainer.removeChild(this.elementRef.nativeElement.querySelector('.nav-admin'));
        sidebarContainer.removeChild(this.elementRef.nativeElement.querySelector('.nav-maker'));
        sidebarContainer.removeChild(this.elementRef.nativeElement.querySelector('.nav-mapeditor'));
        sidebarContainer.removeChild(this.elementRef.nativeElement.querySelector('.nav-deskeditor'));
        sidebarContainer.removeChild(this.elementRef.nativeElement.querySelector('.nav-infoeditor'));
        break;
      case 'deskeditor':
        navbarTop.removeChild(this.elementRef.nativeElement.querySelector('.navbar-admin'));
        navbarTop.removeChild(this.elementRef.nativeElement.querySelector('.navbar-maker'));
        navbarTop.removeChild(this.elementRef.nativeElement.querySelector('.navbar-mapeditor'));
        navbarTop.removeChild(this.elementRef.nativeElement.querySelector('.navbar-mapoptimizer'));
        navbarTop.removeChild(this.elementRef.nativeElement.querySelector('.navbar-infoeditor'));
        sidebarContainer.removeChild(this.elementRef.nativeElement.querySelector('.nav-admin'));
        sidebarContainer.removeChild(this.elementRef.nativeElement.querySelector('.nav-maker'));
        sidebarContainer.removeChild(this.elementRef.nativeElement.querySelector('.nav-mapeditor'));
        sidebarContainer.removeChild(this.elementRef.nativeElement.querySelector('.nav-mapoptimizer'));
        sidebarContainer.removeChild(this.elementRef.nativeElement.querySelector('.nav-infoeditor'));
        break;
      case 'infoeditor':
        navbarTop.removeChild(this.elementRef.nativeElement.querySelector('.navbar-admin'));
        navbarTop.removeChild(this.elementRef.nativeElement.querySelector('.navbar-maker'));
        navbarTop.removeChild(this.elementRef.nativeElement.querySelector('.navbar-mapeditor'));
        navbarTop.removeChild(this.elementRef.nativeElement.querySelector('.navbar-mapoptimizer'));
        navbarTop.removeChild(this.elementRef.nativeElement.querySelector('.navbar-deskeditor'));
        sidebarContainer.removeChild(this.elementRef.nativeElement.querySelector('.nav-admin'));
        sidebarContainer.removeChild(this.elementRef.nativeElement.querySelector('.nav-maker'));
        sidebarContainer.removeChild(this.elementRef.nativeElement.querySelector('.nav-mapeditor'));
        sidebarContainer.removeChild(this.elementRef.nativeElement.querySelector('.nav-mapoptimizer'));
        sidebarContainer.removeChild(this.elementRef.nativeElement.querySelector('.nav-deskeditor'));
        break;
    }

    var s = document.createElement('script');
    s.src = '/assets/bootstrap/sb-admin2/js/sb-admin-2.js';
    this.elementRef.nativeElement.appendChild(s);
    var s2 = document.createElement('script');
    s2.innerText = '(function(){$(\'body\').css(\'background-color\',\'#f8f8f8\')})();';
    this.elementRef.nativeElement.appendChild(s2);
  }

  ngOnDestroy() {
    this.subscriptionStatus.unsubscribe();
    this.subscriptionMessage.unsubscribe();
  }

  goHome(event): void {
    event.preventDefault();
    switch (this.status) {
      case 'maker':
        this.router.navigate(['/']);
        break;
      case 'admin':
        this.router.navigate(['/']);
        break;
      case 'mapeditor':
        this.navigationService.sendNavigationMessage('home');
        break;
      case 'mapoptimizer':
        break;
      case 'deskeditor':
        this.navigationService.sendNavigationMessage('home');
        break;
      case 'infoeditor':
        this.navigationService.sendNavigationMessage('home');
        break;
    }
  }

  getDings(): void {
    this.apiService.getDings().subscribe(dings => {
      this.dings = dings;
      this.floors = [];
      this.walls = [];
      this.paths = [];
      this.desks = [];
      this.places = [];
      this.objs = [];

      for (let d of this.dings) {  // of dings -> value, in dings -> index
        if (d.type == 'floor') {
          this.floors.push(d);
        }

        if (d.type == 'wall') {
          this.walls.push(d);
        }

        if (d.type == 'path') {
          this.paths.push(d);
        }

        if (d.type == 'desk') {
          this.desks.push(d);
        }

        if (d.type == 'place') {
          this.places.push(d);
        }

        if (d.type == 'object') {
          this.objs.push(d);
        }
        //console.log(this.floors, this.walls);
      }
    });
  }

  setVoxel(event, vId): void {
    event.preventDefault();
    this.navigationService.sendNavigationMessage('dingid=' + vId);
  }

  fillFloor(event): void {
    event.preventDefault();
    this.navigationService.sendNavigationMessage('fillFloor');
  }

  moveGrid(event): void {
    event.preventDefault();
    this.navigationService.sendNavigationMessage('gridlayer=' + this.gridLayer);
  }

  toggleGrid(event): void {
    event.preventDefault();
    this.navigationService.sendNavigationMessage('gridtoggle=' + this.gridOn);
  }

  togglePath(event): void {
    event.preventDefault();
    this.navigationService.sendNavigationMessage('pathtoggle=' + this.pathOn);
  }

  uploaderAvailable(): boolean {
    if (this.status == 'mapeditor') {
      if (this.uploader) {
        return (!this.uploader.getNotUploadedItems().length);
      } else {
        return true;
      }
    } else {
      return true;
    }
  }

  saveMap(event): void {
    event.preventDefault();
    this.navigationService.sendNavigationMessage('save');
  }

  saveMapAndExit(event): void {
    event.preventDefault();
    this.navigationService.sendNavigationMessage('safeexit');
  }

  askExit(event): void {
    event.preventDefault();
    this.navigationService.sendNavigationMessage('exit');
  }

  saveDeskMap(event): void {
    event.preventDefault();
    this.navigationService.sendNavigationMessage('save');
  }

  saveDeskAndExit(event): void {
    event.preventDefault();
    this.navigationService.sendNavigationMessage('safeexit');
  }

  askDeskExit(event): void {
    event.preventDefault();
    this.navigationService.sendNavigationMessage('exit');
  }

  saveInfo(event): void {
    event.preventDefault();
    this.navigationService.sendNavigationMessage('save');
  }

  saveInfoAndExit(event): void {
    event.preventDefault();
    this.navigationService.sendNavigationMessage('safeexit');
  }

  askInfoExit(event): void {
    event.preventDefault();
    this.navigationService.sendNavigationMessage('exit');
  }

  showInfos(event): void {
    event.preventDefault();
    this.navigationService.sendNavigationMessage('showinfos');
  }
}
