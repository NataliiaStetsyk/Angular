(function(app) {
    app.AppComponent = function () {
    };
    app.AppComponent.annotations = [
       new  ng.core.Component({
          selector: 'my-app',
          template: '<h1>Hello World</h1>'
        })
    ];
        
    })(window.app ||( window.app = {}));
