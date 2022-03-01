import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationSrvice } from '../services/authenticationservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userToken: string | null;
  userInfoSubscription: any;
  userInfo: any;

  constructor(private router:Router, private service:AuthenticationSrvice) {  
    this.userInfoSubscription = this.service.userInfo.subscribe((data: any) => {
      this.userInfo = data;
    })
   this.userToken =  localStorage.getItem('token');
  }

  ngOnInit(): void {
  }
  navigateToSignUp(): void{
    this.router.navigate(['/signup'])
  }
  navigateToLogin():void{
    this.router.navigate(['/login'])
  }
  logout(){
    localStorage.clear();
    this.userInfo= null;
    this.router.navigate(['/login'])
  }
}
