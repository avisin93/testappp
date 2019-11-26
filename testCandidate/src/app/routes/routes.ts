import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'candidate-list'
    },
    {
        path: 'candidate-list',
        loadChildren: () => import('./candidate-list/candidate-list.module').then(m => m.CandidateModule)
    }
];
