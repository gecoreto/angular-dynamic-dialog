# AngularDynamicDialog

Angular-dynamic-dialog is a library for building dynamic dialog, here you can embed a component to render the dialog's content. Customizing to your liking

## Demo

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

## Opening the modal

```TypeScript
    let modal = this.modal.openDialog(DynamicCotentComponent, {
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
    modal.onOpenModal().subscribe(() => {
       alert('open modal');
    });
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
    let modal = this.modal.openDialog(DynamicCotentComponent, {
      //Options: 'bootstrap', 'none'
      useStyles: 'bootstrap' 
    });
```

otherwise, just use the default styles:
```TypeScript
    let modal = this.modal.openDialog(DynamicCotentComponent, {
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