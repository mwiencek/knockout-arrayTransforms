module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    jasmine: {
      "knockout-arrayTransforms": {
        src: "knockout-arrayTransforms.js",
        options: {
          specs: "specs/specs.js"
        }
      }
    },
    uglify: {
      options: {
        banner: "// <%= pkg.name %> <%= pkg.version %> (<%= pkg.homepage %>)\n" +
                "// Released under the MIT (X11) License; see the LICENSE file in the official code repository.\n",
        mangle: true,
        compress: true,
        preserveComments: false

      },
      build: {
        src: "<%= pkg.name %>.js",
        dest: "<%= pkg.name %>.min.js"
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-jasmine");
  grunt.loadNpmTasks("grunt-contrib-uglify");

  grunt.registerTask("default", ["jasmine", "uglify"]);
};