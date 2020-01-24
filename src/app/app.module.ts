import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SolutionComponent } from './solution/solution.component';
import { IndustriesComponent } from './industries/industries.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { WhyusComponent } from './whyus/whyus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ToggleDirective } from './directive/toggle.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreditriskmgtComponent } from './creditriskmgt/creditriskmgt.component';
import { DebtcollectionserviceComponent } from './debtcollectionservice/debtcollectionservice.component';
import { BackofficeserviceComponent } from './backofficeservice/backofficeservice.component';
import { AuditsComponent } from './audits/audits.component';
import { InfotechComponent } from './infotech/infotech.component';
import { BankfinanceserviceComponent } from './bankfinanceservice/bankfinanceservice.component';
import { EduserviceComponent } from './eduservice/eduservice.component';
import { CrouselbarComponent } from './crouselbar/crouselbar.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SolutionComponent,
    IndustriesComponent,
    AboutusComponent,
    WhyusComponent,
    ContactusComponent,
    HomeComponent,
    FooterComponent,
    ToggleDirective,
    CreditriskmgtComponent,
    DebtcollectionserviceComponent,
    BackofficeserviceComponent,
    AuditsComponent,
    InfotechComponent,
    BankfinanceserviceComponent,
    EduserviceComponent,
    CrouselbarComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
