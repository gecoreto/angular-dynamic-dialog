export default {
    entry: 'dist/geco-dialog.js',
    dest: 'dist/bundles/geco-dialog.umd.js',
    sourceMap: false,
    format: 'umd',
    moduleName: 'angular-dynamic-dialog',
    globals: {
        '@angular/core': 'ng.core',
        'rxjs/Observable': 'Rx',
        'rxjs/ReplaySubject': 'Rx',
        'rxjs/add/operator/map': 'Rx.Observable.prototype',
        'rxjs/add/operator/mergeMap': 'Rx.Observable.prototype',
        'rxjs/add/observable/fromEvent': 'Rx.Observable',
        'rxjs/add/observable/of': 'Rx.Observable'
    }
}