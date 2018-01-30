import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-space-search',
  templateUrl: './space-search.component.html',
  styleUrls: ['./space-search.component.less']
})
export class SpaceSearchComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  spaces: any = [];
  maps: any = [];
  limit: string = '10';
  page: number = 1;
  total: number;
  numPages: number = 0;
  timeZone: string = '+01:00';
  timeFormat: string = 'DD-MM-YYYY HH:mm:ss';
  pageFrom: number;
  pageTo: number;
  keyword: string = '';
  tabMode: string;

  ngOnInit() {
    this.tabMode = 'space';
    this.getLists();
  }

  getLists(): void {
    if (this.tabMode === 'map') {
      if (!this.keyword) {
        this.apiService.getSharedMaps(parseInt(this.limit), this.page - 1).subscribe(res => {
          this.maps = res.maps;
          this.total = res.total;
          this.page = res.page + 1;
          this.pageFrom = (this.page - 1) * parseInt(this.limit) + 1;
          let pt = this.pageFrom + parseInt(this.limit) - 1;
          this.pageTo = (pt > this.total) ? this.total : pt;
        });
      } else {
        this.apiService.getSharedMapsByKeyword(parseInt(this.limit), this.page - 1, this.keyword).subscribe(res => {
          this.maps = res.maps;
          this.keyword = res.keyword;
          this.total = res.total;
          this.page = res.page + 1;
          this.pageFrom = (this.page - 1) * parseInt(this.limit) + 1;
          let pt = this.pageFrom + parseInt(this.limit) - 1;
          this.pageTo = (pt > this.total) ? this.total : pt;
        });
      }
    } else {
      if (!this.keyword) {
        this.apiService.getSharedSpaces(parseInt(this.limit), this.page - 1).subscribe(res => {
          this.spaces = res.spaces;
          this.total = res.total;
          this.page = res.page + 1;
          this.pageFrom = (this.page - 1) * parseInt(this.limit) + 1;
          let pt = this.pageFrom + parseInt(this.limit) - 1;
          this.pageTo = (pt > this.total) ? this.total : pt;
        });
      } else {
        this.apiService.getSharedSpacesByKeyword(parseInt(this.limit), this.page - 1, this.keyword).subscribe(res => {
          this.spaces = res.spaces;
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

  setTab(event: any, tab: string): any {
    event.preventDefault();
    this.tabMode = tab;
    this.getLists();
  }

  setPage(p: number): void {
    this.page = p;
  }

  pageChanged(event: any): void {
    this.page = event.page;
    this.getLists();
  }

  onClickLimit(event: any, lm: string): void {
    event.preventDefault();
    this.limit = lm;
    this.getLists();
  }

  onChangeKeyword(event: any): void {
    if (event.keyCode == 13) {
      /*if (event.srcElement.value != '') {
        this.keyword = event.srcElement.value;
      } else {
        this.keyword = '';
      }*/
      if (this.keyword != '') {
        this.page = 1;
        this.getLists();
      }
    }
  }

  clickSearchButton(event: any): void {
    event.preventDefault();
    if (this.keyword != '') {
      this.page = 1;
      this.getLists();
    }
  }

}
