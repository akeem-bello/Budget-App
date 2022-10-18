import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllbudgetsComponent } from './allbudgets/allbudgets.component';
import { BudgetComponent } from './budget/budget.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserGuard } from './guards/user.guard';
import { HomeComponent } from './home/home.component';
import { NewbudgetComponent } from './newbudget/newbudget.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'dashboard', children:[
    {path: '', component: DashboardComponent},
    {path: 'newbudget', component: NewbudgetComponent},
    {path: 'allbudgets', children:[
      {path: '', component: AllbudgetsComponent},
      {path: ':id', component: BudgetComponent}
    ]}
  ], canActivate: [UserGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
