import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ProjectsService, Project } from '@nx07/core-data';

@Component({
  selector: 'nx07-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects$;
  selectedProject: Project;
  form: FormGroup;

  constructor(
    private projectsService: ProjectsService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.getProjects();
    this.initForm();
  }

  getProjects() {
    this.projects$ = this.projectsService.getProjects();
  }

  selectProject(project: Project) {
    this.selectedProject = project;
    this.form.patchValue(project);
  }

  private initForm() {
    this.form = this.fb.group({
      id: null,
      title: ['', Validators.compose([Validators.required])],
      details: ['', Validators.compose([Validators.required])]
    })
  }

  saveProject(project: Project) {
    if (!project.id) {
      this.createProject(project);
    } else {
      this.updateProject(project);
    }
  }

  createProject(project) {
    this.projectsService.createProject(project)
      .subscribe(result => {
        this.getProjects();
      });
  }

  updateProject(project) {
    this.projectsService.updateProject(project)
      .subscribe(result => {
        this.getProjects();
      });
  }

  cancel () {
    this.resetProject();
  }

  resetProject() {
    const emptyProject: Project = {
      id: null,
      title: '',
      details: '',
      importanceLevel: 0
    }
    this.selectProject(emptyProject);
  }

  deleteProject(project) {
    this.projectsService.deleteProject(project.id)
      .subscribe(result => this.getProjects());
  }

}
