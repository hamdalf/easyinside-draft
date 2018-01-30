import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class InfosService {

  constructor(private http: Http) { }

  getInfos(spaceId: string) {
    return this.http.get('/info/infos/' + spaceId).map(res => res.json());
  }

  createInfo(info: any): Observable<any> {
    return this.http.post('/info/create', info)
      .map(res => res.json())
      .catch((err: any) => Observable.throw(err.json().error || 'Server error'));
  }

  saveInfo(id: string, info: any): Observable<any> {
    return this.http.put('/info/' + id, info)
      .map(res => res.json())
      .catch((err: any) => Observable.throw(err.json().error || 'Server error'));
  }

  deleteInfo(id: string): Observable<any> {
    return this.http.delete('/info/' + id)
      .map(res => res.json())
      .catch((err: any) => Observable.throw(err.json().error || 'Server error'));
  }

  getInfoById(id: string): Observable<any> {
    return this.http.get('/info/' + id)
      .map(res => res.json())
      .catch((err: any) => Observable.throw(err.json().error || 'Server error'));
  }

  setInfoMap(id: string, info: any): Observable<any> {
    return this.http.put('/info/setmap/' + id, info)
      .map(res => res.json())
      .catch((err: any) => Observable.throw(err.json().error || 'Server error'));
  }

  delInfoMap(id: string): Observable<any> {
    return this.http.put('/info/delmap/' + id, null)
      .map(res => res.json())
      .catch((err: any) => Observable.throw(err.json().error || 'Server error'));
  }
}
