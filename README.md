# Lansing Codes

Static site with events and resources for Lansing coders

## Build Setup

### Build Pre-reqs

This project requires node and npm.

1. [Node.js](https://nodejs.org/en/) Javascript framework
2. [NPM](https://www.npmjs.com/) Dependency management
   1. During the build process, you may need additional system dependencies such as python2 or C build tools. See the [Build Issues](https://github.com/lansingcodes/www#build-issues) section if you run into an error while building `node-sass`.


### Build Process

``` bash
# install dependencies
npm run install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm run test
```

### Build Issues

#### node-sass
One of the development dependencies, node-sass, has an involved build process because it has native components. Node-sass allows Node to compile [SASS style sheets](https://sass-lang.com) into traditional CSS.

If there is not an appropriate set of node-sass/node-gyp binaries for your platform for the configured node-sass/node-gyp version in package.json, the build process will attempt to compile an appropriate version. This doesn't always go well.

Compiling node-sass (specifically to compile a [node-gyp](https://github.com/nodejs/node-gyp) dependency within node-sass) requires having two main tools. More information is available on the [node-gyp build process](https://github.com/nodejs/node-gyp).
* python (Version 2)
* Build tools for C for your platform.

Python version 2 must be available on your build machine as `python2`.

The build tools will depend on you OS. See [node-gyp build process](https://github.com/nodejs/node-gyp) for specifics.

##### Workaround if you can't get node-sass to build.
As a temporary workaround, you can install the latest node-sass locally to get a version for your platform. Then, remove node-sass as a development dependency in the www `package.json` file. This may cause a version mis-match with `sass-loader`.

1. Remove `node-sass` from `package.json` `devDependencies`
   ``` JSON
     "karma-webpack": "^1.7.0",
     "lolex": "^1.4.0",
     "mocha": "^2.4.5",
     "nightwatch": "^0.9.21",
     "node-sass": "^3.7.0",   <---------- remove
     "ora": "^0.2.0",
     "phantomjs-prebuilt": "^2.1.3",
     "prerender-spa-plugin": "^1.2.0",
   ```
2. `npm install --save-prod node-sass`

Then try building the project with `npm install` or `npm run build`.

:exclamation: Remember: Don't commit this package.json workaround to the repo.

## Deployments

After a pull request is reviewed and merged to `master`, a Netlify deployment
will automatically build and publish the staging environment at
[lansingcodes-staging.netlify.com](https://lansingcodes-staging.netlify.com).

Once the staging environment has been reviewed, the `master` branch can be
promoted to the `production` branch with the following command:

``` sh
git fetch origin && git push --force origin origin/master:production
```

This will trigger another build and deployment by Netlify. The site will be
published to [www.lansing.codes](https://www.lansing.codes).

For both the staging and production sites, Netlify runs the command
`npm run build` to build the site and deploys the contents of the `/dist`
directory. Staging is also configured to deploy _all_ branches, so creating a
pull request should create a temporary site where the changes can be previewed
before merging to `master`.

The primary Humanity Codes account has administrator access to both Netlify
sites. Additional administrators can be added by invitation only.

## Want more?

For detailed explanation on how things work, check out the [guide](https://github.com/vuejs-templates/webpack#vue-webpack-boilerplate) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
