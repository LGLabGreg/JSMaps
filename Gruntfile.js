
/*!
 * @description Grunt@!!!!!
 */

module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-compress');

	var map = grunt.option('map');

  if(!map) {
    grunt.fail.fatal('Missing "map" argument.');
  }

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		clean: {
      map: ['build/lg-map/' + map +'.js'],
		  js: ['build/**/*.js','!build/lg-map/' + map +'.js'],
      css: ['build/**/*.css'],
      html: ['build/index.html'],
      maps: ['build/maps']
		},
		watch: {
			map: {
		    files: ['src/maps/' + map +'.js'],
		    tasks: ['clean:map', 'copy:map']
		  },
		  js: {
		    files: ['Gruntfile.js','src/lg-map/*.js','!src/maps/' + map +'.js'],
		    tasks: ['clean:js', 'copy:js']
		  },
		  css: {
		    files: 'src/**/*.css',
			  tasks: ['clean:css', 'copy:css']
		  },
		  html: {
		    files: 'src/**/*.html',
			  tasks: ['clean:html', 'copy:html']
		  }
		},
		copy: {
			map: {
        files: [{
          nonull: true,
          cwd: 'src/maps/',
          expand: true,
          src: map +'.js',
          dest: 'build/lg-map/',
          filter: 'isFile',
          flatten: true
        }]
      },
      js: {
        files: [{
          expand: true,
          cwd: 'src',
          src: ['**/*.js', '!maps/' + map +'.js'],
          dest: 'build'
        }]
      },
      css: {
        files: [{
          expand: true,
          cwd: 'src',
          src: ['**/*.css'],
          dest: 'build'
        }]
      },
      html: {
        options: {
          process: function (content) {
            return grunt.template.process(content, {
              data: grunt.util._.extend({
                map: 'lg-map/' + map + '.js'
              }, {})
            });
          }
        },
        files: [{
          expand: true,
          cwd: 'src',
          src: ['index.html'],
          dest: 'build'
          
        }]
      }
    },
    connect: {
      server: {
        options: {
        keepalive: false,
        base: 'build/',
        hostname: 'localhost',
        port: 8000,
        options: {
          index: 'index.html',
          maxAge: 300000
        }
        }
      }
    },
    compress: {
      main: {
        options: {
          archive: 'zip/' + map + '.zip'
        },
        files: [
          {expand: true, cwd: 'docs/', src: ['**'], dest: ''},
          {expand: true, cwd: 'build/', src: ['**'], dest: map + '/'},
        ]
      }
    }
	});

	grunt.registerTask('development', ['clean', 'copy', 'clean:maps', 'connect:server', 'watch']);
	grunt.registerTask('build', ['clean', 'copy', 'clean:maps']);
  grunt.registerTask('zip', ['clean', 'copy', 'clean:maps', 'compress']);

};
