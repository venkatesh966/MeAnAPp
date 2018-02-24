import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private service:MovieService, public route:ActivatedRoute,
    public router:Router) { }

  model=new Movie()
  id = this.route.snapshot.params['id'];

  update()
  {
    this.service.updateMovie(this.id,this.model).subscribe();
    
  }

  ngOnInit() {
    
  }

}
