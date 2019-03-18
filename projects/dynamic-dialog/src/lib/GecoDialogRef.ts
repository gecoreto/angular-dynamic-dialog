import { ApplicationRef, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContainerDialogComponent } from './container-dialog.component';

export class GecoDialogRef {

    constructor(
        private appRef: ApplicationRef,
        private _componentRef: any,
        private _container: ContainerDialogComponent
    ) {
    }

    /**
     * Close the dialog.
     * @param result Optional result to return to the dialog closed.
     */
    closeModal(result?: any): void {
        this._container.closeDialog(result);
    }

    onClosedModal(): Observable<any> {
        const evn = this._container.onClosedModal();
        evn.subscribe(() => {
            this._removeComponentModal();
        });
        return evn;
    }

    onOpenModal(): Observable<any> {
        return this._container.onOpenModal();
    }

    private _removeComponentModal(): void {
        this.appRef.detachView(this._componentRef.hostView);
        this._componentRef.destroy();
    }

}
