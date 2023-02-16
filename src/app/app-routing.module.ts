import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {HomeComponent} from "./components/home/home.component";
import {NavBarComponent} from "./components/home/nav-bar/nav-bar.component";
import {AngularComponent} from "./components/home/angular/angular.component";
import {ReactComponent} from "./components/home/react/react.component";
import {VueComponent} from "./components/home/vue/vue.component";
import {BienvenidaComponent} from "./components/home/bienvenida/bienvenida.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, children:[
      {path: 'nav', component: NavBarComponent},
      {path: 'angular', component: AngularComponent},
      {path: 'react', component: ReactComponent},
      {path: 'vue', component: VueComponent},
      {path: 'bienvenida', component: BienvenidaComponent}
    ] },
  {path: '', redirectTo:"login", pathMatch:"full"},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
