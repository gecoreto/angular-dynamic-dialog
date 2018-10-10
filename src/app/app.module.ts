import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GecoDialogModule } from '../../dist/angular-dynamic-dialog/public_api';
import { DynamicCotentComponent } from './demo/dynamic-cotent/dynamic-cotent.component';
import { ExampleComponent } from './demo/example/example.component';


@NgModule({
  declarations: [
    AppComponent,
    DynamicCotentComponent,
    ExampleComponent
  ],
  imports: [
    BrowserModule,
    GecoDialogModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
  entryComponents: [DynamicCotentComponent]
})
export class AppModule { }
