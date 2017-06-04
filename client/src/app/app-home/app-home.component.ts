import { Component, OnInit } from '@angular/core';
import {AppHomeService} from './app-home.service';

@Component({
  selector: 'app-home',
  providers: [AppHomeService],
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.css']
})
export class AppHomeComponent implements OnInit {

  public greeting;
  
  constructor(private appHomeService: AppHomeService) { }

  ngOnInit() {
   this.greeting = this.appHomeService.getToken().then(token => this.appHomeService.getGreeting(token)).then( gr => this.greeting = gr);
  }

}
