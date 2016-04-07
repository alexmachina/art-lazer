module.exports = function(config){
  config.set({

    basePath : '../',

    files : [
      'client/vendor/angular/angular.js',
      'client/vendor/angular-route/angular-route.js',
      'client/vendor/angular-mocks/angular-mocks.js',
      'client/app/**/*.js',
	  'client/admin/app/**/*.js',
      'test/unit/**/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Firefox'],

    plugins : [
            'karma-firefox-launcher',
            'karma-jasmine'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
