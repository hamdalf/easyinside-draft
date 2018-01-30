import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class RobotService {

  constructor(private http: Http) { }

  getRobots(limit: number, page: number) {
    return this.http.get('/robot/all/' + limit.toString() + '/' + page.toString()).map(res => res.json());
  }

  getRobotsByKeyword(limit: number, page: number, keyword: string) {
    return this.http.get('/robot/search/' + limit.toString() + '/' + page.toString() + '/' + keyword).map(res => res.json());
  }

  createRobot(robot: any): Observable<any> {
    return this.http.post('/robot/create', robot)
      .map(res => res.json())
      .catch((err: any) => Observable.throw(err.json().error || 'Server error'));
  }

  getRobotById(rId: string): Observable<any> {
    return this.http.get('/robot/'+ rId)
      .map(res => res.json())
      .catch((err: any) => Observable.throw(err.json().error || 'Server error'));
  }

  saveRobot(id: string, robot: any): Observable<any> {
    return this.http.put('/robot/' + id, robot)
      .map(res => res.json())
      .catch((err: any) => Observable.throw(err.json().error || 'Server error'));
  }

  deleteRobot(id: string): Observable<any> {
    return this.http.delete('/robot/' + id)
      .map(res => res.json())
      .catch((err: any) => Observable.throw(err.json().error || 'Server error'));
  }
}
