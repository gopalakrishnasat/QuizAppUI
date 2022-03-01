import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationSrvice {
  url: string;
  public userInfo = new Subject<any>();
  constructor(private http_client:HttpClient) { 
    this.url = environment.api_url;
  }

  userRegistration(payload:any){
  return  this.http_client.post<any>(this.url+'api/createUser',payload);
  }

  userLogin(payload:any){
  return  this.http_client.post(this.url+'api/userLogin',payload)
  }

  getQuestions(){
    return this.http_client.get(this.url+'api/getAllQuestions')
  }
}
