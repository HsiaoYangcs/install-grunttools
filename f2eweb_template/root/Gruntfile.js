'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      '*/\n',
    // 任务配置信息
    clean: {// Grunt任务开始前的清理工作
      files: ['dist']
    },
	less: {// 编译 LESS 文件
	  compile: {
		files: {
			'css/app.css': ['css/app.less']
		}
	  }
	},
    concat: { //文件压缩
      options: {
        stripBanners: true,
                report: 'gzip',
                mangle: true, // Specify mangle: false to prevent changes to your variable and function names.
                banner: '/** \n' +
                        ' * -------------------------------------------------------------\n' +
                        ' * Copyright (c) 2013 Jankerli, All rights reserved. \n' +
                        ' * http://www.jankerli.com/ \n' +
                        ' *  \n' +
                        ' * @version: <%= pkg.version%> \n' +
                        ' * @author: <%= pkg.author%> \n' +
                        ' * @description: <%= pkg.description%> \n' +
                        ' * ------------------------------------------------------------- \n' +
                        ' */ \n\n'
      },
      js_and_css: {
        files: {
          // js文件合并
          'dist/js/libs.js': ['js/lib/*.js'],
          'dist/js/app.js': ['js/app.js','js/tpls.js','js/view.js','js/router.js','js/ajax.js','js/selector.js'],

          // css文件合并
          'dist/css/app.css': ['css/app.css','css/global.css','css/style.css']
        }
      }
    },
    uglify: { //js文件压缩
	  options: {
                report: 'gzip',
                mangle: true, // Specify mangle: false to prevent changes to your variable and function names.
                banner: '/** \n' +
                        ' * -------------------------------------------------------------\n' +
                        ' * Copyright (c) 2013 Jankerli, All rights reserved. \n' +
                        ' * http://www.jankerli.com/ \n' +
                        ' *  \n' +
                        ' * @version: <%= pkg.version%> \n' +
                        ' * @author: <%= pkg.author%> \n' +
                        ' * @description: <%= pkg.description%> \n' +
                        ' * ------------------------------------------------------------- \n' +
                        ' */ \n\n'
      },
      js: {
        files: {
          'dist/js/libs.min.js': ['dist/js/libs.js'],
          'dist/js/app.min.js': ['dist/js/app.js']
        }
      }
    },
    csslint: {//css 语法检查
        lax: {
        	options: {
        		import: false
        	},
        	src: ['css/**/*.css']
        }
    },
    cssmin:{  //CSS文件压缩
      css: {
        files: {
          'dist/css/style.min.css': ['dist/css/app.css']
        }
      }
    },
    qunit: {//单元测试，范例中未启用
      files: ['test/**/*.html']
    },
    jshint: { //文件校验，范例中未启用
      gruntfile: {
        options: {
          jshintrc: '.jshintrc'
        },
        src: 'Gruntfile.js'
      },
      src: {
        options: {
          jshintrc: 'js/.jshintrc'
        },
        src: ['js/**/*.js']
      },
      test: {
        options: {
          jshintrc: 'test/.jshintrc'
        },
        src: ['test/**/*.js']
      }
    },
    watch: {  //watch任务，实时监听文件的变化，并进行编译
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      src: {
        files: '<%= jshint.src.src %>',
        tasks: ['jshint:src', 'qunit']
      },
      test: {
        files: '<%= jshint.test.src %>',
        tasks: ['jshint:test', 'qunit']
      },
	  less:{
	    files:['css/*.less'],
		tasks:['less','csslint']
	  }
    },
  });

  // 加载各种grunt插件完成任务
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  // 默认任务
  //grunt.registerTask('default', ['clean', 'concat', 'uglify', 'cssmin']);
  grunt.registerTask('default', ['clean','less','csslint','concat', 'uglify','cssmin','qunit','jshint']);

};
