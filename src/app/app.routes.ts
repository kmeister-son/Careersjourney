import { Routes } from '@angular/router';
import { BursariesComponent } from './components/Bursaries/bursaries/bursaries.component';
import { LearnershipsComponent } from './components/Learnerships/learnerships/learnerships.component';
import { InternshipsComponent } from './components/Internships/internships/internships.component';
import { LoginComponent } from './components/Login/login/login.component';

export const routes: Routes = [
    {
        path: 'internships',
        component: InternshipsComponent
    },
    {
        path: 'Bursaries',
        component: BursariesComponent
    },
    {
        path: 'Learnerships',
        component: LearnershipsComponent
    },
    {
        path: 'Login',
        component: LoginComponent
    }
];
