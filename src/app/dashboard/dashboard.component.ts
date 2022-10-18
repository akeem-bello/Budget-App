import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public router: Router) { }
  public firstName = '';


  ngOnInit(): void {
    let userArray = JSON.parse(localStorage['currentUser']);
    this.firstName = userArray.firstName;
  }

  logOut = ()=>{
    localStorage.removeItem('currentUser');
    this.router.navigate(['/signin']);
  }
  
}
