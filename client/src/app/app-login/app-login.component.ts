import { Component, OnInit} from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import {AppLoginService} from './app-login.service';
import {CredentialsService} from '../credentials.service';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import { Router,
  NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-login',
  providers: [AppLoginService, Location, {provide: LocationStrategy, useClass: PathLocationStrategy}],
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.css']
})
export class AppLoginComponent implements OnInit {

  private isAuthenticated: boolean;
  private credentials: any;
  private error: boolean;
 // private location: Location;

  constructor(private appLoginService: AppLoginService, private router: Router, private credentialsService: CredentialsService) {
    this.router = router;
  }

  ngOnInit() {
    this.credentials = {};
    this.credentialsService.setPassword(undefined);
    this.credentialsService.setUsername(undefined);
    this.credentialsService.setAuthenticated(false);

 //   this.authenticate(undefined, undefined);
  }

  authenticate(credentials, callback): void {

    this.error = false;
    let myHeaders = new Headers();
    myHeaders.append('X-Requested-With', 'XMLHttpRequest');
    this.credentialsService.setUsername(credentials.username);
    this.credentialsService.setPassword(credentials.password);

    let auth =  'Basic ' + btoa(credentials.username + ':' + credentials.password);
    if (credentials) {
      myHeaders.append('Authorization', auth)
    }
    let options = new RequestOptions({headers: myHeaders});
    this.appLoginService.getUser(options).then((user) => {
      this.credentialsService.setAuthenticated(true);
      callback && callback();
    }, () =>  {
      this.error = true
    });
   
  }

  login(): void {
    let self = this;
    this.authenticate(this.credentials, function() {
      if (self.credentialsService.isAuthenticated) {
        let navigationExtras: NavigationExtras = {
          preserveQueryParams: true,
          preserveFragment: true
        };
        self.router.navigate(['/app-home']);
      }
    });
  }

 // $scope.login = function() {
//   authenticate($scope.credentials, function() {
//     if ($rootScope.authenticated) {
//       $location.path("/");
//       $scope.error = false;
//     } else {
//       $location.path("/login");
//       $scope.error = true;
//     }
//   });
// };



}
