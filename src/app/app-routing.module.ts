import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddnameComponent } from './components/addname/addname.component';
import { ListageComponent } from './components/listage/listage.component';
import { ListnamesComponent } from './components/listnames/listnames.component';

const routes: Routes = [
  {path: 'addname', component: AddnameComponent},
  {path: '', redirectTo: '/addname', pathMatch: 'full' },
  {path: 'listname', component: ListnamesComponent},
  {path: 'listage', component: ListageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
