import {MockContactService} from '../app/services/contact/mock-contact.service';
import {MockProjectsService} from '../app/services/projects/mock-projects.service';

export const environment = {
  production: false,
  ipInfo: MockContactService,
  projects: MockProjectsService,
  build: {version: 'VERSION', commit: 'CI_COMMIT_SHORT_SHA', buildTime: 'BUILD_TIME', buildPipeline: 'CI_PIPELINE_ID'}
};
