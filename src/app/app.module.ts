import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { RouterModule , Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './Auth/login/login.component';
import { FooterComponent } from './footer/footer.component';
import { MenComponent } from './men/men.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SignupComponent } from './Auth/signup/signup.component';
import { AuthService } from './Auth/auth.service';
import { AuthGuard } from './Auth/auth-guard.service';


const appRoutes:Routes =[
  {path:'',component:HeaderComponent,pathMatch: 'full'},
  {path:'men',component:MenComponent,canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'**',component:PagenotfoundComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    FooterComponent,
    MenComponent,
    PagenotfoundComponent,
    SignupComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule
  ],
  providers: [AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
