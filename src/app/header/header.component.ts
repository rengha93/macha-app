import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loginflg: boolean;
  //loginflg=true;
  constructor(private authService:AuthService) { }

  ngOnInit() {
  }

  onlogout(){
    this.authService.logout();
    this.loginflg = this.authService.isAuthenticated();
    console.log("after loggiing out flag value"+this.loginflg);
  }

}
