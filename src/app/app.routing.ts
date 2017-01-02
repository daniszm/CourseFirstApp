import { ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ReExportComponent } from './pages/re-export/re-export.component';

const appRoutes: Routes = [
    {
        path:'',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'ReExport',
        component: ReExportComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
