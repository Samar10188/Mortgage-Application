import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {
  counter: number = 10;

  constructor(private router: Router) { 
    setInterval(() =>  {
      this.onGoToLoginPage();
    }
      , 10000);
    setInterval(() =>  {
        this.counter -= 1; 
      }
        , 1000);
   }
  ngOnInit() {
  }

  onGoToLoginPage(){
    this.router.navigate(['/login'])
  }
}
