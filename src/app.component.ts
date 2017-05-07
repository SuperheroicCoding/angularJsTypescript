import {IComponentOptions, IHttpService, IOnInit} from 'angular';

interface QuoteAPIResponse{
    success: string;
    value: Quote;
}

export interface Quote {
    id: number;
    joke: string;
    category: Array<string>;
}

export const appComponent: IComponentOptions = {
    template: `
    <div>
      <h2>Hello Cara KT!!! {{ $ctrl.date | date }}</h2>
      <kt-chuck quote="$ctrl.quote.joke"></kt-chuck>
    </div>
  `,
    controller: ['$http', class AppComponent implements IOnInit {

        private date: number;
        private quote: Quote;

        private constructor(private $http: IHttpService) {
        }

        $onInit() {
            this.date = Date.now();
            this.fetchQuote();
        }

        private fetchQuote(): void {
            this.$http.get<QuoteAPIResponse>('https://api.icndb.com/jokes/random')
                .then(response => response.data.value)
                .then(quote => this.quote = quote);
        }

        /*private async fetchQuote(): void {
            const response = await this.$http.get('https://api.icndb.com/jokes/random');
            this.quote = response.data.value;
        }*/
    }]
};