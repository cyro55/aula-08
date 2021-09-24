import { Component, VERSION } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BitcoinService } from './bitcoin.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})


export class AppComponent {
  
  constructor(private http: HttpClient, public bitCoinServ: BitcoinService){}

  ngOnInit(){
    this.bitCoinServ.start();
  }
  

}