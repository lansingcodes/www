# Lansing Codes

Static site with events and resources for Lansing coders

## Build Setup

### Build Pre-reqs

This project requires node and yarn. Yarn is a dependency management and build system similar to [npm](https://www.npmjs.com/).  

1. [Node.js](https://nodejs.org/en/) Javascript framework
1. [Yarn](https://yarnpkg.com/lang/en/docs/install/) Dependency management
   1. During the build process, you may need additional system dependencies such as python2 or C build tools. See the [Build Issues](https://github.com/lansingcodes/www#build-issues) section if you run into a yarn error while building `node-sass`. 


### Build Process

``` bash
# install dependencies
yarn install

# serve with hot reload at localhost:8080
yarn dev

# build for production with minification
yarn build

# run unit tests
yarn unit

# run e2e tests
yarn e2e

# run all tests
yarn test
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
```JSON
    "karma-webpack": "^1.7.0",
    "lolex": "^1.4.0",
    "mocha": "^2.4.5",
    "nightwatch": "^0.9.21",
    "node-sass": "^3.7.0",   <---------- remove
    "ora": "^0.2.0",
    "phantomjs-prebuilt": "^2.1.3",
    "prerender-spa-plugin": "^1.1.0",
```
2. `yarn add node-sass` 

Then try building the www project with `yarn install`

:exclamation: Remember: Don't commit this package.json workaround to the repo. 

## Want more?

For detailed explanation on how things work, check out the [guide](https://github.com/vuejs-templates/webpack#vue-webpack-boilerplate) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
