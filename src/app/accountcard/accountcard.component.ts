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





  constructor(private itemService: ItemService) {
  }


  ngOnInit(): void {
    this.greenfilter(30)

  }

  greenfilter(v:number) {
    const today = new Date();
    this.itemService.getAllData().subscribe(items =>this.itemList = items)
    // console.log(today);
    if (v == 14) {
      const filterDay =new Date(today.setDate(today.getDate() - Number(v)));
      // console.log("filterDay14",filterDay);
      this.itemList = this.itemList.filter(data => {return new Date(data.date) >= filterDay})
    }else  {
      const filterDay30 =new Date(today.setDate(today.getDate() - Number(v)));
      // console.log(this.date30);
      this.itemList = this.itemList.filter(data => {return new Date(data.date) >= filterDay30})
    }

    // 判斷按鈕
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
      // console.log(items);
      this.itemList = items
    }

    )
  }


}
