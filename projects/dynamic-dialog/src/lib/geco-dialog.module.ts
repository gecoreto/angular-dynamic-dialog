import {NgModule} from '@angular/core';
import { ContainerDialogComponent } from './container-dialog.component';
import { GecoDialog } from './GecoDialog';
import { DataConfig } from './data-config';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ContainerDialogComponent
  ],
  declarations: [
    ContainerDialogComponent,
  ],
  providers: [
    GecoDialog
  ],
  entryComponents: [ContainerDialogComponent],
})
export class GecoDialogModule {}
