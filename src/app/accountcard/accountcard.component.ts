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
  accountsList: { account: string; money: number; img: string; }[] = []; //帳戶明細
  accountName: string[] = ["臺幣", "外幣", "數位"]
  accountAmount: number[] = [24055, 30055, 14053]
  accountImg:string = "Group 58.png"; //帳戶卡片呈現
  accountInHtml: string = "臺幣"
  amount: number = 24055
  show: boolean = false;//眼睛開關
  noShow: boolean = true; //眼睛開關
  greenclass: boolean = true;
  green: boolean = false;
  amountShow: boolean = true;
  howManyDays: number = 30





  constructor(private itemService: ItemService) {
  }


  ngOnInit(): void {
    this.greenfilter(30)
    this.accountsfilter(event)
  }

  //帳戶切換
  accountshow(event: any, v: number) {
    this.accountInHtml = this.accountName[v]
    this.amount = this.accountAmount[v]
  }

  // 台幣帳戶戶頭
  accountsfilter(event: any) {
    this.itemService.getAllAccounts().subscribe(items => {console.log(items);this.accountsList = items})
    const target = event.target.value
     this.amount  = this.accountsList[target].money
     this.accountImg = this.accountsList[target].img
    console.log(this.amount)
  }

  //塞選資料筆數
  greenfilter(v: number) {
    const today = new Date();
    this.itemService.getAllData().subscribe(items => this.itemList = items)
    // console.log(today);
    if (v == 14) {
      const filterDay = new Date(today.setDate(today.getDate() - Number(v)));
      // console.log("filterDay14",filterDay);
      this.howManyDays = Number(v)
      this.itemList = this.itemList.filter(data => { return new Date(data.date) >= filterDay })
    } else {
      const filterDay30 = new Date(today.setDate(today.getDate() - Number(v)));
      // console.log(this.date30);
      this.howManyDays = Number(v)
      this.itemList = this.itemList.filter(data => { return new Date(data.date) >= filterDay30 })
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
