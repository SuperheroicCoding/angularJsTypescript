//main entry point
import angular, {IModule, IQService} from 'angular';

import {appComponent} from './app.component';
import {ktChuckComponent} from './kt-chuck.component';
import {ChuckService} from './chuckService.service';
import {ktColorDirective} from './color.directive';
import {ktOldQuotesComponent} from './kt-old-quotes.component';

console.log('Test');
const appModule: IModule =
    angular.module('app', [])
        .component('myApp', appComponent)
        .component('ktChuck', ktChuckComponent)
        .component('ktOldQuotes', ktOldQuotesComponent)
        .directive('ktColor', ktColorDirective)
        .service('ChuckService', ChuckService);

// Use Angular's Q object as Promise. This is needed to make async/await work properly with the UI.
// See http://stackoverflow.com/a/41825004/536
appModule.run([
        "$q",
        ($q: IQService) => window["Promise"] = $q
    ]
);

angular.bootstrap(document, [appModule.name], {strictDi: true});
