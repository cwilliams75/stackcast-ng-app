import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Router, RouterModule, Routes} from "@angular/router";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { VideosComponent } from './videos/videos.component';
import { UploadComponent } from './upload/upload.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {FormsModule} from "@angular/forms";
import { SignupComponent } from './signup/signup.component';
import {HttpClientModule} from "@angular/common/http";

const appRoutes :Routes = [
  {
    path: 'videos',
    component: VideosComponent
  },
  {
    path: 'upload',
    component: UploadComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signUp',
    component: SignupComponent
  },
  {
    // default path
    path:'',
    component: VideosComponent,
    pathMatch:'full'
  },
  {
    // ** for any routes that dont exist
    path:'**',
    component:NotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    VideosComponent,
    UploadComponent,
    LoginComponent,
    NotFoundComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {enableTracing:true}),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
