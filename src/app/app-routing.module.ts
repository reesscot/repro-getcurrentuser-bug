import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from 'src/pages/ui/components/authenticator/sign-in-federated/app.component';

const routes: Routes = [
  {
    path: 'ui/components/authenticator/sign-in-federated',
    component: AppComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
