# www

> Lansing.Codes home page

## Environment

Before building for the first time, make sure the following environment
variables are set appropriately.

### `FIREBASE_WEB_CONFIG`

This environment variable contains the stringified JSON used to connect to a
specific Firebase environment. To get the value, open the Settings page for the
appropriate Firebase project in a web browser, then click the `</>` icon at the
bottom of the General tab.

If not set, the project will use the configuration for the production database.

Use the following example as a means of generating the JSON string needed for
this environment variable:

``` js
var firebaseConfig = {
  apiKey: "AIzaSyCMw8mZ1D1GAYpeotAqVCaYAMtn3URVOok",
  authDomain: "lansing-codes.firebaseapp.com",
  databaseURL: "https://lansing-codes.firebaseio.com",
  projectId: "lansing-codes",
  storageBucket: "lansing-codes.appspot.com",
  messagingSenderId: "647280182517",
  appId: "1:647280182517:web:779f72d0b90c0dd4"
}

JSON.stringify(firebaseConfig)
```

Copy the output and assign it to the `FIREBASE_WEB_CONFIG` environment variable,
leaving out the surrounding `'` characters.

The parsed JSON can be accessed with `process.env.firebaseWebConfig`.

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

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
directory.

Staging is also configured to deploy _all_ branches, so creating a
pull request should create a temporary site where the changes can be previewed
before merging to `master`. Click on the _Details_ link next to the site check
labeled "netlify/lansingcodes-staging/deploy-preview" to see a live preview of
your changes.

The primary Humanity Codes account has administrator access to both Netlify
sites. Additional administrators can be added by invitation only.
