## About

Keycloak and Spring Boot and Frontend(React or Vue)

## Development

Use port list

- Keycloak: 8081
- Spring Boot: 8080
- React: 3000
- Vue: 8090

### Setup

Use docker, running db and keyclaok container

```
$ POSTGRES_PASSWORD=[POSTGRES_PASSWORD] KEYCLOAK_PASSWORD=[KEYCLOAK_PASSWORD] docker-compose up -d
```

schema and seed data

```
$ psql -h 127.0.0.1 -p 9696 -d db_authample -U testtest -W -f create_cards_table.sql
$ psql -h 127.0.0.1 -p 9696 -d db_authample -U testtest -W -f insert_cards_table.sql
```

### Keycloak

Create realm, import [realm-export.json](https://github.com/wasanx25/authample/blob/master/realm-export.json)

<img src="https://user-images.githubusercontent.com/7300913/86508639-a08a4780-be1c-11ea-9996-8d18c0ec0de4.png">

Create user, refs https://www.keycloak.org/getting-started/getting-started-docker#_create_a_user



### Spring Boot

- Java 11

```
$ cd backend
$ ./mvnw spring-boot:run
```

### React

- node v12.14.0

```
$ cd frontend/react-keycloak
$ yarn install
$ yarn start
```

### Vue

- node v12.14.0


```
$ cd frontend/react-keycloak
$ yarn install
$ yarn start
```
