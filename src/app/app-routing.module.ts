import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { MathCalculationsComponent } from './components/math-calculations/math-calculations.component';
import { SubscriptionListComponent } from './components/subscription-list/subscription-list.component';
import { FormationComponent } from './components/formation/formation.component';

const routes: Routes = [
  { path: '', redirectTo: 'math-calculs', pathMatch: 'full' },
  { path: 'math-calculs', component: MathCalculationsComponent },
  { path: 'all-users', component: UserListComponent },
  { path: 'all-subscriptions', component: SubscriptionListComponent },
  { path: 'all-formations', component: FormationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }