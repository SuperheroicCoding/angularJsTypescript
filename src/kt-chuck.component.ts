import {IComponentOptions} from 'angular';

export const ktChuckComponent : IComponentOptions = {
    template: `<h2>{{$ctrl.quote}}</h2>`,
    bindings: { quote: '<'}
};
