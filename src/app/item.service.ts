import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable()

export class ItemService {

  details = [
    { date: '2022,06,26', detail: '手續費', money: -15 },
    { date: '2022,06,24', detail: '手續費', money: -15 },
    { date: '2022,06,19', detail: '手續費', money: -15 },
    { date: '2022,06,17', detail: '轉帳存', money: 1500 },
    { date: '2022,06,12', detail: '現金提', money: -3000 },
    { date: '2022,06,10', detail: '現金提', money: -5000 },
    { date: '2022,06,10', detail: '手續費', money: -15 },
    { date: '2022,06,09', detail: '現金提', money: -1500 },
    { date: '2022,06,07', detail: '轉帳存', money: 55000 },
    { date: '2022,06,06', detail: '手續費', money: -15 },
    { date: '2022,06,03', detail: '委帶入', money: 20000 },
    { date: '2022,06,01', detail: '申購扣', money: -20000 },
    { date: '2022,05,31', detail: '轉帳存', money: 15000 },
    { date: '2022,05,26', detail: '現金提', money: -3000 },
    { date: '2022,05,17', detail: '現金提', money: -5000 },
    { date: '2022,05,16', detail: '手續費', money: -15 },
    { date: '2022,05,15', detail: '手續費', money: -15 },
    { date: '2022,05,10', detail: '轉帳存', money: 8000 },
    { date: '2022,05,10', detail: '手續費', money: -15 },
    { date: '2022,05,05', detail: '現金提', money: -1000 },
  ]

  constructor() { }

  getAllData(){
    return of(this.details)
  }


}
