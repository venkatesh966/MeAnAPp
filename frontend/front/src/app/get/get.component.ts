import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';
import { FilterPipe } from './filter.pipe';
import { CustomDirective } from './custom.directive';
import { GuardService } from './guard.service';
//import {FilterPipe} from './'
@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {

  constructor(private service:MovieService) { }

  movie:Movie;
 

  model=new Movie()
  
  display()
  {
    this.service.getMovies().subscribe(movie=>{
      this.movie=movie;
    })
  }

 

  ngOnInit() {
    this.display();
  }

}
