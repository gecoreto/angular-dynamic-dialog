import {NgModule} from '@angular/core';
import { ContainerDialogComponent } from './src/container-dialog.component';
import { GecoDialog } from './src/GecoDialog';
import { DataConfig } from './src/data-config';
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
