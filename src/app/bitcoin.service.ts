import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface BitCoinRate{
  time: {
    updated: string
  };
  bpi: {
    USD: {
      rate_float: number
    };
    BRL: {
      rate_float: number
    }
  }
}

@Injectable()
export class BitcoinService {

  bitCoinRate: Array<BitCoinRate> = [];


  constructor(private http: HttpClient) { }


  getbitCoinRate(){
    this.http.get<BitCoinRate>("https://api.coindesk.com/v1/bpi/currentprice/BRL.json").subscribe(data => {
      this.bitCoinRate.push(data);
    });
  }


  start() {
    
    this.getbitCoinRate();
    setInterval(() => {

       this.getbitCoinRate();
      },60000);
    }


  }