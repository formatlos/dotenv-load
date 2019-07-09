# dotenv-load [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

Load environment variables from `.env`, `.env.local`, `.env.production`, etc. when running a npm or yarn command. 

This dotenv loading behaviour was extracted from [create-react-app](https://github.com/facebook/create-react-app) to be 
also usable with non `create-react-app` projects like [next.js](https://github.com/zeit/next.js/) or any other `node` 
specific project.

## Usage

### Use in yarn or npm commands

`dotenv-load` can be used in an yarn/npm command: 

```json
{
  "scripts": {
    "dev": "dotenv-load node server.js",
    "build": "NODE_ENV=production dotenv-load node server.js"
  }
}
```

### Use in node script

`dotenv-load` can be used in an yarn/npm command: 

```js
const dotenvLoad = require('dotenv-load');
dotenvLoad();
```

### ignore `.local` files

add `.local` files to `.gitignore`

```txt
.env.local
.env.development.local
.env.production.local
```

## What other .env* files can I use?

`dotenv-load` will load the following files, starting from the bottom. 
The first value set (or those already defined in the environment) take precedence:

- `.env` - The Original®
- `.env.local` - Local overrides. This file is loaded for all environments _except_ `test`.
- `.env.development`, `.env.test`, `.env.production` - Environment-specific settings.
- `.env.development.local`, `.env.test.local`, `.env.production.local` - Local overrides of environment-specific settings.

## How can I use custom env file?

You can pass a string to `dotenvLoad` function, but your file should have a name like `.env.YOUR_CUSTOM_NAME`, for example: `.env.default`.

Then you can initialize it as follows:

```js
dotenvLoad() # will initialize standard names
dotenvLoad('default') # will initialize your `.env.default` (while not overwriting defined vars above)
```
