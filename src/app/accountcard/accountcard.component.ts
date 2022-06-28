import { Component, Input, OnInit } from '@angular/core';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-accountcard',
  templateUrl: './accountcard.component.html',
  styleUrls: ['./accountcard.component.css'],
  providers: [ItemService]
})
export class AccountcardComponent implements OnInit {
  itemList: { date: string; detail: string; money: number; }[] = []; //帳戶明細

  show: boolean = false;//眼睛開關
  noShow: boolean = true; //眼睛開關
  greenclass: boolean = true;
  green: boolean = false;

  date14: string = "14"
  date30: string = "30"



  constructor(private itemService: ItemService) {
  }


  ngOnInit(): void {
    this.getAllData()

  }

  greenfilter($event: any) {
    const today = new Date();
    console.log(today);
    console.log($event.currentTarget);
    // const filterData =



    if (this.green == false) {
      this.green = true;
      this.greenclass = false;
    } else {
      this.green = false;
      this.greenclass = true;
    }
  }

  //拿取所有資料
  getAllData() {
    this.itemService.getAllData().subscribe(items => {
      console.log(items);
      this.itemList = items
    }

    )
  }



}
