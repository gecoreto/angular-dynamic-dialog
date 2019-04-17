import {
    Injectable, ComponentFactoryResolver,
    Injector, ApplicationRef, EmbeddedViewRef, InjectionToken
} from '@angular/core';
import { ContainerDialogComponent } from './container-dialog.component';
import { GecoDialogRef } from './GecoDialogRef';
import { DataConfig } from './data-config';

/** Injection token that can be used to access the data that was passed in to a dialog. */
export const GECO_DATA_DIALOG = new InjectionToken<any>('GecoDataDialog');
export const GECO_DIALOG_REF = new InjectionToken<any>('GecoDialogRef');

@Injectable()
export class GecoDialog {

    private _componentRef: any;
    private _container: ContainerDialogComponent;
    private _dialogRef: GecoDialogRef;

    constructor(
        private r: ComponentFactoryResolver,
        private appRef: ApplicationRef,
        private injector: Injector
    ) {
    }

    openDialog(compRef: any, config: DataConfig = { data: {}, useStyles: 'default' }): GecoDialogRef {
        this._componentRef = this.appendComponentToBody(ContainerDialogComponent);
        this._container = this._componentRef['_component'];
        this._dialogRef = new GecoDialogRef(this.appRef, this._componentRef, this._container);
        const injector = this._createInjector(config);
        this._container.addDynamicContent(compRef, config, injector);
        this._container.onClosedModal().subscribe(() => this.removeComponentModal());

        return this._dialogRef;
    }

    private appendComponentToBody(component: any): any {
        // 1. Create a component reference from the component 
        const componentRef = this.r
            .resolveComponentFactory(component)
            .create(this.injector);
        componentRef.changeDetectorRef.detectChanges();

        // 2. Attach component to the appRef so that it's inside the ng component tree
        this.appRef.attachView(componentRef.hostView);

        // 3. Get DOM element from component
        const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
            .rootNodes[0] as HTMLElement;

        // 4. Append DOM element to the body
        document.body.appendChild(domElem);

        // 5. Wait some time and remove it from the component tree and from the DOM
        // setTimeout(() => {
        //     this.appRef.detachView(componentRef.hostView);
        //     componentRef.destroy();
        // }, 3000);
        return componentRef;
    }

    private removeComponentModal(): any {
        this.appRef.detachView(this._componentRef.hostView);
        this._componentRef.destroy();
    }

    private _createInjector(config: any): Injector {

        const injectionTokens = new WeakMap();

        // added to the injection tokens.
        injectionTokens
            .set(GECO_DIALOG_REF, this._dialogRef);
        if (config.hasOwnProperty('data')) {
            injectionTokens.set(GECO_DATA_DIALOG, config.data);
        }

        return injectionTokens;
    }

}
