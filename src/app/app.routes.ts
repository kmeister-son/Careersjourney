import { Routes } from '@angular/router';
import { BursariesComponent } from './components/Bursaries/bursaries/bursaries.component';
import { LearnershipsComponent } from './components/Learnerships/learnerships/learnerships.component';
import { InternshipsComponent } from './components/Internships/internships/internships.component';
import { LoginComponent } from './components/Login/login/login.component';
import { IndexComponent } from './components/Index/index/index.component';
import { NewsComponent } from './components/News/news/news.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { ListPostsComponent } from './components/list-posts/list-posts.component';

export const routes: Routes = [
    {
        path: '',
        component: IndexComponent
    },
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
        path: 'News',
        component: NewsComponent
    },
    {
        path: 'Login',
        component: LoginComponent
    },
    {
        path: 'AddPost',
        component: AddPostComponent
    },
    {
        path: 'ListPost',
        component: ListPostsComponent
    }
];
