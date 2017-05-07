System.config({
    packages: {
        "plugin-typescript": {
            "main": "plugin.js"
        },
        "typescript": {
            "main": "lib/typescript.js",
            "meta": {
                "lib/typescript.js": {
                    "exports": "ts"
                }
            }
        }
    },
    //use typescript for compilation
    transpiler: 'plugin-typescript',
    //typescript compiler options
    typescriptOptions: {
        emitDecoratorMetadata: true
    },
    paths: {
        'npm:': './node_modules/'
    },

    //map tells the System loader where to look for things
    map:{
        "plugin-typescript": "npm:plugin-typescript/lib/",
        'typescript': 'npm:typescript/lib/typescript.js',
        'app': './src',
        'angular': 'npm:angular/angular.min.js'
    },
    meta: {
        'angular': {
            format: 'global',
            exports: 'angular'
        }
    },
    //packages defines our app package
    packages: {
        app: {
            main: 'main.ts',
            defaultExtension: 'ts',
            "meta": {
                "*.ts": {
                    "loader": "typescript"
                }
            }
        }
    }
});
