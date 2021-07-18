import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { JobsComponent } from './jobs/jobs.component';
import { ClientsComponent } from './clients/clients.component';
import { EmployersComponent } from './employers/employers.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ReactiveFormsModule,FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    JobsComponent,
    ClientsComponent,
    EmployersComponent,
    
    
    ContactusComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
