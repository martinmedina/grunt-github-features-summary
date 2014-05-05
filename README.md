# grunt-github-features-summary

> Creates a file with commit messages for the last release.

## Getting Started
This plugin requires Grunt `~0.4.4`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-github-features-summary --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-github-features-summary');
```

## The "github_features_summary" task

### Overview
In your project's Gruntfile, add a section named `github_features_summary` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  github_features_summary: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Usage 
#### Connection to Github
oAuth authentication is provided to connect to Github API. In order to use it, repoURL and oAuth token must be set in config.json file. 

#### First run
Application works on master branch of a given repository. The first run of the application requires to have the lastCommitSha set in config.json file. This parameter indicates the commit to be used to start looking for messages. 

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
