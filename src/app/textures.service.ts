import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class TexturesService {

  constructor(private http: Http) { }

  getTextures(limit: number, page: number) {
    return this.http.get('/texture/list/' + limit.toString() + '/' + page.toString()).map(res => res.json());
  }

  getTexturesByKeyword(limit: number, page: number, keyword: string) {
    return this.http.get('/texture/search/' + limit.toString() + '/' + page.toString() + '/' + keyword).map(res => res.json());
  }

  getAvailableTextures() {
    return this.http.get('/texture/availables').map(res => res.json());
  }

  createTexture(texture: any): Observable<any> {
    return this.http.post('/texture/create', texture)
      .map(res => res.json())
      .catch((err: any) => Observable.throw(err.json().error || 'Server error'));
  }

  saveTexture(id: string, texture: any): Observable<any> {
    return this.http.put('/texture/' + id, texture)
      .map(res => res.json())
      .catch((err: any) => Observable.throw(err.json().error || 'Server error'));
  }

  deleteTexture(id: string): Observable<any> {
    return this.http.delete('/texture/' + id)
      .map(res => res.json())
      .catch((err: any) => Observable.throw(err.json().error || 'Server error'));
  }

  getTextureById(id: string): Observable<any> {
    return this.http.get('/texture/' + id)
      .map(res => res.json())
      .catch((err: any) => Observable.throw(err.json().error || 'Server error'));
  }
}
