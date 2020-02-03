import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '@nx07/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectDetailComponent } from './projects/project-detail/project-detail.component';
import { ProjectComponent } from './projects/project/project.component';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UiLoginModule } from '@nx07/ui-login';

@NgModule({
  declarations: [AppComponent, ProjectsComponent, ProjectDetailComponent, ProjectComponent, ProjectsListComponent, PageNotFoundComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    UiLoginModule
  ],
  exports: [AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
