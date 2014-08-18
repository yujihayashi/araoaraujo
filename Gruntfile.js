module.exports = function( grunt ) {

	grunt.initConfig({
    // Tasks que o Grunt deve executar
    less: {
    	development: {
    		options: {
    			paths: ["css"]
    		},
    		files: {
    			"css/site.css": "css/less/site.less"
    		}
    	},
    	production: {
    		options: {
    			paths: ["css"],
    			cleancss: true,
    			modifyVars: {
    				imgPath: '"http://mycdn.com/path/to/images"',
    				bgColor: 'red'
    			}
    		},
    		files: {
    			"css/site.css": "css/less/site.less"
    		}
    	}
    }, // less
    watch : {
    	dist : {
    		files : [
    		'css/less/**/*',
    		'**/*'
    		],

    		options: {
    			livereload: {
    				port: 35729
    			}
    		},
    		tasks : [ 'less' ]
    	}
    } // watch

});
	grunt.loadNpmTasks( 'grunt-contrib-less' );
	grunt.loadNpmTasks( 'grunt-contrib-watch' );


  // Tarefas que serão executadas
  grunt.registerTask( 'default', [ 'less' ] );
  // Tarefa para Watch
  grunt.registerTask( 'w', [ 'watch' ] );
};