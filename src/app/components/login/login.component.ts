import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:string| undefined;
  pw:string| undefined;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    if (this.user==="root")
      if (this.pw==="root")
        this.router.navigate(['home/bienvenida'])
  }

}
