import {IAttributes, IAugmentedJQuery, IDirectiveFactory, IDirectiveLinkFn, IScope} from 'angular';

interface ColorAttributes extends IAttributes {
    ktColor: string;
}

export const ktColorDirective: IDirectiveFactory = function () {
    const colorLinkFunction: IDirectiveLinkFn = function (scope: IScope, elem: IAugmentedJQuery, attr: ColorAttributes) {
        const ktColor = attr.ktColor;
        elem.css('color', ktColor ? ktColor : 'red');
    };
    return {
        restrict: 'A',
        link: colorLinkFunction
    }
};
