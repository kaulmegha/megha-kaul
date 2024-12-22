import {Observable, of} from 'rxjs';
import {Project} from '../../models/project/project';
import {ossProjects, otherProjects, ProjectsService} from './projects.service';

export class MockProjectsService implements ProjectsService {
  getOssProjects(): Observable<Project[]> {
    return of(ossProjects);
  }

  getOtherProjects(): Observable<Project[]> {
    return of(otherProjects);
  }

  getReadme(path: string): Observable<string> {
    return of('# Project Heading\n' +
      '\n' +
      'In this service I am using the mock service to see readme file.\n' +
      '\n' +
      '## About the app\n' +
      'Some information about the app' +
      '\n' +
      '### Working of the app:\n' +
      '1. Step 1\n' +
      '2. Step 2\n' +
      '3. Step 3\n'
    );
  }

}
