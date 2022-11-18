import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressListComponent } from './Component/address-list/address-list.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { ViewComponent } from './Component/view/view.component';

const routes: Routes = [
  {path:'Dashboar',component:DashboardComponent},
  {path:'AddressList',component:AddressListComponent},
{path:'View',component:ViewComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
