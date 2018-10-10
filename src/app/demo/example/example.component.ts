import { Component, OnInit } from '@angular/core';
import { GecoDialog } from '../../../../projects/dynamic-dialog/src/public_api';
import { DynamicCotentComponent } from '../dynamic-cotent/dynamic-cotent.component';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {

  constructor(private modal: GecoDialog) { }

  ngOnInit() {
  }

  openModal() {
    let modal = this.modal.openDialog(DynamicCotentComponent, {
      //Inject data
      data: { name: 'david' },
      //Options: 'bootstrap', 'none'
      useStyles: 'bootstrap',
      closeOutSide: false
    });
    //Event when closing the modal
    modal.onClosedModal().subscribe(() => {
      alert('Closed modal!!!');
    });
    //Event when opening the modal
    modal.onOpenModal().subscribe(null, null, () => {
      alert('open modal');
    });

  }

}
