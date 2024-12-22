![CI](https://github.com/VivekBhat/website-v2/actions/workflows/main.yml/badge.svg)

* Website: https://bhatvivek.com/
* GH Page: https://vivekbhat.github.io/website-v2/ 

# Personal Portfolio 2

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.2.

### Install
- Install [NodeJS](https://nodejs.org/en/download/).
- Install the Angular CLI: `npm install -g @angular/cli`.
- Run `npm install` to install the packages

## Installation using docker:
- docker run --rm -w /app -v $(pwd):/app alexsuch/angular-cli:10.2.3 npm install
- docker run --rm -w /app -v $(pwd):/app alexsuch/angular-cli:10.2.3 npm run build
- docker run -it --rm -w /app -v $(pwd):/app -p 4200:4200 alexsuch/angular-cli:10.2.3 ng serve --host 0.0.0.0

### Windows
- docker run --rm -w /app -v ${PWD}:/app alexsuch/angular-cli:10.2.3 npm install && npm run build:prod
- docker run --rm -w /app -v ${PWD}:/app alexsuch/angular-cli:10.2.3 npm run build:prod
- docker run -it --rm -w /app -v $(PWD):/app -p 4200:4200 alexsuch/angular-cli:10.2.3 ng serve --host 0.0.0.0

### Test
- Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
- Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
- Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files. 
- Run `ng serve --configuration=production --host=0.0.0.0 --disable-host-check --port=4300` for local prod   


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `docs/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


### NOTES
`base-href` is needed when I am deploying the site to local github project and website 2 otherwise it is not needed for CNAME website
# megha-kaul
