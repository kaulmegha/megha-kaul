import {ModuleWithProviders, NgModule} from '@angular/core';
import {ProjectsComponent} from './projects.component';
import {OssProjectsComponent} from './oss-projects/oss-projects.component';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ProjectsServiceToken} from '../../services/projects/projects.service';
import {MarkdownModule} from 'ngx-markdown';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    MarkdownModule.forRoot(),
  ],
  declarations: [
    ProjectsComponent,
    OssProjectsComponent
  ],
  exports: [ProjectsComponent]
})
export class ProjectsModule {
  static forRoot(environment): ModuleWithProviders<ProjectsModule> {
    return {
      ngModule: ProjectsModule,
      providers: [
        {provide: ProjectsServiceToken, useClass: environment.projects}
      ]
    };
  }
}
