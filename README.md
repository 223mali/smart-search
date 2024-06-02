<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

Simple Smart Search

## Requirement

Requires a functional mysql database with the appropriate credentials

## Installation

```bash
$ yarn install
```

## Database

Use environment variables to configure the databse.Create a `.env` file enter the database configuration values as per you're set up

```bash
DB_USER=root
DB_HOST=localhost
DB_PASSWORD=Super-Secret Password
DB_NAME=smart-search
DB_PORT=3306
```

## Running the app

```bash
# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

http://localhost:3000/docs

## License

Nest is [MIT licensed](LICENSE).
