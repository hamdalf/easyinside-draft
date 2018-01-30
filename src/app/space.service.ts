import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class SpaceService {

  constructor(private http: Http) { }

  getSpaces() {
    return this.http.get('/space/spaces').map(res => res.json());
  }

  createSpace(space: any): Observable<any> {
    return this.http.post('/space/create', space)
      .map(res => res.json())
      .catch((err: any) => Observable.throw(err.json().error || 'Server error'));
  }

  saveSpace(id: string, space: any): Observable<any> {
    return this.http.put('/space/' + id, space)
      .map(res => res.json())
      .catch((err: any) => Observable.throw(err.json().error || 'Server error'));
  }

  deleteSpace(id: string): Observable<any> {
    return this.http.delete('/space/' + id)
      .map(res => res.json())
      .catch((err: any) => Observable.throw(err.json().error || 'Server error'));
  }

  getSpaceById(id: string): Observable<any> {
    return this.http.get('/space/space/' + id)
      .map(res => res.json())
      .catch((err: any) => Observable.throw(err.json().error || 'Server error'));
  }

  /**
   * maps
   */

  getMaps(spaceId: string) {
    return this.http.get('/space/maps/' + spaceId).map(res => res.json());
  }

  createMap(map: any): Observable<any> {
    return this.http.post('/space/map', map)
      .map(res => res.json())
      .catch((err: any) => Observable.throw(err.json().error || 'Server error'));
  }

  saveMap(id: string, map: any): Observable<any> {
    return this.http.put('/space/map/' + id, map)
      .map(res => res.json())
      .catch((err: any) => Observable.throw(err.json().error || 'Server error'));
  }

  saveMapFile(id: string, file: any): Observable<any> {
    return this.http.post('/space/map-file/' + id, file)
      .map(res => res.json())
      .catch((err: any) => Observable.throw(err.json().error || 'Server error'));
  }

  saveOptFile(id: string, file: any): Observable<any> {
    return this.http.post('/space/opt-file/' + id, file)
      .map(res => res.json())
      .catch((err: any) => Observable.throw(err.json().error || 'Server error'));
  }

  saveDeskFile(id: string, file: any): Observable<any> {
    return this.http.post('/space/desk-file/' + id, file)
      .map(res => res.json())
      .catch((err: any) => Observable.throw(err.json().error || 'Server error'));
  }

  deleteMap(id: string): Observable<any> {
    return this.http.delete('/space/map/' + id)
      .map(res => res.json())
      .catch((err: any) => Observable.throw(err.json().error || 'Server error'));
  }

  getMapById(id: string): Observable<any> {
    return this.http.get('/space/map/' + id)
      .map(res => res.json())
      .catch((err: any) => Observable.throw(err.json().error || 'Server error'));
  }

  getRecentMaps(): Observable<any> {
    return this.http.get('/space/recent-maps')
      .map(res => res.json())
      .catch((err: any) => Observable.throw(err.json().error || 'Server error'));
  }

  getAllMaps(): Observable<any> {
    return this.http.get('/space/allmaps')
      .map(res => res.json())
      .catch((err: any) => Observable.throw(err.json().error || 'Server error'));
  }

  getAllMapsCount(): Observable<any> {
    return this.http.get('/space/allmapscount')
    .map(res => res.json())
    .catch((err: any) => Observable.throw(err.json().error || 'Server error'));
  }
}
