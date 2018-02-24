import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  HttpModule } from '@angular/http';
import { RouterModule, Routes,RouterLink } from '@angular/router';
import { AppComponent } from './app.component';
import { AddmovieComponent } from './addmovie/addmovie.component';
import { MovieService } from './movie.service';
import { GetComponent } from './get/get.component';
import { FormsModule } from '@angular/forms';
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';
import { FilterPipe } from './get/filter.pipe';
import { CustomDirective } from './get/custom.directive'
import { GuardService } from './get/guard.service';
import { DetailsComponent } from './details/details.component';


import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

const route:Routes=[
  { path:'get',component:GetComponent},
   { path:'add',component:AddmovieComponent},
   { path:'delete',component:DeleteComponent},
   { path:'update/:id', component:UpdateComponent},
   { path:'details/:id',canActivate:[GuardService],component:DetailsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AddmovieComponent,
    GetComponent,
    DeleteComponent,
    UpdateComponent,
    FilterPipe,
    CustomDirective,
    DetailsComponent,

  
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(route),HttpModule,FormsModule,HttpClientModule
  ],
  providers: [MovieService,GuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
