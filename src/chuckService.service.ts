import {IHttpPromiseCallbackArg, IHttpService, IPromise} from 'angular';

interface QuoteAPIResponse {
    success: string;
    value: Quote;
}

export interface Quote {
    id: number;
    joke: string;
    category: Array<string>;
}

export class ChuckService {


    // to make DI possible
    static $inject = ['$http'];

    public quotesFetched: Array<Quote> = [];

    constructor(private $http: IHttpService) {
    }


    public fetchQuote(): IPromise<Quote> {
        return this.$http.get<QuoteAPIResponse>('https://api.icndb.com/jokes/random')
            .then(response => response.data.value)
            .then(quote => {
                this.quotesFetched = this.quotesFetched.concat(quote);
                return quote;
            });
    }

    public async fetchQuoteAsync(): IPromise<Quote> {
        const response: IHttpPromiseCallbackArg<QuoteAPIResponse> =
            await this.$http.get('https://api.icndb.com/jokes/random');
        const quote: Quote = response.data.value;
        this.quotesFetched = this.quotesFetched.concat(quote);
        return quote;
    }

}
