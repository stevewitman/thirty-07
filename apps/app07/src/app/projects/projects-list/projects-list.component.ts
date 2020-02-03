import { Component, OnInit, Input } from '@angular/core';

import { Project } from '@nx07/core-data';

@Component({
  selector: 'nx07-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {
  @Input() projects: Project[];

  constructor() { }

  ngOnInit() {
  }

}
