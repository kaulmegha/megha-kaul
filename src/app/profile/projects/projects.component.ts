import {Component, Inject, OnInit} from '@angular/core';
import {Project} from '../../models/project/project';
import {ProjectsService, ProjectsServiceToken} from '../../services/projects/projects.service';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  ossProjects$: Observable<Project[]>;
  otherProjects$: Observable<Project[]>;

  constructor(@Inject(ProjectsServiceToken) private projectService: ProjectsService) {}

  ngOnInit() {
    this.ossProjects$ = this.projectService.getOssProjects().pipe();
    this.otherProjects$ = this.projectService.getOtherProjects().pipe();
  }

}
