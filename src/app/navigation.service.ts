import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class NavigationService {

  public window = window as any;  // type assertion
  private navStatusSource = new Subject<string>();
  private navMessageSource = new Subject<string>();

  navStatus$ = this.navStatusSource.asObservable();
  navMessage$ = this.navMessageSource.asObservable();

  setNavigationStatus(status: string) {
    this.navStatusSource.next(status);
  }

  sendNavigationMessage(message: string) {
    this.navMessageSource.next(message);
  }

  constructor() { }

}
