import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationSrvice } from '../services/authenticationservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginCredential :any ={}
  isAuthenticated: boolean |undefined;
  token: null | undefined;
  error :any
  
  constructor(private service : AuthenticationSrvice,private router:Router) { }

  submit(login:any){
      console.log("login details submitted",login)
      this.service.userLogin(login).subscribe((res:any) => {
        if(res){
          this.service.userInfo.next(res.data)
          localStorage.setItem('token',res.token);
          this.router.navigate(['/userDashboard'])
          this.token = res.token
          this.isAuthenticated =true
        }
      },(error)=>{
        console.log(error)
        this.error = error;
      })
    }
          
          


          

  ngOnInit(): void {
  }



}
