import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AccountService {

  constructor(private http: Http) { }

  getAccount(): Observable<any> {
    return this.http.get('/auth/account')
    .map(res => res.json())
    .catch((err: any) => Observable.throw(err.json().error || 'Server error'));;
  }

  getAcconts(limit: number, page: number) {
    return this.http.get('/user/list/' + limit.toString() + '/' + page.toString()).map(res => res.json());
  }

  getAccountById(id: string) {
    return this.http.get('/user/' + id).map(res => res.json());
  }

  setAccountById(id: string, user: any) {
    return this.http.put('/user/' + id, user).map(res => res.json());
  }

  deleteAccountById(id: string) {
    return this.http.delete('/user/' + id).map(res => res.json());
  }

  getAccountsByKeyword(limit: number, page: number, keyword: string) {
    return this.http.get('/user/search/' + limit.toString() + '/' + page.toString() + '/' + keyword).map(res => res.json());
  }
}
