import { isLoweredSymbol } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';
import { IQuestion } from '../models/iquestion';

@Pipe({
  name: 'questions'
})
export class QuestionsPipe implements PipeTransform {

  transform(values: Array<IQuestion>, filtre?: string): any {
    if (!filtre) return values;
    if (!values) return null


    return values.filter(q => q.question.indexOf(filtre)! != -1);
  }

}
