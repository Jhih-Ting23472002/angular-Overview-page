import { NewItemService } from './../new-item.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  providers: [ItemService]
})
export class CardComponent implements OnInit {

  @Input() data = {date: '',detail: '', money: 0}



  constructor(private itemService: ItemService) {

  }


  ngOnInit(): void {

  }


  // filterData(){
  //   const today = new Date();

  // }

}
