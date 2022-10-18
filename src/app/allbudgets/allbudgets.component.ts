import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allbudgets',
  templateUrl: './allbudgets.component.html',
  styleUrls: ['./allbudgets.component.css']
})
export class AllbudgetsComponent implements OnInit {

  constructor() { }
  public budgetArray:any = [];

  ngOnInit(): void {
    this.budgetArray = JSON.parse(localStorage['allBudget'])
  }

  deleteBudget = (id:any)=>{
    let filteredArray:any = [];
    this.budgetArray.filter((budget:any, index:any)=>{
      if(index != id){
        filteredArray.push(budget)
      }
    });
    this.budgetArray = filteredArray;
    localStorage.setItem('allBudget', JSON.stringify(this.budgetArray));
  }

}
