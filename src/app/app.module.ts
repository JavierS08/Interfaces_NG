import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from "@angular/forms";
import { NavBarComponent } from './components/home/nav-bar/nav-bar.component';
import { AngularComponent } from './components/home/angular/angular.component';
import { ReactComponent } from './components/home/react/react.component';
import { VueComponent } from './components/home/vue/vue.component';
import { BienvenidaComponent } from './components/home/bienvenida/bienvenida.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavBarComponent,
    AngularComponent,
    ReactComponent,
    VueComponent,
    BienvenidaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
