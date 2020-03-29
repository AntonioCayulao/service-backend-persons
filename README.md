# Service of persons

Service-backend-persons is a API REST that allows to any user to do CRUD queries about a person.

# Table of contents
1. [Prerequisitos](#prerequisites)
    1. [Framework and language](#frameworklanguage)
    1. [Installing the prerequisites](#installingprerequisites)
    1. [Knowledge](#knowledge)
1. [Installation](#install)
    1. [Run the service locally](#running)
    1. [Manual test](#manualtest)
1. [Contributing to this project and the License](#contributinglicense)

# Prerequisites <a name="prerequisites"></a>

This Service is available via web browser, other services, web or mobile apps, also in Postman calls.

## Framework and language <a name="frameworklanguage"></a>
The programing language is Javascript.

This API REST was make using the framework NodeJS. The principal packages are:
*  Express
*  Sequelize
*  Babel
*  Consign

## Installing the prerequisites <a name="installingprerequisites"></a>
To run locally this repo, follow this instructions:

1.  Every operative system that can install NodeJS (Linux/MAC/Windows).
    *  Install NodeJS.
1.  Install docker with docker-compose to local environment of development.
1.  Install newman package to make local unit test.

## Knowledge <a name="knowledge"></a>
Every developer that know about API REST, Javascript + ES6 and NodeJS.

# Installation <a name="install"></a>

First make a clone from this repo and access to it:

```bash
git clone git@gitlab.com:acayulao/service-backend-persons.git
cd service-backend-persons
```

Install the packages and build the project
```bash
npm install --save
npm run build
```

## Run the service locally <a name="running"></a>

Run the database and the service
```bash
cd dev_local/
docker-compose up -d
cd ../
# wait to the service is up and running
npm run dev
```

If you change something and save, the service will be reload!.

## Manual test <a name="manualtest"></a>

You can do a manual test with tools like Postman. The files are inside the folder `test_with_postman`.

You also can run all the unit test with:
```bash
cd path/to/service/service-backend-persons/test_with_postman
newman run Persons.postman_collection.json -e 'people local.postman_environment.json' \
--reporters cli,html --reporter-html-export report.html
```

# Contributing to this project and the License <a name="contributinglicense"></a>

This project has finish, if you want add code, please make a fork from this repo.

The license is GNU GENERAL PUBLIC LICENSE.