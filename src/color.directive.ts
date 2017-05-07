import {
    IAttributes, IAugmentedJQuery, IComponentOptions, IDirectiveFactory, IDirectiveLinkFn, IOnInit,
    IScope
} from 'angular';
import {ChuckService, Quote} from './chuckService.service';


export const ktColorDirective: IDirectiveFactory = function () {
    const colorLinkFunction: IDirectiveLinkFn = function (scope: IScope, elem: IAugmentedJQuery, attr: IAttributes) {
        elem.css('color', 'red');
    };
    return {
        restrict: 'A',
        link: colorLinkFunction
    }
};
