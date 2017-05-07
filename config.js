SystemJS.config({
    packages: {
        "ts": {
            "main": "lib/plugin.js"
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
    paths: {
        'npm:': './node_modules/'
    },
    map: {
        "ts": "npm:plugin-typescript",
        "typescript": "npm:typescript"
    },
    transpiler: 'ts'
});

System.config({
    //use typescript for compilation
    transpiler: 'ts',
    //typescript compiler options
    typescriptOptions: {
        emitDecoratorMetadata: true,
        experimentalDecorators: true
    },
    paths: {
        'npm:': './node_modules/'
    },

    //map tells the System loader where to look for things
    map:{
        'app': './src',
        'angular': 'npm:angular/angular.min.js'
    },
    //packages defines our app package
    packages: {
        app: {
            main: 'main.ts',
            defaultExtension: 'ts'
        }
    }
});
