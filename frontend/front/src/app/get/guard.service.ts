import { Injectable } from '@angular/core';
import { ActivatedRoute,Route,CanActivate, ActivatedRouteSnapshot, Router} from '@angular/router';

@Injectable()
export class GuardService {

  constructor() { }
  canActivate(route: ActivatedRouteSnapshot):boolean{
  let id = +route.url[1].path;
  console.log(id);
  if (id>1){
    alert("invalid id");
   
    return false;
    
  }
  else{
    
    return true;
  }

   }

  }



