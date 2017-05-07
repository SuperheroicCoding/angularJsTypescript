import {IComponentOptions} from 'angular';

export const ktChuckComponent : IComponentOptions = {
    template: `<h3>{{$ctrl.quote.joke}}</h3>`,
    bindings: { quote: '<'}
};
