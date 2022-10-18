import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public router: Router, public formBuilder: FormBuilder) { }

  public userForm = this.formBuilder.group({
    firstName: [''],
    lastName: [''],
    email: [''],
    password: [''],
  });

  public usersArray:any = [];

  ngOnInit(): void {
    if(localStorage['allUsers2']){
      this.usersArray = JSON.parse(localStorage['allUsers2']);
    }else{
      this.usersArray = [];
    }
  }

  signUp = ()=>{
    this.usersArray.push(this.userForm.value);
    localStorage.setItem('allUsers2', JSON.stringify(this.usersArray));
    this.router.navigate(['/signin'])
  }

}
