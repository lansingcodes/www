arch-cli
==========

Command line tool for the Arch framework

### Usage

```
arch-cli (s)erve | Start application server
  |  -s --standalone : run using your app's start script instead of arch server
  |  -d --daemonise : run in the background
  |  -p --port {number} : set port to run on
  |  -l --log {string} : set path to log file
  |  -i --pidfile {string} : set path to pidfile

arch-cli init | Create a new project, using ES6 or LiveScript

arch-cli generate | (Not yet implemented) generate routes and components

arch-cli install | (Not yet implemented) install an arch plugin
```
