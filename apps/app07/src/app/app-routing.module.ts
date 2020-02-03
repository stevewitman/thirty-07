import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProjectsComponent } from './projects/projects.component';
import { ProjectComponent } from './projects/project/project.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from '@nx07/ui-login';


const routes = [
  { path: '', component: ProjectsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects/:id', component: ProjectComponent},
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

