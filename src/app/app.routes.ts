import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LegalInformationComponent } from './components/legal-information/legal-information.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'legal-information', component: LegalInformationComponent },
    { path: '**', component: PageNotFoundComponent }, // 404
];
