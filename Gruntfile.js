module.exports = function( grunt ) {

  grunt.initConfig({

    uglify : {
      options : {
        mangle : false
      },

      my_target : {
        files : {
          'js/custom.min.js' : 
          ['js/materialize.min.js', 'js/modernizr.js', 'js/classie.js', 'js/main.js', 'js/velocity.min.js', 'js/stepsForm.js', 'js/custom.js']
        }
      }
    }, // uglify

    sass : {
      dist : {
        options : { style : 'compressed' },
        files : {
          'css/custom.css' : 'css/main.scss'
        }
      }
    }, // sass

    watch : {
      dist : {
        files : [
          'js/**/*',
          '_sass/**/*'
        ],

        tasks : [ 'uglify' ]
      }
    } // watch

  });


  // Plugins do Grunt
  grunt.loadNpmTasks( 'grunt-contrib-uglify' );
  grunt.loadNpmTasks( 'grunt-contrib-sass' );
  grunt.loadNpmTasks( 'grunt-contrib-watch' );


  // Tarefas que serão executadas
  grunt.registerTask( 'default', [ 'uglify', 'sass' ] );

  // Tarefa para Watch
  grunt.registerTask( 'w', [ 'watch' ] );

};