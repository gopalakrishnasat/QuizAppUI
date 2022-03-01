import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationSrvice } from '../services/authenticationservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

loginForm:any = {};

signupError :any
signupResponse: any

  constructor(private service:AuthenticationSrvice,
    private router: Router) { }


  ngOnInit(): void {
  }

  submit(signup:any){
    console.log("form submitted",signup)
    this.service.userRegistration(signup).subscribe((res:any) =>{
      if(res){
        console.log(res);
        this.signupResponse = res;
        setTimeout(()=>{
          this.router.navigate(['/login'])
        },1000)
      }
    },(error)=>{
      this.signupError = error;
    })
  }
}
