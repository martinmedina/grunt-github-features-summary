/*
 * grunt-github-features-summary
 * https://github.com/martinmedina/grunt-github-features-summary
 *
 * Copyright (c) 2014 Martin Medina
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  var github = require('octonode');
  var fs = require('fs');
  var moment = require('moment');
  var forEach = require('async-foreach').forEach;
  var config = require('./config');

  grunt.registerMultiTask('github_features_summary', 'Creates a file with commit messages for the last release.', function() {
    
    // This task involves asynchronous work
    var done = this.async();

    var client = github.client(config.github.oAuthToken);
    // URL format must be: /owner/repo
    var ghrepo = client.repo(config.github.repoURL); 

    //  If it is the first run of the task use Sha from config, otherwise from appData
    var lastCommitSha = config.lastCommitSha;
    var lastCommitShaFromAppData = fs.readFileSync('./tasks/appData.txt', 'utf8'); 
      
    if (lastCommitShaFromAppData.length > 0) {
      lastCommitSha = lastCommitShaFromAppData;
    }

    ghrepo.commits(function (err, data, headers) {

      var commits = data;
      var lastCommit = data[0];

      var lastCommitMessageFound = true;
      var commitsToIncludeInSummary = data.filter(function (element) {
          if(element.sha === lastCommitSha) {
            lastCommitMessageFound = false;
          }

          return lastCommitMessageFound;
      });

      var featuresSummary = "What's new in this release -- " + moment().format("MMM Do YY") + "\n";
      featuresSummary += "========================================\n";

      forEach(commitsToIncludeInSummary, function(item, index, arr) {
        featuresSummary += "- " + item.commit.message + "\n";
      });

      fs.writeFile("features-summary.txt", featuresSummary, function(err) {
      }); 

      fs.writeFile('./tasks/appData.txt', lastCommit.sha, function(err) {
      });

    }); 
  });

};
