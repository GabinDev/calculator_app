import { Component, Input,Output, EventEmitter } from "@angular/core";
import { HistoryCalculator } from "src/app/utils/types";

@Component({
  selector :'item-history',
  templateUrl : 'item-history.html',
})
export class ItemHistory {
  constructor(){}

  @Input()
  history : HistoryCalculator | null = null;
  
  isHiden = false;

  @Output()
  emitDeleteHistory = new EventEmitter<number>();


  onMouseEnter(){
    this.isHiden = false;
  }

  onMouseLeave(){
    this.isHiden = true;
  }

  onDeleteHistory(id : number){
    this.emitDeleteHistory.emit(id)
  }
  

}