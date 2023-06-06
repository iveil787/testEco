import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TableComponent} from "./pages/table/table.component";

const routes: Routes = [
  {path: 'test/table', component: TableComponent},
  {path: '', pathMatch: 'full', redirectTo: 'test/table'},
  {path: '**', redirectTo: 'test/table'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
