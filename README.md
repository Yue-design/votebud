## How to Start Developing

### set up local mongodb
https://gist.github.com/subfuzion/9630872

### Set up dotenv file at dotenv/development.env

```
JWT_SECRET=abc
MONGO_URI="mongodb://localhost:27017/best-buddhists-sites"
PORT=7000
```

### run commands
```
npm install
npm run start-dev
// test watch
npm run tw 

```

## How to Deploy to Production

### Set up dotenv file at dotenv/production.env
```
JWT_SECRET=abc
MONGO_URI="your mongo URI"
PORT=7000
```

### run commands
```
npm install
npm run start-prod
```
