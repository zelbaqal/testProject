import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component.component';
import { GitHubFollowersComponent } from './git-hub-followers/git-hub-followers.component';
import { ProfileFollowerComponent } from './profile-follower/profile-follower.component';
import { PostsComponent } from './posts/posts.component';
import { PageNotFoundComponent } from './page-not-found-component/page-not-found-component.component';

const routes : Routes = [
    {
        path:"home",
        component:HomeComponent
    },
    {
        path:"followers",
        component:GitHubFollowersComponent
    },
    {
        path:"followers/:id/:username",
        component:ProfileFollowerComponent
    },
    {
        path:"posts",
        component:PostsComponent
    },
    {
        path:"**",
        component:PageNotFoundComponent
    }
];

@NgModule({
        imports:[RouterModule.forRoot(routes)],
        exports:[RouterModule]
})

export class AppRoutingModule{}