import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes : Quote[] = [
    new Quote( "Don't underestimate the allure of darkness. Even the purest of hearts are drawn to it", 'Niklaus', "Ancient Viking", new Date()),
    new Quote("Don't mistake the stars reflected in a pond at night for those in the sky", "Andrzej Sapkowski", "iPSY Jayt", new Date())
  ];
  toggleDetails(index: number){
    this.quotes[index].showDetails=!this.quotes[index].showDetails;
  };
  removeQuote(isComplete: any, index: number){
    if(isComplete){
      let toDelete=confirm('Are you sure  you want to delete this quote?')
      if (toDelete){
        this.quotes.splice(index,1)

      }
      
    };
  };
  addNewQuote(quote: Quote){
    let quoteLength = this.quotes.length;
    this.quotes.push(quote)
  }
 
  constructor() { }

  ngOnInit(): void {
  }

}
