import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class DingsService {

  constructor(private http: Http) { }

  getDings(limit: number, page: number) {
    return this.http.get('/ding/list/' + limit.toString() + '/' + page.toString()).map(res => res.json());
  }

  getDingsByKeyword(limit: number, page: number, keyword: string) {
    return this.http.get('/ding/search/' + limit.toString() + '/' + page.toString() + '/' + keyword).map(res => res.json());
  }

  getAvailableDings() {
    return this.http.get('/ding/availables').map(res => res.json());
  }

  createDing(ding: any): Observable<any> {
    return this.http.post('/ding/create', ding)
      .map(res => res.json())
      .catch((err: any) => Observable.throw(err.json().error || 'Server error'));
  }

  saveDing(id: string, ding: any): Observable<any> {
    return this.http.put('/ding/' + id, ding)
      .map(res => res.json())
      .catch((err: any) => Observable.throw(err.json().error || 'Server error'));
  }

  deleteDing(id: string): Observable<any> {
    return this.http.delete('/ding/' + id)
      .map(res => res.json())
      .catch((err: any) => Observable.throw(err.json().error || 'Server error'));
  }

  getDingById(id: string): Observable<any> {
    return this.http.get('/ding/' + id)
      .map(res => res.json())
      .catch((err: any) => Observable.throw(err.json().error || 'Server error'));
  }
}
