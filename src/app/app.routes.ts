import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LegalNoticeComponent } from './components/legal-notice/legal-notice.component';
import { PnfComponent } from './components/404/404.component';
import { SuccessComponent } from './components/success/success.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'success', component: SuccessComponent },
    { path: 'legal-notice', component: LegalNoticeComponent },
    { path: '**', component: PnfComponent }, // 404
];
