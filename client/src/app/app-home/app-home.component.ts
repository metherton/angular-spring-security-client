import { Component, OnInit } from '@angular/core';
import {AppHomeService} from './app-home.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  providers: [AppHomeService],
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.css']
})
export class AppHomeComponent implements OnInit {

  public greeting;

  constructor(private appHomeService: AppHomeService, private router: Router) { }

  ngOnInit() {
  // this.greeting = this.appHomeService.getToken().then(token => this.appHomeService.getGreeting(token)).then( gr => this.greeting = gr, () =>  this.router.navigate(['/app-login']));
  }

}
