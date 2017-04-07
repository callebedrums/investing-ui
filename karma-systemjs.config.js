/**
 * System configuration for Investing UI App
 * */
((global) => {

    __karma__.loaded = () => {};

    System.config({

        baseURL: '/',

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

    let filterTestFiles = (path) => {
        return /\/base\/test\/.*\.spec\.js$/.test(path);
    };

    let importTestFiles = (path) =>{
        return System.import(path);
    };

    let loadTestFiles = () => {
        return Object
            .keys(__karma__.files)
            .filter(filterTestFiles)
            .map(importTestFiles);
    };

    Promise.all(loadTestFiles()).then(() => {
        __karma__.start();
    }, () => {
        __karma__.start();
    });
})(this);