import {
    Injectable, ApplicationRef
}
    from "@angular/core";
import { ContainerDialogComponent } from "./container-dialog.component";
import { Observable } from 'rxjs';

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
        return this._container.onOpenModal();
    }

    private _removeComponentModal() {
        this.appRef.detachView(this._componentRef.hostView);
        this._componentRef.destroy();
    }



}
