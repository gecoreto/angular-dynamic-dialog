import {NgModule} from '@angular/core';
import { ContainerDialogComponent } from './container-dialog.component';
import { GecoDialog } from './GecoDialog';
import { DataConfig } from './data-config';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  imports: [
    BrowserModule
  ],
  exports: [
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
