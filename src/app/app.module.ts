import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { Ng5SliderModule } from 'ng5-slider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BenefitsOfCommunityComponent } from './benefits-of-community/benefits-of-community.component';
import { EmiCalculatorComponent } from './emi-calculator/emi-calculator.component';
import { FeaturedProjectsComponent } from './featured-projects/featured-projects.component';
import { HomeComponent } from './home/home.component';
import { LeadershipTeamComponent } from './leadership-team/leadership-team.component';
import { LoanRegistrationComponent } from './loan-registration/loan-registration.component';
import { NewsComponent } from './news/news.component';
import { ServicesComponent } from './services/services.component';
import { UserLoveUsComponent } from './user-love-us/user-love-us.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    BenefitsOfCommunityComponent,
    EmiCalculatorComponent,
    FeaturedProjectsComponent,
    HomeComponent,
    LeadershipTeamComponent,
    LoanRegistrationComponent,
    NewsComponent,
    ServicesComponent,
    UserLoveUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule,
    Ng5SliderModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
