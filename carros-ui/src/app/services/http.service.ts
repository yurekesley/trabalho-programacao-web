import { URL_SERVIDOR } from './../module/main/providers';
import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class HttpService {

  constructor(
      @Inject(URL_SERVIDOR) private urlServidor: string
    , private http: HttpClient) {
  }

  private getUrl(andPoint: string) {
    return `${this.urlServidor}/${andPoint}`;
  }

  post<T>(andPoint: string, t: T): Observable<any> {
    const url = this.getUrl(andPoint);
    return this.http.post(url, t);
  }

  get<T>(andPoint: string): Observable<T[]> {
    const url = this.getUrl(andPoint);
    return this.http.get<T[]>(url);
  }

  getByID<T>(andPoint: string, ID: number): Observable<T> {
    const url = this.getUrl(`${andPoint}/${ID}`);
    return this.http.get<T>(url);
  }
}
