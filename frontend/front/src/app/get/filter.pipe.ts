import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(array: any, term: any): any {
    if(term===undefined) return array;
    else{
      return array.filter(function(array){
        return array.moviename.toLowerCase().indexOf(term.toLowerCase())>-1;
       //return studentarray.Name.toLowercase().indexof(term.toLowercase())>-1;
      })
    }
  }

}
