import {IComponentOptions} from 'angular';

export const ktChuckComponent: IComponentOptions = {
    template: `<div>{{$ctrl.quote.joke}}</div>
                <span kt-color="blue" ng-repeat="category in $ctrl.quote.categories">&nbsp;Category: {{category}}</span>
`,
    bindings: {quote: '<'}
};
