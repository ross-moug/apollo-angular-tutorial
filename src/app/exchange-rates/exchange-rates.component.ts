import { Component, OnInit } from "@angular/core";
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";

interface ExchangeRates {
  rates: any[];
}

@Component({
  templateUrl: "./exchange-rates.component.html",
})
export class ExchangeRatesComponent implements OnInit {
  rates: any[];
  loading = true;
  error: any;

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.apollo
      .watchQuery<ExchangeRates>({
        query: gql`
          {
            rates(currency: "USD") {
              currency
              rate
            }
          }
        `,
      })
      .valueChanges.subscribe(result => {
      this.rates = result.data && result.data.rates;
      this.loading = result.loading;
      this.error = result.errors;
    });
  }
}
