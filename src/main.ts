//main entry point
import angular, {IModule} from 'angular';

import {appComponent} from './app';

let appModule: IModule =
  angular.module('app', [])
    .component('myApp', appComponent);

angular.bootstrap(document, [ appModule.name ]);