/*
 * grunt-github-features-summary
 * https://github.com/martinmedina/grunt-github-features-summary
 *
 * Copyright (c) 2014 Martin Medina
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Configuration to be run (and then tested).
    github_features_summary: {
      default_options: {
        options: {
        }
      },
      custom_options: {
        options: {
        }
      }
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'github_features_summary']);

};
