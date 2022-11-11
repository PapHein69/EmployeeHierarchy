import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeHierarchyComponent } from './components/employee-hierarchy/employee-hierarchy.component';
import { TeamManagerComponent } from './components/team-manager/team-manager.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'teamManager' , component: TeamManagerComponent},
  {path: 'employees' , component: EmployeeHierarchyComponent},
  {path: '' , component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [TeamManagerComponent, EmployeeHierarchyComponent, HomeComponent]
