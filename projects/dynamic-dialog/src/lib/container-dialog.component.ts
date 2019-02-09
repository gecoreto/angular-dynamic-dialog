import {
    Component, OnInit, ViewContainerRef, ViewChild,
    ComponentFactoryResolver, AfterViewInit, Injector, ChangeDetectorRef, ComponentRef
} from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { DataConfig } from './data-config';


@Component({
    selector: 'container-dialog',
    templateUrl: './container-dialog.component.html',
    styleUrls: ['../dialog.css']
})
export class ContainerDialogComponent implements OnInit, AfterViewInit {
    divModalDialog: boolean = false;

    @ViewChild('dynamicContent', { read: ViewContainerRef })
    private dynamicContent: ViewContainerRef;
    private subjectOpen = new Subject<any>();
    private subjectClose = new Subject<any>();
    private refDynamicContent: ComponentRef<any>;
    modalback: string = 'geco-modal-back-show';
    modalDialog: string = 'geco-modal-dialog-show';
    modalContent: string = 'geco-modal-content-show';
    bootstrapSize: string = '';
    closeOutSide: boolean = true;
    private config: DataConfig;

    constructor(
        private r: ComponentFactoryResolver,
        private cdRef: ChangeDetectorRef,
        private _injector: Injector,
    ) {
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        this.openDialog();
    }

    addDynamicContent(compRef, config: DataConfig, injector: any = null) {
        this.config = config;
        this._defineClasses(this.config['useStyles'] == undefined ? 'default' : this.config.useStyles);
        setTimeout(() => {
            this.bootstrapSize = this.config['bootstrapSize'] == undefined ? this.bootstrapSize : this.config.bootstrapSize;
            this.closeOutSide = this.config['closeOutSide'] == undefined ? this.closeOutSide : this.config.closeOutSide;
        });
        const factory = this.r.resolveComponentFactory(compRef);
        const inject = new CustomInjector(this._injector, injector);
        this.refDynamicContent = this.dynamicContent.createComponent(factory, null, inject);
    }

    private openDialog() {
        //emit event
        this.subjectOpen.next();
        this.subjectOpen.complete();
    }

    closeDialog(result?) {
        //Clear content
        this.dynamicContent.clear();
        //emit event
        this.subjectClose.next(result);
        this.subjectClose.complete();
    }

    onClosedModal(): Observable<any> {
        return this.subjectClose.asObservable();
    }

    onOpenModal(): Observable<any> {
        return this.subjectOpen.asObservable();
    }

    private _defineClasses(useStyles: string) {

        if (useStyles == "bootstrap") {
            this.modalback = 'modal-backdrop';
            this.modalDialog = 'modal-dialog';
            this.modalContent = 'modal-content';
        } else if (useStyles == "none") {
            this.modalback = 'geco-modal-back-show';
            this.modalDialog = 'geco-modal-dialog-show';
            this.modalContent = 'geco-modal-content-show';
        }
        this.cdRef.detectChanges();
    }

    closeDialogFromHtml() {
        if (!this.divModalDialog && this.closeOutSide) {
            this.closeDialog();
        }
    }
}

/**
 * Custom injector to be used when providing custom
 */
class CustomInjector implements Injector {
    constructor(
        private _parentInjector: Injector,
        private _customTokens: WeakMap<any, any>) { }

    get(token: any, notFoundValue?: any): any {
        const value = this._customTokens.get(token);

        if (typeof value !== 'undefined') {
            return value;
        }

        return this._parentInjector.get<any>(token, notFoundValue);
    }
}