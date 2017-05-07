//main entry point
import angular, {IModule, IQService} from 'angular';

import {appComponent} from './app.component';
import {ktChuckComponent} from './kt-chuck.component';

const appModule: IModule =
    angular.module('app', [])
        .component('myApp', appComponent)
        .component('ktChuck', ktChuckComponent);

// Use Angular's Q object as Promise. This is needed to make async/await work properly with the UI.
// See http://stackoverflow.com/a/41825004/536
appModule.run([
        "$q",
        ($q: IQService) => window["Promise"] = $q
    ]
);

angular.bootstrap(document, [appModule.name]);