## About

Keycloak and Spring Boot and Frontend(React or Vue)

## Development

Use port list

- Keycloak: 8081
- Spring Boot: 8080
- React: 3000
- Vue: 8090

### Keycloak

```console
$ docker run -itd -p 127.0.0.1:8081:8080 -e KEYCLOAK_USER=admin -e KEYCLOAK_PASSWORD=[PASSWORD] --name authample_keycloak quay.io/keycloak/keycloak:10.0.1
```

Create realm and user and client, refs https://www.keycloak.org/getting-started/getting-started-docker

- Realm Name: `SampleAuth`
- Client ID: `login-app`
- Valid Redirect URIs
  - `localhost:8080/*`
  - `localhost:3000/*`
  - `localhost:8090/*`

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
