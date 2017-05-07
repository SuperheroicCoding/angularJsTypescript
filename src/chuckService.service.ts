import {IHttpPromiseCallbackArg, IHttpService, IPromise, IWindowService} from 'angular';

interface QuoteAPIResponse {
    success: string;
    value: Quote;
}

export interface Quote {
    id: number;
    joke: string;
    categories: Array<string>;
    addedOn?: number;
}

const quotesStorageKey = 'ktChuckQuotes';

export class ChuckService {

    // to make DI possible
    static $inject = ['$http', '$window'];

    private lastQuote: Quote;
    private _quotesFetched: Quote[];

    constructor(private $http: IHttpService, private $window: IWindowService) {
        this._quotesFetched = this.loadQuotesFromLocalStorage();
    }


    public fetchQuote(): IPromise<Quote> {

        this.saveLastQuoteToLocalStorage();
        return this.$http.get<QuoteAPIResponse>('https://api.icndb.com/jokes/random')
            .then(response => response.data.value)
            .then((quote: Quote) => {
                quote.addedOn = Date.now();
                this.lastQuote = quote;
                return quote;
            });
    }

    private saveLastQuoteToLocalStorage() {
        if (this.lastQuote) {
            this._quotesFetched = (this.quotesFetched || []).concat(this.lastQuote);
            this.updateLocalStorage(this._quotesFetched);
        }
    }

    public async fetchQuoteAsync(): IPromise<Quote> {
        this.saveLastQuoteToLocalStorage();
        const response: IHttpPromiseCallbackArg<QuoteAPIResponse> =
            await this.$http.get('https://api.icndb.com/jokes/random');
        let lastQuote = response.data.value;
        lastQuote.addedOn = Date.now();
        this.lastQuote = lastQuote;
        return this.lastQuote;
    }

    get quotesFetched(): Array<Quote> {
        return this._quotesFetched;
    }

    private loadQuotesFromLocalStorage(): Array<Quote> {
        let storedQuotes: string = this.$window.localStorage.getItem(quotesStorageKey);
        return storedQuotes ? JSON.parse(storedQuotes) : [];
    }

    private updateLocalStorage(quotesFetched: Array<Quote>) {
        this.$window.localStorage.setItem(quotesStorageKey, JSON.stringify(quotesFetched || []));
    }
}
