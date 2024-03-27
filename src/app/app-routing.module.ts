import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {DataProtectionComponent} from "./data-protection/data-protection.component";
import {ImprintComponent} from "./imprint/imprint.component";
import {EditComponent} from "./edit/edit.component";
import {AddComponent} from "./add/add.component";


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'add',
    component: AddComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'edit/:id',
    component: EditComponent
  },
  {
    path: 'data',
    component: DataProtectionComponent
  },
  {
    path: 'imprint',
    component: ImprintComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
