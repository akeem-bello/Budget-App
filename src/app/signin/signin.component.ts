import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(public router: Router) { }

  public email = '';
  public password = '';
  public message = '';
  public userArray:any = [];

  ngOnInit(): void {
    this.userArray = JSON.parse(localStorage['allUsers2']);
  }

  signIn = ()=>{
    let findUsers = this.userArray.find((user:any)=> user.email == this.email && user.password == this.password);
    if(findUsers){
      localStorage.setItem('currentUser', JSON.stringify(findUsers));
      this.router.navigate(['/dashboard'])
    }else{
      this.message = 'User not found.'
    }
  }

}
