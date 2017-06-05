import { Injectable } from '@angular/core';
import {Http, Response, RequestOptions, Headers} from '@angular/http'
import 'rxjs/add/operator/toPromise';
import {environment} from '../../environments/environment';

@Injectable()
export class AppHomeService {

  constructor(private http: Http) { }

  getToken(): Promise<any> {
    let myHeaders = new Headers();
    myHeaders.append('X-Requested-With', 'XMLHttpRequest');
    let options = new RequestOptions({headers: myHeaders});
    return this.http.get(environment.apiUrl + `token`, options).toPromise().then(response => response.json());
  }

  getGreeting(token: any): Promise<any> {
    let myHeaders = new Headers();
    myHeaders.append('X-Auth-Token', token.token);
    myHeaders.append('X-Requested-With', 'XMLHttpRequest');
    let options = new RequestOptions({headers: myHeaders});
   // return this.http.get(`http://localhost:9000`, options).toPromise().then(response => response.json());
    return this.http.get(environment.resourceUrl, options).toPromise().then(response => response.json());
  }

//   let myHeaders = new Headers();
//   myHeaders.append('Content-Type', 'application/json');
//   let myParams = new URLSearchParams();
//   myParams.append('id', bookId);
//   let options = new RequestOptions({ headers: myHeaders, params: myParams });
//   return this.http.get(this.url, options)
// .map(this.extractData)
// .catch(this.handleError);
//
//
//   $http({
//     url : 'http://localhost:9000',
//     method : 'GET',
//     headers : {
//       'X-Auth-Token' : token.token
// }
// })


}
