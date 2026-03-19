import { Routes } from '@angular/router';
import { PageLayout } from './layouts/page-layout/page-layout';
import { Index } from './pages/index';

export const routes: Routes = [
    {
        path: '', component: PageLayout, children: [
            { path: '', component: Index }
        ]
    }
];
