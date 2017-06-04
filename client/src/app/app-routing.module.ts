/**
 * Created by martin on 18/05/17.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { AppLoginComponent } from './app-login/app-login.component' ;

const routes: Routes = [
  {path: '', component: AppHomeComponent},
  {path: 'app-login', component: AppLoginComponent},
  {path: 'app-home', component: AppHomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})

export class AppRoutingModule {}


