import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { RouterModule , Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenComponent } from './men/men.component';
import { LoginComponent } from './Auth/login/login.component';
import { FooterComponent } from './footer/footer.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SignupComponent } from './Auth/signup/signup.component';
import { AuthService } from './Auth/auth.service';
import { AuthGuard } from './Auth/auth-guard.service';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { ProductService } from './shared/product.service';
import { ShirtComponent } from './men/shirt/shirt.component';
import { TrouserComponent } from './men/trouser/trouser.component';
import { ShoeComponent } from './men/shoe/shoe.component';
import { SearchPipe } from './shared/search.pipe';

const appRoutes:Routes =[

    {path:'',component:HeaderComponent,pathMatch: 'full',data:{breadcrumb:'Home'}},
    {path:'men',component:MenComponent,
    children:
    [
      {path:'shirt',component:ShirtComponent,data: {page: 'shirt'}},
      {path:'trouser',component:TrouserComponent},
      {path:'shoe',component:ShoeComponent}
    ],
    data: {page: 'Men'},
    },
    { path: 'shop', loadChildren: './extras/f.module#legalModule'},
    {path:'login',component:LoginComponent},
    {path:'signup',component:SignupComponent},
    {path:'**',component:PagenotfoundComponent}

];


  // {path:'',component:HeaderComponent,
  //   children:[
  //     {path:'',redirectTo:'header',pathMatch:'full'},
  //     {path:'men',component:MenComponent,canActivate:[AuthGuard]}
  //   ],
  // },
  // {path:'login',component:LoginComponent},
  // {path:'signup',component:SignupComponent},
  // {path:'**',component:PagenotfoundComponent}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenComponent,
    LoginComponent,
    FooterComponent,
    PagenotfoundComponent,
    SignupComponent,
    BreadcrumbComponent,
    ShirtComponent,
    TrouserComponent,
    ShoeComponent,
    SearchPipe
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthService,AuthGuard,ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
