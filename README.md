# EasyInside-Draft

Basically, this project is for:
- Map creation: User can make 3D maps. Especially for office, sjop, house, garden and etc.
- Navigation: User can share 3D maps for navigation.
- Robot: User can connect robots with maps via API. User can call robots via Map UI.

You can see current version in https://easyinside.net

## Why draft

This code is very ancient version:
- This version is designed for AWS EC2 environment. (Current version is designed for AWS Lambda.)
- This code is just for showing some structures and logics. Code is not kind and so dirty.
- If possible, I will share next version.

## How to use

This code is for just sharing architecture and logics.

For security reasons, many files and it's content is deleted. So, you cannot excute this code.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## DB

- This version use Atlas(mongoDB cloud version).
- However, you can use local mongoDB for executing in local server.

## Change Environment

dev mode: 
```
NODE_ENV=development node server.js
```

production mode:
```
NODE_ENV=production forever start server.js
```