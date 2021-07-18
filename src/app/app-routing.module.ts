import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{HomeComponent} from './home/home.component';
import{AboutusComponent} from './aboutus/aboutus.component';
import{JobsComponent} from './jobs/jobs.component';
import{ClientsComponent} from './clients/clients.component';
import{EmployersComponent} from './employers/employers.component';
import{ContactusComponent} from './contactus/contactus.component';

const routes: Routes = [

  { path:'',redirectTo:'/home',pathMatch:'full'},
  { path: 'home', component: HomeComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'jobs', component: JobsComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'employers', component: EmployersComponent },
  { path: 'contactus', component: ContactusComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const rountingComponent=[
  HomeComponent,AboutusComponent,JobsComponent,ClientsComponent,EmployersComponent,
  ContactusComponent,
]

