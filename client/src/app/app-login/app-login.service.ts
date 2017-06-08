import { Injectable } from '@angular/core';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {environment} from '../../environments/environment';




@Injectable()
export class AppLoginService {

  constructor(private http: Http) { }

  getUser(headers: any): Promise<any> {
    return this.http.get(`user`, headers).toPromise().then(response => response.json());
  }

}
