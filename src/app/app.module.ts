import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { IndexComponent } from "./components/index/index.component";
import { CurriculumComponent } from "./components/curriculum/curriculum.component";
import { SocialComponent } from "./components/social/social.component";

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    CurriculumComponent,
    SocialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
