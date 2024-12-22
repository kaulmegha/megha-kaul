import {Observable, of} from 'rxjs';
import {Project} from '../../models/project/project';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ossProjects, otherProjects} from './projects.service';

@Injectable()
export class BackendProjectsService {
  constructor(private http: HttpClient) { }

  getOssProjects(): Observable<Project[]> {
    return of(ossProjects);
  }

  getReadme(path: string): Observable<string> {
    return this.http.get(path, {responseType: 'text'});
  }

  getOtherProjects(): Observable<Project[]> {
    return of(otherProjects);
  }
}
