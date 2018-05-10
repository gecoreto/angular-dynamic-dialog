import {
    Injectable,
    Inject, Component, ApplicationRef
}
    from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { ContainerDialogComponent } from "./container-dialog.component";
import { Observable } from 'rxjs/Observable';

@Injectable()
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
    closeModal(result?) {
        this._container.closeDialog(result);
    };

    onClosedModal(): Observable<any> {
        const evn = this._container.onClosedModal();
        evn.subscribe(() => {
            this._removeComponentModal();
        });
        return evn;
    }

    onOpenModal(): Observable<any> {
        const evn = this._container.onOpenModal();
        evn.subscribe(() => {
            // alert('open modal');
        });
        return evn;
    }

    private _removeComponentModal() {
        this.appRef.detachView(this._componentRef.hostView);
        this._componentRef.destroy();
    }



}
