import { Component, OnInit } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet'



@Component({
  selector: 'bottom-sheet',
  templateUrl: 'bottomsheet-component.html',
})
export class BottomSheetComponent {
  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetComponent>) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}


@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html'
})
export class HeaderComponentComponent implements OnInit {

  constructor(private _bottomSheet : MatBottomSheet) { }

  ngOnInit(): void {
  }

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetComponent);
  }

}
