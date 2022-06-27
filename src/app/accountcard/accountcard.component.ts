import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accountcard',
  templateUrl: './accountcard.component.html',
  styleUrls: ['./accountcard.component.css']
})
export class AccountcardComponent implements OnInit {

  show: boolean = false;//眼睛開關
  noShow: boolean = true; //眼睛開關
  greenclass: boolean = true;
  green: boolean = false;
  // green2: boolean = false;

  days:string = '14'; //天數
  transform:boolean = false; //按鈕切換css控制

  constructor() { }


  filterData($event: any){
    const days = ($event.currentTarget.childNodes)[1].innerHTML;
    this.days = days;


    if(days === '30'){
      this.transform = true;
    }else {
      this.transform = false;
    }
  }
  greenfilter($event: any){
   if(this. green = false){
    this.greenclass = true;
  }else {
    this.green = true;
  }
}



  ngOnInit(): void {


  }

}
