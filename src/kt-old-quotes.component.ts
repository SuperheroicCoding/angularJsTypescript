import {IComponentOptions} from 'angular';

export const ktOldQuotesComponent: IComponentOptions = {
    template: `
            <input type="text" ng-model="$ctrl.filter" placeholder="Filter by category or text"/>
            <div class="history"> 
            <div ng-repeat="quote in $ctrl.oldQuotes | filter: $ctrl.filter | orderBy:'-addedOn' track by $index">
              {{quote.addedOn | date: 'dd.MM.yy HH:mm'}}: <kt-chuck quote="quote"></kt-chuck>
            </div>
            </div>
      `,
    bindings: {oldQuotes: '<'}
};
