'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      app: {
        src: ['server.js']
      }
    },
    react: {
      combiled_file_output: {
        files: {
          'dest/app.js' : [
            'src/jumbotron.js',
            'src/tab.js',
            'src/page.js',
            'src/main.js'
          ]
        }
      }
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      react: {
        files: ['src/*.js'],
        tasks: ['react']
      },
      jshint: {
        files: ['server.js'],
        tasks: ['jshint:app']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-react');

  grunt.registerTask('default', ['watch']);
};
