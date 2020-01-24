import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { SolutionComponent } from './solution/solution.component';
import { IndustriesComponent } from './industries/industries.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { WhyusComponent } from './whyus/whyus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { CreditriskmgtComponent } from './creditriskmgt/creditriskmgt.component';
import { DebtcollectionserviceComponent } from './debtcollectionservice/debtcollectionservice.component';
import { BackofficeserviceComponent } from './backofficeservice/backofficeservice.component';
import { AuditsComponent } from './audits/audits.component';
import { InfotechComponent } from './infotech/infotech.component';
import { BankfinanceserviceComponent } from './bankfinanceservice/bankfinanceservice.component';
import { EduserviceComponent } from './eduservice/eduservice.component';
import { CrouselbarComponent } from './crouselbar/crouselbar.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
    {path:'solution', component:SolutionComponent},
    {path:'industries', component:IndustriesComponent},
    {path:'aboutus', component:AboutusComponent},
    {path:'contactus', component:ContactusComponent},
    {path:'audits', component:AuditsComponent},
    {path:'backofficeservice', component:BackofficeserviceComponent},
    {path:'bankfinanceservice', component:BankfinanceserviceComponent},
    {path:'creditriskmgt', component:CreditriskmgtComponent},
    {path:'debtcollectionservice', component:DebtcollectionserviceComponent},
    {path:'eduservice', component:EduserviceComponent},
    {path:'infotech', component:InfotechComponent},
    {path:'footer', component:FooterComponent},
    {path:'navbar', component:NavbarComponent},
    {path:'crouseller', component:CrouselbarComponent},
    {path:'whyus', component:WhyusComponent},
    {path:'admin', component:AdminComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
