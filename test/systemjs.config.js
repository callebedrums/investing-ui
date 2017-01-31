/**
 * System configuration for Investing UI App
 * */
(function (global) {

    __karma__.loaded = function(){};

    System.config({

        baseURL: '/base/',

        paths: {
            'npm:': 'node_modules/'
        },

        map: {
            app: 'src',

            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',

            '@ng-bootstrap/ng-bootstrap': 'npm:@ng-bootstrap/ng-bootstrap/bundles/ng-bootstrap.js',

            'rxjs': 'npm:rxjs',

            'plugin-babel': 'npm:systemjs-plugin-babel/plugin-babel.js',
            'systemjs-babel-build': 'npm:systemjs-plugin-babel/systemjs-babel-browser.js'
        },

        transpiler: 'plugin-babel',

        packages: {
            app: {
                main: './main.js',
                defaultExtension: 'js'
            },
            rxjs: {
                defaultExtension: 'js'
            }
        },
        
        defaultJSExtensions: true
    });

    System.import("test/test-test.js").then(function () {
        console.log("loaded file");
        __karma__.start();
    }).catch(function (err) {
        console.log('error loading file', err);
        __karma__.start();
    });
})(this);