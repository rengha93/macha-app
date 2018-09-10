import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule , Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { MenComponent } from './men/men.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


const appRoutes:Routes =[
  {path:'',component:HeaderComponent,pathMatch: 'full'},
  {path:'men',component:MenComponent},
  {path:'login',component:LoginComponent},
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
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
