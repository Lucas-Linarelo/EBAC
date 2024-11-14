const { expand } = require("braces");
const { src } = require("gulp");
const { remove } = require("immutable");
const { options } = require("less");
const { match } = require("micromatch");

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        less:{
            development:{
                files:{
                    './aula/dev/styles//main.css':'./aula/src/styles/main.less'
                }
            },
            production:{
                options:{
                    compress:true
                },
                files:{
                    './aula/dist//styles/main.min.css':'./aula/src/styles/main.less'
                }
            }
        },

        watch:{
            less:{
                files: ['./aula/src/styles/**/*.less'],
                tasks: ['less:development']
            },
            html:{
                files: ['./aula/src/index.html'],
                tasks: ['replace:dev']
            }
        },

        replace:{
            dev:{
                options:{
                    patterns:[
                        {
                        match: 'addr_css',
                        replacement: './styles/main.css'
                        },
                        {
                            match: 'addr_js',
                            replacement: '../src/scripts/main.js'
                        }
                ]
                },
                files:[
                    {
                        expand: true,
                        flatten: true,
                        src: ['aula/src/index.html'],
                        dest: 'aula/dev/'
                    }
                ]
            },
            dist:{
                options:{
                    patterns:[
                        {
                        match: 'addr_css',
                        replacement: './styles/main.min.css'
                        },
                        {
                            match: 'addr_js',
                            replacement: './scripts/main.min.js'
                        }
                    ]
                },
                files:[
                    {
                        expand: true,
                        flatten: true,
                        src: ['aula/prebuild/index.html'],
                        dest: 'aula/dist/'
                    }
                ]
            }
        },

        htmlmin:{
            dist: {
                options:{
                    removeComments:true,
                    collapseWhitespace: true
                },
                files: {
                    'aula/prebuild/index.html':'aula/src/index.html'
                }
            }
        },

        uglify:{
            target:{
                files: {
                    'aula/dist/scripts/main.min.js': 'aula/src/scripts/main.js'
                }
            }
        },


        clean:['aula/prebuild']

});

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-replace');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['less:production','htmlmin:dist','replace','uglify','clean']);

};
