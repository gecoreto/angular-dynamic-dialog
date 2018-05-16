# AngularDynamicDialog

Angular-dynamic-dialog is a library for building dynamic dialog, here you can embed a component to render the dialog's content. Customizing to your liking

## Open modal

```
#!javascript
  let modal = this.modal.openDialog(DynamicCotentComponent, {
      //Inject data
      data: { name: 'david' },
      //Options: 'default', 'bootstrap', 'none'
      useStyles: 'bootstrap' 
    });
    //Event when closing the modal
    modal.onClosedModal().subscribe(() => {
      alert('Closed modal!!!');
    });
    //Event when opening the modal
    modal.onOpenModal().subscribe(() => {
      // alert('open modal');
    });

```

