export class Quote {
    public showDetails:boolean;
    constructor( public theQuote: string , public quoteAuthor: string, public quotePublisher: string, public quoteAge:Date){
        this.showDetails=false;
    }

}
