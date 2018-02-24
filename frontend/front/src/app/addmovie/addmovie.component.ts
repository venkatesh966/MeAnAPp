import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.css']
})
export class AddmovieComponent implements OnInit {

  constructor(private service:MovieService) { }

   model=new Movie()//we are passing data as object here as it only parses json data
  
   @Input()
   num:number;
   
  adding()
  {
    this.service.addMovies(this.model).subscribe();
    console.log("in adding")
  }

  ngOnInit() {
  }

}
