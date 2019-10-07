import { AppRoutingModule } from './routes.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {  HttpClientModule  } from '@angular/common/http';

import { AppComponent } from './app.component';
import { Cours } from './cours/cours.component';
import { CoursService } from './cours/cours.service';
import { ResumePipePipe } from './resume-pipe.pipe';
import { PanelComponent } from './panel/panel.component';
import { InputFormatDirective } from './input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { PostsComponent } from './posts/posts.component';
import { GitHubFollowersComponent } from './git-hub-followers/git-hub-followers.component';
import { HomeComponent } from './home-component/home-component.component';
import { PageNotFoundComponent } from './page-not-found-component/page-not-found-component.component';
import { ProfileFollowerComponent } from './profile-follower/profile-follower.component';
import { NavbarComponent } from './navbar/navbar.component';




@NgModule({
  declarations: [
    AppComponent,
    Cours,
    ResumePipePipe,
    PanelComponent,
    InputFormatDirective,
    ContactFormComponent,
    SignupFormComponent,
    PostsComponent,
    GitHubFollowersComponent,
    HomeComponent,
    PageNotFoundComponent,
    ProfileFollowerComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [CoursService],
  bootstrap: [AppComponent]
})
export class AppModule { }
