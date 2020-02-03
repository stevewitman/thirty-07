import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProjectsService } from '@nx07/core-data';

@Component({
  selector: 'nx07-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  _project$;

  public get project$() {
    return this._project$;
  }
  public set project$(value) {
    this._project$ = value;
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projectService: ProjectsService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(param => {
      const id = param['id'];
      this.project$ = this.projectService.getProject(id);
      console.log('PROJ', this.project$)
    })
  }

}
