const { expand } = require("braces");
const { src } = require("gulp");
const { remove } = require("immutable");
const { options } = require("less");
const { match } = require("micromatch");

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        less:{
            production:{
                options:{
                    compress:true
                },
                files:{
                    './tarefa/dist//styles/main.min.css':'./tarefa/src/styles/main.less'
                }
            }
        },

        uglify:{
            target:{
                files: {
                    'tarefa/dist/scripts/main.min.js': 'tarefa/src/scripts/main.js'
                }
            }
        },


        clean:['aula/prebuild']

});

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('build', ['less:production','uglify']);

};
