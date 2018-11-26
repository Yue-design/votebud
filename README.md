# Best buddhist site

A full stack project made with React and Node for people to upvoting their favorite buddhist sites

Url: https://votebud.stevemu.com/

## How to Start Developing

### Set up dotenv file at dotenv/development.env

```
JWT_SECRET=abc
MONGO_URI="YOUR MONGODB URI"
PORT=7000
NODE_ENV=development
```

### run commands
```
npm i
npm run start-dev
```

## How to Deploy to Production

### Set up dotenv file at dotenv/production.env
```
JWT_SECRET=abc
MONGO_URI="your mongo URI"
PORT=7000
NODE_ENV=production
```

### run commands
```
cd client
npm i
npm run build
cd ..
npm i
npm run start-prod
```
