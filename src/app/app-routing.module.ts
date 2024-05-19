import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Import components
import { AppHighLightComponent } from './features/app-highlight/app-highlight.component';
import { UserRegistrationComponent } from './features/user-registration/user-registration.component';

const routes: Routes = [
  {
    path: '', component: AppHighLightComponent, pathMatch: 'full' // default route for appHighlight
  },
  {
    path: 'register-form', component: UserRegistrationComponent // route for userRegistration
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
