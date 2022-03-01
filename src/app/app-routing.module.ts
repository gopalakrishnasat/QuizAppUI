import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamQuestionsComponent } from './exam-questions/exam-questions.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'userDashboard',component:UserDashboardComponent},
  {path:'examQuestions',component:ExamQuestionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
