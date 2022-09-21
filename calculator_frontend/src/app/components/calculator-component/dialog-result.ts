import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  unityText: string;
  value: number;
}

@Component({
  selector: 'dialog-result',
  templateUrl: 'dialog-result.html',
})
export class DialogResult {
  constructor(
    public dialogRef: MatDialogRef<DialogResult>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  isCopy = false;

  onClose(): void {
    this.dialogRef.close();
  }

  onCopy() {
    navigator.clipboard.writeText(String(this.data.value))
      .then(() => (this.isCopy = true));
  }
}