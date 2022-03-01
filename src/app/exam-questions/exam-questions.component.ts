import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { AuthenticationSrvice } from '../services/authenticationservice.service';

@Component({
  selector: 'Trigyn-exam-questions',
  templateUrl: './exam-questions.component.html',
  styleUrls: ['./exam-questions.component.scss']
})
export class ExamQuestionsComponent implements OnInit {
  
public questionList : any =[]
public currentQuestion :number = 0;
public points : number =0;
public isQuizCompleted :Boolean = false
counter = 60;
currectAnswer: number = 0;
wrongAnswer: number = 0;
interval$ : any
progress:string = "0";

  constructor(private service: AuthenticationSrvice,) {

    
    }
    ngOnInit(): void {
      this.getAllQuestions();
      this.startCounter();
    }
getAllQuestions(){
  this.service.getQuestions().subscribe((res:any)=>{
    console.log(res.data)
     this.questionList = res.data
    })
}
  

  nextQuestion(){
    this.currentQuestion++;
    this.resetCounter();
  }
  previousQuestion(){
    this.currentQuestion--;
    this.resetCounter()
  }
  answer(currentQuesNo:number,option:any){
    if(currentQuesNo === this.questionList.length){
        this.isQuizCompleted = true;
        this.stopCounter();

    }
    if(option.isCorrect){
      this.points += 2; 
      this.currectAnswer++;
      setTimeout(()=>{
        this.currentQuestion++;
        this.resetCounter()
        this.getResult()
      },1000)

    } else {
      setTimeout(()=>{
        this.currentQuestion++;
        this.wrongAnswer++;
        this.resetCounter();
        this.getResult()
      },1000)
      this.points -=2;
    }
  }
  startCounter(){
    this.interval$ = interval(1000).subscribe((val)=>{
      this.counter--;
      if(this.counter==0){
        this.currentQuestion++;
        this.counter= 60;
        this.points -= 2;
      }
    })
    setTimeout(()=>{
      this.interval$.unsubscribe()
    },60000);
  }
  stopCounter(){
    this.interval$.unsubscribe();
    this.counter=0;
  }
  resetCounter(){
    this.stopCounter();
    this.counter=60;
    this.startCounter();
  }
  resetQuiz(){
    this.resetCounter();
    this.getAllQuestions();
    this.points = 0;
    this.counter = 60;
    this.currentQuestion = 0;
    this.progress = "0"
  }
  getResult(){
    this.progress = ((this.currentQuestion/this.questionList.length)*100).toString();
    return this.progress;
  }
}
