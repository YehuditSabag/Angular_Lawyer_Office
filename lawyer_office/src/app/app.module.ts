import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './Components/app/app.component';
import { MyHelpComponent } from './Components/my-help/my-help.component';
import { HomeComponent } from './Components/home/home.component';
import { FormsModule } from '@angular/forms';
import {  ContactUsComponent } from './Components/contact-us/contact-us.component';
import { MoredetailComponent } from './Components/moredetail/moredetail.component';
import { FeedbackComponent } from './Components/feedback/feedback.component';
import { NewFeedbackComponent } from './Components/new-feedback/new-feedback.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PipeUserPipe } from './pipe-user.pipe';
import { HighlightDirective } from './highlight.directive';


@NgModule({
  declarations: [
    AppComponent,
    MyHelpComponent,
    HomeComponent,
    
    ContactUsComponent,
         MoredetailComponent,
         FeedbackComponent,
         NewFeedbackComponent,
         PipeUserPipe,
         HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
