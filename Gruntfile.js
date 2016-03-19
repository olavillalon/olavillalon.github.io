module.exports = function( grunt ) {

  grunt.initConfig({

    uglify : {
      options : {
        mangle : false
      },

      my_target : {
        files : {
          'js/custom.min.js' : [ 'js/custom.js' ]
        }
      }
    }, // uglify


    watch : {
      dist : {
        files : [
          'js/**/*'
        ],

        tasks : [ 'uglify' ]
      }
    } // watch

  });


  // Plugins do Grunt
  grunt.loadNpmTasks( 'grunt-contrib-uglify' );
  grunt.loadNpmTasks( 'grunt-contrib-watch' );


  // Tarefas que serão executadas
  grunt.registerTask( 'default', [ 'uglify' ] );

  // Tarefa para Watch
  grunt.registerTask( 'w', [ 'watch' ] );

};