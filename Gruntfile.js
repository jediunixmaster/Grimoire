module.exports = function (grunt) {
  console.log("Running Grunt Tasks");
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
      sass: {
          options: {
              sourceMap: true
          },
          dist: {
              files: {
                  'public/css/style.css': 'sass/style.scss'
              }
          }
      }
  });
  grunt.loadNpmTasks('grunt-sass');
  grunt.registerTask('default', ['sass']);
};
