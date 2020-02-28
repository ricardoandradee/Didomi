import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsentsComponent } from './consents/consents.component';
import { GiveConsentComponent } from './give-consent/give-consent.component';

const routes: Routes = [
    { path: '', redirectTo: 'consents', pathMatch: 'full' },
    { path: 'consents', component: ConsentsComponent },
    { path: 'give-consent', component: GiveConsentComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }