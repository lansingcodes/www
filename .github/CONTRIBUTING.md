# Lansing Codes Contributing Guide

Hi! We're really excited that you are interested in contributing to our tech
community tools. Before submitting your contribution, please make sure to read
through these guidelines.

- [Code of Conduct](https://www.lansing.codes/code-of-conduct/)
- [Issue Reporting Guidelines](#issue-reporting-guidelines)
- [Pull Request Guidelines](#pull-request-guidelines)
- [Development Setup](#development-setup)
- [Customizing your environment](#customizing-your-environment)
- [Build scripts](#build-scripts)
- [Deployments](#deployments)

## Issue Reporting Guidelines

- If you would like to report a bug, use the
  [Bug report](https://github.com/lansingcodes/www/issues/new?labels=bug&template=bug_report.md)
  template and fill in all of the details to the best of your abilities.

- If you would like to request a new feature, use the
  [Feature request](https://github.com/lansingcodes/www/issues/new?labels=enhancement&template=feature_request.md)
  template. Provide as many details as possible, including visual mockups of the
  feature, descriptions of new user interactions, and an explanation of the
  benefits of the feature.

## Pull Request Guidelines

- The `main` branch is a snapshot of the latest in-flight release. All
  development should be done in dedicated branches.

- Checkout a development branch from the `main` branch. Similarly submit pull
  requests back to the `main` branch.

- Add your name (and optional email and website) to the `contributors` property
  in `package.json`. We want people to know you're helping out!

- If adding a new feature, first create an issue with the `enhancement` label.
  Provide convincing reason to add this feature, provide mockups, and ask for
  discussion about the feature from other contributors. Wait until at least one
  administrator has greenlighted the feature before working on it.

- If fixing a bug:
  - Add `(fixes #xxxx)` (where #xxxx is the issue id) to your PR title. For
    example, `adjust margins on ultrawide screens (fixes #12)`.
  - Provide a detailed description of the bug in the pull request.

- If your change depends on or is a dependency of changes in another project,
  such as [lansingcodes/api](https://github.com/lansingcodes/api)), please
  make a note of this dependency and reference the pull request id in the
  corresponding project(s).

- Assign one or more reviewers to the pull request. At least one reviewer must
  approve the changes before the PR can be merged.

## Development Setup

If you want to run this website and make changes to it on your computer, some
initial setup is recommended.

This section starts with the basics like git and even the recommended editor.
There may be useful information here even if you're already familiar with
using git, VS Code, and Node. If you want to jump ahead, though, please read how
to [customize your environment](#customizing-your-environment).

You'll run all of the commands provided in this guide in a terminal program
(Terminal, Git Bash, etc.).

### Required software

If you're comfortable with using git, a terminal, node (npm), and VS Code,
here's a quick list of the tools you'll need to run this project:

- [git](https://git-scm.com/downloads)
- [node and npm](https://nodejs.org/), although
  [nvm](https://github.com/nvm-sh/nvm) is recommended for non-Windows users
- [Visual Studio Code](https://code.visualstudio.com/) with these extensions:
  - [Better TOML by bungcip](https://marketplace.visualstudio.com/items?itemName=bungcip.better-toml)
  - [Bracket Pair Colorizer by CoenraadS](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer)
  - [EditorConfig for VS Code by EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
  - [ESLint by Dirk Baeumer](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - [Node.js Extension Pack by Wade Anderson](https://marketplace.visualstudio.com/items?itemName=waderyan.nodejs-extension-pack)
  - [npm by egamma](https://marketplace.visualstudio.com/items?itemName=eg2.vscode-npm-script)
  - [npm Intellisense by Christian Kohler](https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense)
  - [Path Autocomplete by Mihai Vilcu](https://marketplace.visualstudio.com/items?itemName=ionutvmi.path-autocomplete)
  - [Path Intellisense by Christian Kohler](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)
  - [Prettier by Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
  - [SCSS IntelliSense by mrmlnc](https://marketplace.visualstudio.com/items?itemName=mrmlnc.vscode-scss)
  - [Tailwind CSS IntelliSense by Brad Cornes](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
  - [Vetur by Pine Wu](https://marketplace.visualstudio.com/items?itemName=octref.vetur)
  - [VSCode Essentials Snippets by Roberto Achar](https://marketplace.visualstudio.com/items?itemName=robertoachar.vscode-essentials-snippets)
  - [Vue 3 Snippets by hollowtree](https://marketplace.visualstudio.com/items?itemName=hollowtree.vue-snippets)
  - [Vue Peek by Dario Fuzinato](https://marketplace.visualstudio.com/items?itemName=dariofuzinato.vue-peek)
  - [Vue.js Extension Pack by Muhammad Ubaid Raza](https://marketplace.visualstudio.com/items?itemName=mubaidr.vuejs-extension-pack)
  - [VueHelper by oysun](https://marketplace.visualstudio.com/items?itemName=oysun.vuehelper)

### Getting the source code

If you want to start your own community website, click the _Fork_ button in the
top right of the [`lansingcodes/www`](https://github.com/lansingcodes/www) page
on GitHub. This will create your own copy of the code, allow you to get updates
from us, and make it easier to send us helpful improvements that you've made.

To get the code from GitHub, you will need to install
[`git`](https://git-scm.com/downloads) on your computer and then run `git clone`
to download the code from your computer.

If you are making changes to `lansingcodes/www`, the full command will look like
this:

``` sh
git clone https://github.com/lansingcodes/www.git
```

If you forked this repository, the command will be different. Go to the page
where your copy of the code exists on GitHub and then click the _Clone or
download_ button to get the URL of the repository. Then run the following
command, substituting `REPOSITORY_URL` with the URL shown when you clicked the
_Clone or download_ button on your repository:

``` sh
git clone REPOSITORY_URL
```

### Installing NodeJS

This website is built and runs with [NodeJS](https://nodejs.org/). If you are a
Windows user, download and install Node by following the link and select the
_LTS_ download.

If you use macOS or Linux, we recommend using
[`nvm`](https://github.com/nvm-sh/nvm) to install Node. Once `nvm` is installed,
you can installed, you can run the following command to install the correct Node
version:

``` sh
nvm install lts/dubnium
```

And then use that version of Node in your terminal by running:

``` sh
nvm use lts/dubnium
```

### Installing dependencies

Now that NodeJS is installed, we can use it's companion, `npm`, to install all
of the required packages to run this project.

In a terminal, change to this projects directory and run the following command
to install the dependencies:

``` sh
npm install
```

### Editing the code

If you want to look at the code and make changes to it, we highly recommend
using [Visual Studio Code](https://code.visualstudio.com/) (VS Code for short).
Follow the link to download and install the code editor.

After VS Code is installed, run it and click _Extensions_ from the gear icon
menu in the lower left of the editor. This will bring up a panel with a search
box.

Use the search box to find and install all of the extensions listed under the 
required software heading. They make the experience of looking at and editing
this project _super nice_.

### Running and coding

That's it for required software! You should now be able to run `npm run dev` in
a terminal to build and run a server to see the website running from your
computer.

If you're making changes to the code and want to send a pull request to the
`lansingcodes` organization on GitHub, the easiest way is to make all of your
changes in a feature branch.

To create a feature branch, use these commands, replacing `new-branch` with the
name of your feature:

``` sh
git fetch origin
git checkout -b new-branch origin/main
```

After you've made and tested your changes, these commands are helpful for
committing your changes to your branch. Again, substitute `new-branch` with the
name of your branch and `describe your changes` with an actual description of
your changes. If you send us commits with messages that aren't descriptive then
we won't accept them.

``` sh
git add -A
git commit -m 'describe your changes'
git push origin new-branch
```

The output from this command will give you a link to GitHub that will start a
pull request. Complete the form and submit your changes. Someone will get to it
as soon as we can.

If you want to use a different Firebase database on your computer or want to
do more advanced things with your project, you may find the following sections
helpful.

We hope you enjoy working with our code!

## Customizing your environment

This project relies on other services. By default, the development environment
is pointed at read-only production data.

If your work requires more control over the services being used, you can adjust
the following environment variables to do so.

### `FIREBASE_WEB_CONFIG`

This environment variable contains the stringified JSON used to connect to a
specific Firebase environment. To get the value, open the Settings page for the
appropriate Firebase project in a web browser, then click the `</>` icon at the
bottom of the General tab.

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

## Build scripts

`npm` is the tool used to initiate all of the build setup and steps for this
project. All scripts can be found in `package.json`.

To install dependencies, run:

``` sh
npm install
```

To build and run (with hot reload) the site on your computer at
http://localhost:3000, run:

``` sh
npm run dev
```

To build the project for an external web server, run the command below. The
built files can be found in `/dist` and served with any static web server.

``` sh
npm run build
```

To verify your code passes the project's linting rules, run the command below.
This command automatically runs before every `git commit` for the project as
well.

```
npm run lint
```

## Deployments

After a pull request is reviewed and merged to `main`, a Netlify deployment
will automatically build and publish the staging environment at
[lansingcodes-staging.netlify.com](https://lansingcodes-staging.netlify.com).

Once the staging environment has been reviewed, the `main` branch can be
promoted to the `production` branch with the following command:

``` sh
git fetch origin && git push --force origin origin/main:production
```

This will trigger another build and deployment by Netlify. The site will be
published to [www.lansing.codes](https://www.lansing.codes).

For both the staging and production sites, Netlify runs the command
`npm run build` to build the site and deploys the contents of the `/dist`
directory.

Staging is also configured to deploy _all_ branches, so creating a
pull request should create a temporary site where the changes can be previewed
before merging to `main`. Click on the _Details_ link next to the site check
labeled "netlify/lansingcodes-staging/deploy-preview" to see a live preview of
your changes.

The primary Humanity Codes account has administrator access to both Netlify
sites. Additional administrators can be added by invitation only.
