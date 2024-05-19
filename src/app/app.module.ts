import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import components
import { AppHighLightComponent } from './features/app-highlight/app-highlight.component';
import { UserRegistrationComponent } from './features/user-registration/user-registration.component';
//import highlight directive & ReactiveFormsModule
import { HighlightDirective } from './shared/custom-directive/onHoverChangeBgColor';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AppHighLightComponent, // Declare the component
    UserRegistrationComponent, // Declare the component
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule // Add ReactiveFormsModule to imports

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
