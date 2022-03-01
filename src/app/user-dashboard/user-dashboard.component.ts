import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationSrvice } from '../services/authenticationservice.service';

@Component({
  selector: 'Trigyn-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {

 
  constructor(private service: AuthenticationSrvice,private router:Router) {
    
   }
  
  ngOnInit(): void {
  }
  startTest(){
    
      this.router.navigate(['examQuestions'])
  }

}
