import { Component, OnInit } from '@angular/core';
import { QuestionsService } from 'src/app/system/services/questions.service';
@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  pagination: any = {debut:0, ecart:1}
  filtreQ:string=""
  constructor(public questionServe :QuestionsService) { 
    
  }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {

  }
  paginationPlus(){

    this.pagination.debut ++
    console.log(this.pagination);
    
  }
  paginationMoins(){
    this.pagination.debut--
    console.log();
    
  }
 

}