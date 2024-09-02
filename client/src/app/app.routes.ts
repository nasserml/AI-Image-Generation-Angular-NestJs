import { Routes } from '@angular/router';
import { HomeComponent } from './layout/pages/home/home.component';
import { CreatePostComponent } from './layout/pages/create-post/create-post.component';

export const routes: Routes = [
    {path:'', component: HomeComponent, title:'Home'},
    {path:'create-post', component: CreatePostComponent, title:'Create Post'}
];
