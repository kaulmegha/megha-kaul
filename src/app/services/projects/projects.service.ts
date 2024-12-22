import {Observable} from 'rxjs';
import {Project} from '../../models/project/project';
import {InjectionToken} from '@angular/core';

export const ProjectsServiceToken = new InjectionToken<ProjectsService>('ProjectsService');

export interface ProjectsService {

  getOssProjects(): Observable<Project[]>;

  getReadme(path: string): Observable<string>;

  getOtherProjects(): Observable<Project[]>;

}


export const ossProjects = [
  {
    title: 'Expertiza Docker Image',
    technology: 'Docker, Bash scripts, GitHub',
    imgName: 'expertiza_1',
    gitHubLink: 'expertiza',
    readmeLink: '',
  }, {
    title: 'Expertiza Log Visualization',
    technology: 'Elasticache, Logstash, Kibana',
    imgName: 'expertiza_2',
    gitHubLink: 'expertiza',
    readmeLink: '',
  }, {
    title: 'Expertiza Wiki Page',
    technology: 'Documentation and Wikipedia styling',
    imgName: 'expertiza_3',
    gitHubLink: 'expertiza',
    readmeLink: ''
  }
];
export const otherProjects = [
  {
    title: 'Kubernetes Local Deployments',
    imgName: 'other_1',
    technology: 'Kubernetes, Docker, Vagrant',
    gitHubLink: 'kubernetes-deployment',
    readmeLink: 'https://raw.githubusercontent.com/VivekBhat/kubernetes-deployment/master/Readme.md'
  }, {
    title: 'Serverless Thumbnail Generator',
    imgName: 'other_thumbnail_generator',
    technology: 'Serverless, AWS, Vagrant',
    gitHubLink: 'serverless-thumbnail-aws',
    readmeLink: 'https://raw.githubusercontent.com/VivekBhat/serverless-thumbnail-aws/master/Readme.md'
  }, {
    title: 'Serverless REST API Using AWS',
    imgName: 'serverless-nodejs-dynamodb-rest-api',
    technology: 'AWS API Gateway, Lambda, DynamoDB, NodeJS',
    gitHubLink: 'serverless-nodejs-dynamodb-rest-api',
    readmeLink: 'https://raw.githubusercontent.com/VivekBhat/serverless-nodejs-dynamodb-rest-api/master/Readme.md'
  }, {
    title: 'Library Room Booking App',
    imgName: 'LibAppV3',
    technology: 'Ruby On Rails, GitHub, Heroku, Rspec Testing',
    gitHubLink: 'LibAppV3',
    readmeLink: 'https://raw.githubusercontent.com/VivekBhat/LibAppV3/master/README.md'
  }, {
    title: 'Serverless EC2 Start Stop',
    imgName: 'serverless-ec2-start-stop',
    technology: 'AWS API Gateway, Lambda, DynamoDB, NodeJS',
    gitHubLink: 'serverless-ec2-start-stop',
    readmeLink: 'https://raw.githubusercontent.com/VivekBhat/serverless-ec2-start-stop/master/Readme.md'
  }, {
    title: 'Docker Fun',
    imgName: 'Docker-Fun',
    technology: 'Docker, Vagrant, Virtual Machines',
    gitHubLink: 'Docker-Fun',
    readmeLink: 'https://raw.githubusercontent.com/VivekBhat/Docker-Fun/master/Readme.md'
  }, {
    title: 'Mock Twitter',
    imgName: 'MockTwitter',
    technology: 'Knockout JS, Selenium, Java',
    gitHubLink: 'MockTwitter',
    readmeLink: 'https://raw.githubusercontent.com/VivekBhat/MockTwitter/master/Readme.md'
  }
];
