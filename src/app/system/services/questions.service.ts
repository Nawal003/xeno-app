import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IQuestion } from '../models/iquestion';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  questions: Array<IQuestion> = [];

 

  constructor(private http: HttpClient) {
    this.getQuestions()
  }
  getQuestions() {
    this.http.get<Array<IQuestion>>('assets/datas/questions.json').subscribe(thomas => {
      this.questions = thomas
      console.log(this.questions);

    })


  }
}
