# AskNdbxUiLibrary

## Dev tutorial


## How to install AskNdbxUiLibrary 

1. ng build && cd dist/ask-ndbx-ui && npm link
2. Go to main repo run : npm link @nguD/askndbxuilibrary
3. ng build --watch

### Add package reference

add 
```
@nguD:registry=https://npm.pkg.github.com
```
in .npmrc at project level directory

### Login to registry 

1. You need a Personal access token from GitHub to be used as password on command line. It can be generated from Settings > Developer settings > Personal access tokens with correct permissions (at least read:packages, write:packages and repo, delete:packages optional).

2. To authenticate by adding your personal access token to your ~/.npmrc file, edit the ~/.npmrc file for your project to include the following line, replacing TOKEN with your personal access token. Create a new ~/.npmrc file if one doesn't exist.

//npm.pkg.github.com/:_authToken=TOKEN

3. Run npm login --registry=https://npm.pkg.github.com and follow the prompt. Use login of github account and the token as password

### Install the package

```
npm install @nguD/askndbxuilibrary --save
```


## Angular library tutorial 

https://angular.io/guide/creating-libraries

## Github host tutorial 

https://medium.com/@windix/host-and-publish-npm-package-on-github-bb419a2acfd3



This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.29.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

