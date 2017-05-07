import {IComponentOptions, IOnInit} from 'angular';
import {ChuckService, Quote} from './chuckService.service';


export const appComponent: IComponentOptions = {
    template: `
    <div>
      <h1>Hello Cara KT!!! {{ $ctrl.date | date }}</h1>
      <kt-chuck quote="$ctrl.quote"></kt-chuck>
    </div>
  `,
    controller: class AppComponent implements IOnInit {

        private date: number;
        private quote: Quote = {joke: 'No quote fetched.', category: ['None'], id: -1};

        static $inject = ['ChuckService'];

        private constructor(private chuckService: ChuckService) {
        }

        async $onInit() {
            this.date = Date.now();
            this.fetchQuote();
        }

        private fetchQuote(): void {
            this.chuckService.fetchQuote()
                .then((quote) => this.quote = quote);
        }
    }
};