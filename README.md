# Notes frontend

### Run locally

1. You should have `npm` and `node` installed. I am using npm v10.8.2 node v20.17.0.
   If you have different versions installed consider using `nvm` or `windows-nvm` for node version management

2. Install dependencies

```bash
npm ci
```

3. Run dev server

```bash
npm run dev
```

4. Open localhost

   [http://localhost:3000](http://localhost:3000)

### Connect with backend and set env variables

1. Run backend repo in docker-compose

2. Set backend url and port in [src/system/initApis.ts](src/system/initApis.ts)

3. Create a new user and copy userId [http://localhost:5003/add_user?login=admin&password=123](http://localhost:5003/add_user?login=admin&password=123)

4. Set userId to DEFAULT_USER_ID in [src/entity/user/model/user.model.ts](src/entity/user/model/user.model.ts)
