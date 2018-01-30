import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class GeometriesService {

  constructor(private http: Http) { }

  getGeometries(limit: number, page: number) {
    return this.http.get('/geometry/list/' + limit.toString() + '/' + page.toString()).map(res => res.json());
  }

  getGeometriesByKeyword(limit: number, page: number, keyword: string) {
    return this.http.get('/geometry/search/' + limit.toString() + '/' + page.toString() + '/' + keyword).map(res => res.json());
  }

  getAvailableGeometries() {
    return this.http.get('/geometry/availables').map(res => res.json());
  }

  createGeometry(geometry: any): Observable<any> {
    return this.http.post('/geometry/create', geometry)
      .map(res => res.json())
      .catch((err: any) => Observable.throw(err.json().error || 'Server error'));
  }

  saveGeometry(id: string, geometry: any): Observable<any> {
    return this.http.put('/geometry/' + id, geometry)
      .map(res => res.json())
      .catch((err: any) => Observable.throw(err.json().error || 'Server error'));
  }

  deleteGeometry(id: string): Observable<any> {
    return this.http.delete('/geometry/' + id)
      .map(res => res.json())
      .catch((err: any) => Observable.throw(err.json().error || 'Server error'));
  }

  getGeometryById(id: string): Observable<any> {
    return this.http.get('/geometry/' + id)
      .map(res => res.json())
      .catch((err: any) => Observable.throw(err.json().error || 'Server error'));
  }
}
