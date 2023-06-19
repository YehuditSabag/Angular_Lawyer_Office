import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { FeedbackComponent } from './Components/feedback/feedback.component';
import { HomeComponent } from './Components/home/home.component';
import { MoredetailComponent } from './Components/moredetail/moredetail.component';
import { MyHelpComponent } from './Components/my-help/my-help.component';
import { NewFeedbackComponent } from './Components/new-feedback/new-feedback.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"contact-us",component:ContactUsComponent,},
  { path: "my-help", component: MyHelpComponent , children:[
  { path: "moredetail/:detail", component: MoredetailComponent }]},
  {path: "feedback", component:FeedbackComponent},
  {path: "new-feedback", component:NewFeedbackComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
