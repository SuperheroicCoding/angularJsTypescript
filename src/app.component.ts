import {IComponentOptions, IOnInit} from 'angular';
import {ChuckService, Quote} from './chuckService.service';


export const appComponent: IComponentOptions = {
    template: `
    <div>
      <h1>Hello Cara KT!!! {{ $ctrl.date | date }}</h1>
      <kt-chuck class="main-quote" kt-color quote="$ctrl.quote"></kt-chuck>
      <kt-old-quotes old-quotes="$ctrl.oldQuotes"></kt-old-quotes>
    </div>
  `,
    controller: class AppComponent implements IOnInit {
        get oldQuotes(): Array<Quote> {
            return this.chuckService.quotesFetched;
        }

        private date: number;
        private quote: Quote = {joke: 'No quote fetched.', category: ['None'], id: -1};

        static $inject = ['ChuckService'];
        private _oldQuotes: Array<Quote>;

        private constructor(private chuckService: ChuckService) {
        }

        async $onInit() {
            this.date = Date.now();
            this.fetchQuote();
        }

        private async fetchQuote(): void {
            this.quote = await this.chuckService.fetchQuoteAsync()
        }
    }
};
