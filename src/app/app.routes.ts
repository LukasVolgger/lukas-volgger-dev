import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LegalNoticeComponent } from './components/legal-notice/legal-notice.component';
import { SuccessComponent } from './components/success/success.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'success', component: SuccessComponent },
    { path: 'legal-notice', component: LegalNoticeComponent },
    { path: '**', component: PageNotFoundComponent }, // 404
];
