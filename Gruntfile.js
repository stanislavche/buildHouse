module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // concat task
        concat: {
            options: {
                separator: ";\n"
            },
            plugins: {
                src: ["src/js/plugin/*.js"],
                dest: "app/js/plugins.js"
            },
            main: {
                src: ["src/js/definition.js", "src/js/part/*.js", "src/js/main.js"],
                dest: "app/js/main.js"
            }
        },
        jshint: {
            all: ["src/js/definition.js", "src/js/part/*.js", "src/js/main.js"]
        },
        // uglify task
        uglify: {
            main: {
                files: {
                    "app/js/main.min.js": ['app/js/main.js']
                }
            },
            plugins: {
                options: {
                    preserveComments: 'all'
                },
                files: {

                }
            }
        },
        less: {
            live: {
                files: {
                    "app/css/style.css": "src/less/style.less"
                }
            }
        },
        csso: {
            dist: {
                files: {
                    'app/css/style.min.css': ['app/css/style.css']
                }
            }
        },
        // jade task
        jade: {
            live: {
                options: {
                    pretty: false
                },
                files: {
                    "app/index.html": ["src/jade/page/index.jade"]
                }
            },
            build: {
                options: {
                    pretty: false
                },
                files: {
                    "app/index.html": ["src/jade/page/index.jade"],
                }
            }
        },
        // watch task
        watch: {
            options: {
                livereload: true
            },
            less: {
                files: ['src/less/**'],
                tasks: ['customLess'],
                options: {
                    livereload: false
                }
            },
            css: {
                files: ['app/css/style.min.css']
            },
            scripts: {
                files: ['src/js/**', 'src/js/part/**', 'dev/js/plugin-to-min/**'],
                tasks: ['customJS']
            },
            jade: {
                files: ['src/jade/**'],
                tasks: ['customJade']
            }
        }
    });

    // custom tasks
    grunt.registerTask('customJade', '', function() {
        grunt.loadNpmTasks('grunt-contrib-jade');
        grunt.task.run('jade:live');
    });
    grunt.registerTask('customLess', '', function() {
        grunt.loadNpmTasks('grunt-contrib-less');
        grunt.task.run('less:live');
        grunt.loadNpmTasks('grunt-csso');
        grunt.task.run('csso');
    });
    grunt.registerTask('customJS', '', function() {
        grunt.loadNpmTasks('grunt-contrib-uglify');
        grunt.loadNpmTasks('grunt-contrib-copy');
        grunt.loadNpmTasks('grunt-contrib-concat');
        grunt.loadNpmTasks('grunt-contrib-jshint');
        grunt.task.run(['jshint', 'uglify:plugins', 'concat', 'uglify:main']);
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    // Default task
    grunt.registerTask('default', ['watch']);
};