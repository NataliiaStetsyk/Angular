(function(app) {
    app.AppModule = function () {
    };
    app.AppModule.annotations = [
       new ng.core.NgModule({
          imports: [ng.platformBrowser.BrowserModule],
          declarations: [app.AppComponent],
          bootstrap: [app.AppComponent]
        })
    ];
        
    })(window.app ||( window.app = {}));
