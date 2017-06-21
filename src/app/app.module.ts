import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouteReuseStrategy,RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AuthguardGuard } from './authguard.guard';
import { UserService } from './user.service';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { ServicesgymComponent } from './servicesgym/servicesgym.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ViewServiceComponent } from './view-service/view-service.component';
import { ProfileComponent } from './profile/profile.component';

// import { AlertComponent } from './_directives/index';
// import { AuthGuard } from './_guards/index';

const appRoutes: Routes = [
      {
        path: '', 
        component: MainComponent
      },
      {
        path: 'home',
        // redirectTo: 'viewServices',
        // pathMatch: 'full',
        canActivate: [AuthguardGuard],
        component: HomeComponent
      },
      {
        path: 'profile',
        // redirectTo: 'viewServices',
        // pathMatch: 'full',
        canActivate: [AuthguardGuard],
        component: ProfileComponent
      },
      {
        path: 'about', 
        component: AboutComponent
      },
      {
        path: 'services', 
        component: ServicesgymComponent
      },
      {
        path: 'contact', 
        component: ContactComponent
      },
      {
        path: 'login', 
        component: LoginComponent
      },
      {
        path: 'register', 
        component: RegisterComponent
      },
       {
        path: 'viewService:name', 
        component: ViewServiceComponent
      }
    
     
];

@NgModule({
  declarations: [
     AppComponent,
    //  AlertComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    MainComponent,
    AboutComponent,
    ServicesgymComponent,
    ContactComponent,
    NavbarComponent,
    ViewServiceComponent,
    ProfileComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService, AuthguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
