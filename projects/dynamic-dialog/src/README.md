# AngularDynamicDialog

Angular-dynamic-dialog is a library for building dynamic dialog, here you can embed a component to render the dialog's content. Customizing to your liking

## Demo

https://gecoreto.github.io/angular-dynamic-dialog/

## Install
```bash
$ npm i angular-dynamic-dialog
```

### Import the module
```TypeScript
// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GecoDialogModule } from 'angular-dynamic-dialog/geco-dialog'; // <-- import the module
import { MyDynamicContentComponent } from './myDynamicContent.component';
import { AppComponent } from './app.component';

@NgModule({
    imports: [
              BrowserModule,
              GecoDialogModule // <-- include it in your app module
             ],
    declarations: [MyDynamicCotentComponent],  
    bootstrap: [MyComponent],
    entryComponents: [MyDynamicCotentComponent] // <-- include it for your dynamic content
})
export class MyAppModule {}
```

## Usage

Render the html of your component that will be the content of the modal

## Content html of DynamicCotentExampleComponent
```Html
<div class="modal-header">
  <h5 class="modal-title">Modal title</h5>
  <button type="button" class="close" (click)="dialogRef.closeModal()" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
<div class="modal-body">
  <p>Modal body text goes here.</p>
</div>
<div class="modal-footer">
  <button type="button" class="btn btn-primary">Save changes</button>
  <button type="button" class="btn btn-secondary" (click)="dialogRef.closeModal()">Close</button>
</div>
```

## Opening the modal

```TypeScript
import { GecoDialog } from 'angular-dynamic-dialog/geco-dialog'; // <-- import the dynamic dialog

public constructor(private modal: GecoDialog) {
}

//The first parameter is the component to be rendered in the modal's content
//The second parameter is the modal's configuration
let modal = this.modal.openDialog(DynamicCotentExampleComponent, {
  //Inject data
  data: { name: 'David' },
  //Options: 'bootstrap', 'none'
  useStyles: 'none' 
});
//Event when closing the modal
modal.onClosedModal().subscribe(() => {
  alert('Closed modal!!!');
});
//Event when opening the modal
modal.onOpenModal().finally(() => {
  alert('open modal');
}).subscribe();
```

## Options openDialog()
The parameters are optional
### Available Options
|Parameter   	| Type | Explanation | 
|---	       |---	  |---	|
| data   	    | {}   | set the data for the inject in your dynamic content |
| useStyles | string | set the style for use in the modal. Can either be 'bootstrap' or 'none' |

### Use the styles

If you use Bootstrap 4
```TypeScript
let modal = this.modal.openDialog(DynamicCotentExampleComponent, {
  //Options: 'bootstrap', 'none'
  useStyles: 'bootstrap' 
});
```

otherwise, just use the default styles:
```TypeScript
let modal = this.modal.openDialog(DynamicCotentExampleComponent, {
  //Options: 'bootstrap', 'none'
  useStyles: 'none' 
});
```

### Styling
All the elements have specific css classes, please just look them up using the element inspector.


### Receiving data in your dynamic content
Inject the data into your constructor
```TypeScript
import { 
    GECO_DATA_DIALOG, 
    GecoDialog, 
    GECO_DIALOG_REF, 
    GecoDialogRef } from 'angular-dynamic-dialog/geco-dialog'; // <-- import the components
    
  constructor(
  @Inject(GECO_DATA_DIALOG) public data: any,
  @Inject(GECO_DIALOG_REF) public dialogRef: GecoDialogRef
) { 
  console.log('Data =>', this.data);
  console.log('dialogRef =>', this.dialogRef);
}
```

### Emitting action from the dynamic component
Close dialog from your component
```Html
<button type="button" (click)="dialogRef.closeModal()">Close Modal</button>
```

## Contribute

If you want to help me in the development of this project do not hesitate, you have all the script available to you.

## Suggestions

- [stylegeco@gmail.com](stylegeco@gmail.com)
- [@stylegeco](https://twitter.com/stylegeco)