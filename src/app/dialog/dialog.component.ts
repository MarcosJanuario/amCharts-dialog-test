import { Component, OnInit, Inject } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(
              public dialogRef: MdDialogRef<DialogComponent>,
              @Inject(MD_DIALOG_DATA) public data: any) { }

  close(): void {
    console.log('closing');
    this.dialogRef.close();
  }

  ngOnInit() {
    console.log('Openning the Dialog');
    console.log('--------data from chart component-----');
    console.log(this.data.dataProvider);
    console.log('-----------------------------');
  }

}
