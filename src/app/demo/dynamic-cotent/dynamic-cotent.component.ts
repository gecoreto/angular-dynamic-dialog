import { Component, OnInit, Inject } from '@angular/core';
import { GECO_DATA_DIALOG, GecoDialog, GECO_DIALOG_REF } from '../../lib/geco-dialog';
import { GecoDialogRef } from '../../lib/src/GecoDialogRef';

@Component({
  selector: 'app-dynamic-cotent',
  templateUrl: './dynamic-cotent.component.html',
  styleUrls: ['./dynamic-cotent.component.css']
})
export class DynamicCotentComponent implements OnInit {

  constructor(
    @Inject(GECO_DATA_DIALOG) public data: any,
    @Inject(GECO_DIALOG_REF) public dialogRef: GecoDialogRef
  ) { 

  }

  ngOnInit() {
    console.log('Data =>', this.data);
    console.log('dialogRef =>', this.dialogRef);
  }
  
}
