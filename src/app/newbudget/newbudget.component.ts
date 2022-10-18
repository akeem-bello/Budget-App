import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newbudget',
  templateUrl: './newbudget.component.html',
  styleUrls: ['./newbudget.component.css']
})
export class NewbudgetComponent implements OnInit {

  constructor(public router: Router) { }

  public date = '';
  public amount:any = '';
  public budgetArray:any = [];

  ngOnInit(): void {
    if(localStorage['allBudget']){
      this.budgetArray = JSON.parse(localStorage['allBudget'])
    }else{
      this.budgetArray = [];
    }
  }

  createBudget = ()=>{
    let details = {
      date: this.date,
      amount: this.amount
    }
    this.budgetArray.push(details);
    localStorage.setItem('allBudget', JSON.stringify(this.budgetArray));
    this.date = '';
    this.amount = '';
  }

}
