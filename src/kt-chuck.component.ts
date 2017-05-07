import {IComponentOptions} from 'angular';

export const ktChuckComponent : IComponentOptions = {
    template: `<div>{{$ctrl.quote.joke}}</div>`,
    bindings: { quote: '<'}
};
