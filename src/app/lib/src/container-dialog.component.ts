import {
    Component, OnInit, ViewContainerRef, ViewChild,
    ComponentFactoryResolver, AfterViewInit, Injector, InjectionToken, Inject, ChangeDetectorRef
} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { DataConfig } from './data-config';


@Component({
    selector: 'container-dialog',
    templateUrl: './container-dialog.component.html',
    styleUrls: ['../dialog.css']
})
export class ContainerDialogComponent implements OnInit, AfterViewInit {
    private divModalDialog: boolean = false;

    @ViewChild('dynamicContent', { read: ViewContainerRef })
    private dynamicContent: ViewContainerRef;
    private subjectOpen = new Subject<any>();
    private subjectClose = new Subject<any>();
    private refDynamicContent: any;
    modalback: string = 'geco-modal-back-show';
    modalDialog: string = 'geco-modal-dialog-show';
    modalContent: string = 'geco-modal-content-show';
    private config: DataConfig;
    private show: boolean = false;

    constructor(
        private r: ComponentFactoryResolver,
        private cdRef: ChangeDetectorRef
    ) {
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        this.openDialog();
    }

    addDynamicContent(compRef, config: DataConfig, injector: Injector = null) {
        this.config = config;
        this._defineClasses(this.config['useStyles'] == undefined ? 'default' : this.config.useStyles);
        const factory = this.r.resolveComponentFactory(compRef);
        this.refDynamicContent = this.dynamicContent.createComponent(factory, null, injector);
    }

    private openDialog() {
        //emit event
        this.subjectOpen.next();
    }

    closeDialog(result?) {
        //Clear content
        this.dynamicContent.clear();
        //emit event
        this.subjectClose.next(result);
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
            this.modalback = 'geco-modal-back';
            this.modalDialog = 'geco-modal-dialog';
            this.modalContent = 'geco-modal-content';
        }
        this.cdRef.detectChanges(); 
    }

    closeDialogFromHtml() {
        if(this.divModalDialog){
            return false;
        }
        this.closeDialog();
    }
}
