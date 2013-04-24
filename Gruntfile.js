module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			files: ['*.js'],
			options: {
				globals: {
					eqeqeq: true
				}
			}
		},
		mochacov: {
			test: {}, // Run with the spec testrunner
			html: {
				options: {
					reporter: 'html-cov'
				}
			},
			coverage: {
				options: {
					coveralls: {
						serviceName: 'travis-ci'
					}
				}
			},
			options: {
				reporter: 'spec',
				ignoreLeaks: false,
				files: 'test/*.js'
			}
		},
		watch: {
			files: ['index.js', 'test/**'],
			tasks: ['jshint', 'test']
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-mocha-cov');
	
	grunt.registerTask('travis', [ 'jshint', 'mochacov:coverage' ]);
	grunt.registerTask('test', [ 'jshint', 'mochacov:test' ]);
	grunt.registerTask('default', [ 'test' ]);
};
