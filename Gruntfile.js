
/*!
 * @description Grunt@!!!!!
 */

module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-obfuscator');
  grunt.loadNpmTasks('grunt-contrib-concat');

	var map = grunt.option('map');
  var task = grunt.cli.tasks[0];

  if(!map && task !== 'zipall') {
    grunt.fail.fatal('Missing "map" argument.');
  }
  if(!grunt.file.exists('src/maps/' + map +'.js') && task !== 'zipall') {
    grunt.fail.fatal('The map for ' + map + ' doesn\'t exist.');
  }

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		clean: {
      map: ['build/maps/*.js','!build/maps/' + map +'.js'],
		  js: ['build/**/*.js'],
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
		    files: ['Gruntfile.js','src/jsmaps/*.js','!src/maps/' + map +'.js'],
		    tasks: ['clean:js', 'copy', 'concat', 'uglify']
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
          src: (map || '*') + '.js',
          dest: 'build/maps/',
          filter: 'isFile',
          flatten: true
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
                map: map || ''
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
      },
      images: {
        files: [{
          expand: true,
          cwd: 'src',
          src: ['images/*'],
          dest: 'build'
        }]
      }
    },
    concat: {
      js: {
        files: {
          'build/jsmaps/jsmaps-libs.js': ['src/jsmaps/raphael.js', 'src/jsmaps/scale.raphael.js'],
          'build/jsmaps/jsmaps-panzoom.js': ['src/jsmaps/RequestAnimationFrame.js', 'src/jsmaps/jquery.mousewheel.js', 'src/jsmaps/raphaelAnimateViewBox.js']
        },
      },
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> v<%= pkg.version %>, <%= grunt.template.today("yyyy-mm-dd") %> */\n',
        mangle: true
      },
      build: {
        src: 'src/jsmaps/jsmaps.js',
        dest: 'build/jsmaps/jsmaps.min.js'
      },
      libs: {
        src: 'build/jsmaps/jsmaps-libs.js',
        dest: 'build/jsmaps/jsmaps-libs.js'
      },
      panzoom: {
        src: 'build/jsmaps/jsmaps-panzoom.js',
        dest: 'build/jsmaps/jsmaps-panzoom.js'
      }
    },
    obfuscator: {
      options: {
          banner: '// obfuscated with grunt-contrib-obfuscator.\n',
          debugProtection: true,
          debugProtectionInterval: true
      },
      js: {
          options: {
              // options for each sub task
          },
          files: {
              'build/jsmaps/jsmaps.min.js': ['build/jsmaps/jsmaps.min.js']
          }
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
      },
      all: {
        options: {
          archive: 'zip/jsmaps.zip'
        },
        files: [
          {expand: true, cwd: 'docs/', src: ['**'], dest: ''},
          {expand: true, cwd: 'build/', src: ['**'], dest: 'dist/'},
        ]
      }
    }
	});

	grunt.registerTask('development', ['clean', 'copy', 'clean:map', 'concat', 'uglify', 'connect:server', 'watch']);
	grunt.registerTask('build', ['clean', 'copy', 'clean:map', 'concat', 'uglify']);
  grunt.registerTask('zip', ['clean', 'copy', 'clean:map', 'concat', 'uglify', 'compress']);
  grunt.registerTask('zipall', ['clean', 'copy','copy' 'concat', 'uglify', 'compress:all']);

};
