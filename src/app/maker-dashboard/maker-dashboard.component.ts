import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../navigation.service';
import { SpaceService } from '../space.service';

@Component({
  selector: 'app-maker-dashboard',
  templateUrl: './maker-dashboard.component.html',
  styleUrls: [
    './maker-dashboard.component.less',
    '../../assets/bootstrap/sb-admin2/dist/css/sb-admin-2.css'
  ],
  providers: [NavigationService]
})
export class MakerDashboardComponent implements OnInit {

  status: string;
  message: string;
  recentMaps: any = [];
  allMapCount: number = 0;

  constructor(private navigationService: NavigationService, private spaceService: SpaceService) {
    navigationService.navMessage$.subscribe(message => {
      this.message = message;
    });
    navigationService.navStatus$.subscribe(status => {
      this.status = status;
    });
  }

  ngOnInit() {
    this.navigationService.setNavigationStatus('maker');
    this.getRecentMaps();
    this.getAllMapsCount();
  }

  getRecentMaps(): void {
    this.spaceService.getRecentMaps().subscribe(maps => {
      this.recentMaps = maps;
    });
  }

  getAllMapsCount(): void {
    this.spaceService.getAllMapsCount().subscribe(res => {
      this.allMapCount = res.maps;
    });
  }
}
