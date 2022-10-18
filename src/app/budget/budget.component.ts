import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {

  constructor( public actRoute: ActivatedRoute, public router: Router) { }

  public budgetDetails:any = {};
  public name = '';
  public quantity:any = '';
  public price:any = '';
  public itemsArray:any = [];
  public spent:any = '';
  public remaining:any = '';
  public itemAmount:any = '';

  ngOnInit(): void {
    let budgetArray = JSON.parse(localStorage['allBudget']);
    let budgetId = this.actRoute.snapshot.params['id'];
    this.budgetDetails = budgetArray.find((budgetDetails:any, index:number)=> index == budgetId);
    if(!this.budgetDetails){
      this.router.navigate(['/dashboard/newbudget'])
    };

    if(localStorage['allItems']){
      this.itemsArray = JSON.parse(localStorage['allItems'])
    }else{
      this.itemsArray = [];
    }
  }

  addItems = ()=>{
    let items = {
      name: this.name,
      quantity: this.quantity,
      price: this.price,
    };
    this.itemsArray.push(items);
    localStorage.setItem('allItems', JSON.stringify(this.itemsArray));
    this.name = '';
    this.quantity = '';
    this.price = '';
  }

  deleteItem = (id: any)=>{
    let filteredArray:any = [];
    this.itemsArray.filter((item:any, index:any)=>{
      if(index != id){
        filteredArray.push(item);
      }
      this.itemsArray = filteredArray;
      localStorage.setItem('allItems', JSON.stringify(this.itemsArray));
    })
  }

  purchased = (id: any)=>{
    this.itemsArray.find((selected:any, index:any)=>{
      if(index == id){
        this.itemAmount = selected.quantity * selected.price;
        this.spent = this.itemAmount;
        this.remaining = this.budgetDetails.amount - this.spent;
      }
      
    })
  }

}
