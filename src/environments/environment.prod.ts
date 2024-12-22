import {BackendContactService} from '../app/services/contact/backend-contact.service';
import {BackendProjectsService} from '../app/services/projects/backend-projects.service';

export const environment = {
  production: true,
  ipInfo: BackendContactService,
  projects: BackendProjectsService,
  build: {version: 'VERSION', commit: 'CI_COMMIT_SHORT_SHA', buildTime: 'BUILD_TIME', buildPipeline: 'CI_PIPELINE_ID'}
};
