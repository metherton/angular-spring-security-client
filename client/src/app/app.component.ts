import { Component, OnInit } from '@angular/core';
import {CredentialsService} from './credentials.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CredentialsService]
})
export class AppComponent implements OnInit {
  title = 'app works!';

  constructor(private credentialsService: CredentialsService) {
  
  }  
  
  ngOnInit() {

  }


}
