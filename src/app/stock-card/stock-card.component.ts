import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-stock-card',
  templateUrl: './stock-card.component.html',
  styleUrls: ['./stock-card.component.css']
})
export class StockCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() title : string = "Default Title";
  @Input() companyName : string = "<No Company Name>";

  imageUrl = '';
  @Input()
    set imgUrl(imageUrl : string){
      this.imageUrl = imageUrl;
    }

}
