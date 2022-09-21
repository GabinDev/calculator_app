import { Component, OnInit } from '@angular/core';
import { CalculatorSevice } from 'src/app/services/calculator.services';
import { Figure, HistoryCalculator, Unity } from 'src/app/utils/types';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private calculatorService: CalculatorSevice) { }

  histories: Array<HistoryCalculator> = [];

  figures: Figure[] = [];
  unities: Unity[] = [];

  state = {
    loading1: false,
    loading2: false,
    error: false
  };


  fetchData(): void {

    this.state.loading1 = true;
    this.state.loading2 = true;

    this.calculatorService.getFigures().subscribe({
      next: res => {
        this.figures = res;
        this.state.loading1 = false
      },
      error: () => {
        this.state.loading1 = false;
        this.state.error = true
      }
    });

    this.calculatorService.getUnities().subscribe({
      next: res => {
        this.unities = res;
        this.state.loading2 = false;
      },
      error: () => {
        this.state.loading2 = false;
        this.state.error = true
      }
    })

  }

  ngOnInit(): void {
    this.fetchData()
  }

  onHistoryChange(event: HistoryCalculator) {
    this.histories.push(event)
  }

  onRefresh(){
    window.location.reload();
  }

}
