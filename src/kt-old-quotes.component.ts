import {IComponentOptions} from 'angular';

export const ktOldQuotesComponent: IComponentOptions = {
    template: `<kt-chuck ng-repeat="quote in $ctrl.oldQuotes" quote="quote"></kt-chuck>`,
    bindings: {oldQuotes: '<'}
};
