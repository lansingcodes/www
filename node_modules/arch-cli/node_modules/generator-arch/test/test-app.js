'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('arch:app', function () {
  describe('LiveScript scaffolding', function () {
    before(function (done) {
      helpers.run(path.join(__dirname, '../app'))
        .inDir(path.join(os.tmpdir(), './temp-test'))
        .withOptions({ 'skip-install': true })
        .withPrompt({
          someOption: true
        })
        .on('end', done);
    });

    it('creates files', function () {
      assert.file([
        'package.json',
        '.gitignore',
        'app/app.ls',
        'app/components/layout.ls',
        'app/routes/base-route.ls',
        'app/routes/welcome.ls',
        'app/routes/not-found.ls'
      ]);
    });
  });

  describe('es6 scaffolding', function () {
    before(function (done) {
      helpers.run(path.join(__dirname, '../app'))
        .inDir(path.join(os.tmpdir(), './temp-test'))
        .withOptions({ 'skip-install': true })
        .withPrompt({
          language: 'es6'
        })
        .on('end', done);
    });

    it('creates files', function () {
      assert.file([
        'package.json',
        '.gitignore',
        'app/app.js',
        'app/components/layout.js',
        'app/routes/base-route.js',
        'app/routes/welcome.js',
        'app/routes/not-found.js'
      ]);
    });
  });

});
