import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { LoanRegistrationComponent } from './loan-registration/loan-registration.component';
import { NewsComponent } from './news/news.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
   {path: '',pathMatch: 'full', redirectTo: 'home'},
   {path: 'home',component: HomeComponent},
   {path: 'about-us',component: AboutUsComponent},
   {path: 'services',component: ServicesComponent},
   {path: 'services#legalInsurance',component: ServicesComponent},
   {path: 'news',component: NewsComponent},
   {path: 'loan-registration',component: LoanRegistrationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
