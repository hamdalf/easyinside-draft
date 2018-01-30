import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ApiService {

  constructor(private http: Http) { }

  getDings(): Observable<any> {
    return this.http.get('/api/dings/json')
      .map(res => res.json())
      .catch((err: any) => Observable.throw(err.json().error || 'Server error'));
  }

  getInfo(spaceId: string): Observable<any> {
    return this.http.get('/api/info/json/' + spaceId)
      .map(res => res.json())
      .catch((err: any) => Observable.throw(err.json().error || 'Server error'));
  }

  getMap(mapId: string): Observable<any> {
    return this.http.get('/api/map/' + mapId)
      .map(res => res.json())
      .catch((err: any) => Observable.throw(err.json().error || 'Server error'));
  }

  mapPassword(mapId: string, password: any): Observable<any> {
    return this.http.post('/api/mapauth/' + mapId, password)
      .map(res => res.json())
      .catch((err: any) => Observable.throw(err.json().error || 'Server error'));
  }

  getSpace(spaceId: string): Observable<any> {
    return this.http.get('/api/space/' + spaceId)
      .map(res => res.json())
      .catch((err: any) => Observable.throw(err.json().error || 'Server error'));
  }

  getRobotsInMap(mapId: string): Observable<any> {
    return this.http.get(`/api/robotinmap/${mapId}`)
      .map(res => res.json())
      .catch((err: any) => Observable.throw(err.json().error || 'Server error'));
  }

  registerRobot(mapId: string, robotName: string, mapPassword: string): Observable<any> {
    return this.http.get(`/api/robotregister/${mapId}/${robotName}/${mapPassword}`)
      .map(res => res.json())
      .catch((err: any) => Observable.throw(err.json().error || 'Server error'));
  }

  deleteRobot(robotId: string, mapPassword: string): Observable<any> {
    return this.http.get(`/api/robotdelete/${robotId}/${mapPassword}`)
      .map(res => res.json())
      .catch((err: any) => Observable.throw(err.json().error || 'Server error'));
  }

  setRobotPosition(robotId: string, x: number, y: number, d: string): Observable<any> {
    return this.http.get(`/api/robotposition/${robotId}/${x}/${y}/${d}`)
      .map(res => res.json())
      .catch((err: any) => Observable.throw(err.json().error || 'Server error'));
  }

  setRobotFree(robotId: string): Observable<any> {
    return this.http.get('/api/robotfree/' + robotId)
      .map(res => res.json())
      .catch((err: any) => Observable.throw(err.json().error || 'Server error'));
  }

  getIdleHostRobot(mapId: string): Observable<any> {
    return this.http.get('/api/robotidle/' + mapId)
      .map(res => res.json())
      .catch((err: any) => Observable.throw(err.json().error || 'Server error'));
  }

  getSelectedRobot(robotId: string): Observable<any> {
    return this.http.get('/api/robotselect/' + robotId)
      .map(res => res.json())
      .catch((err: any) => Observable.throw(err.json().error || 'Server error'));
  }

  getRobotMessage(robotId: string): Observable<any> {
    return this.http.get(`/api/robotmessage/${robotId}`)
      .map(res => res.json())
      .catch((err: any) => Observable.throw(err.json().error || 'Server error'));
  }

  setRoute(robotId: string, route: any): Observable<any> {
    return this.http.put('/api/robotroute/' + robotId, route)
      .map(res => res.json())
      .catch((err: any) => Observable.throw(err.json().error || 'Server error'));
  }

  getSharedMaps(limit: number, page: number) {
    return this.http.get('/api/mapsearchablelist/' + limit.toString() + '/' + page.toString()).map(res => res.json());
  }

  getSharedMapsByKeyword(limit: number, page: number, keyword: string) {
    return this.http.get('/api/mapsearchablebykeyword/' + limit.toString() + '/' + page.toString() + '/' + keyword).map(res => res.json());
  }

  getSharedSpaces(limit: number, page: number) {
    return this.http.get('/api/spacesearchablelist/' + limit.toString() + '/' + page.toString()).map(res => res.json());
  }

  getSharedSpacesByKeyword(limit: number, page: number, keyword: string) {
    return this.http.get('/api/spacesearchablebykeyword/' + limit.toString() + '/' + page.toString() + '/' + keyword).map(res => res.json());
  }

  /*getGraph(mapId: string): Observable<any> {
    return this.http.get('/api/graph/' + mapId)
      .map(res => res.json())
      .catch((err: any) => Observable.throw(err.json().error || 'Server error'));
  }*/

  /*sendRobot(robotId: string, x: number, y: number): Observable<any> {
    return this.http.get('/api/robotsend/' + robotId + '/' + x + '/' + y)
      .map(res => res.json())
      .catch((err: any) => Observable.throw(err.json().error || 'Server error'));
  }

  sendAnyRobot(mapId: string, x: number, y: number): Observable<any> {
    return this.http.get('/api/anyrobotsend/' + mapId + '/' + x + '/' + y)
      .map(res => res.json())
      .catch((err: any) => Observable.throw(err.json().error || 'Server error'));
  }*/

  /*getPath(mapId, startX, startY, endX, endY): Observable<any> {
    return this.http.get('/api/pathfinder/' + mapId + '/' + startX + '/' + startY + '/' + endX + '/' + endY)
      .map(res => res.json())
      .catch((err: any) => Observable.throw(err.json().error || 'Server error'));
  }*/
}
