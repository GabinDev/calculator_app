import { Component, Input, OnInit } from '@angular/core';
import { HistoryCalculator } from 'src/app/utils/types';

@Component({
  selector: 'app-history-component',
  templateUrl: './history-component.component.html'
})
export class HistoryComponentComponent implements OnInit {

  constructor() { }

  @Input()
  histories: Array<HistoryCalculator> = [];


  ngOnInit(): void {
  }

  onDeleteHistory(event: number) {
    this.histories = this.histories.filter(({ id }) => id !== event)
  }

  onDeleteAll(){
    this.histories = [];
  }
}
