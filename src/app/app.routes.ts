import { Routes } from '@angular/router';
import { MainPage } from './components/main-page/main-page';
import { ProjectPage } from './components/project-page/project-page';

export const routes: Routes = [
    {
        path: '',
        component: MainPage
    },
    {
        path: 'project/:id',
        component: ProjectPage,
    },
    {path: '**', redirectTo: ''},
];
