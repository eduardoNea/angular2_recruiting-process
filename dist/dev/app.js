var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var Create002_1 = require('./components/Create/Create002');
var Execute003_1 = require('./components/Execute/Execute003');
var Historic004_1 = require('./components/Historic/Historic004');
var App = (function () {
    function App() {
    }
    App = __decorate([
        angular2_1.Component({
            selector: 'app',
            viewBindings: []
        }),
        router_1.RouteConfig([
            { path: '/create', component: Create002_1.Create, as: 'create' },
            { path: '/execute', component: Execute003_1.Execute, as: 'execute' },
            { path: '/historic', componentes: Historic004_1.Historic, as: 'historic' },
        ]),
        angular2_1.View({
            templateUrl: './app.html',
            directives: [router_1.RouterOutlet, router_1.RouterLink, Historic004_1.Historic]
        }), 
        __metadata('design:paramtypes', [])
    ], App);
    return App;
})();
angular2_1.bootstrap(App, [router_1.routerInjectables]);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6WyJBcHAiLCJBcHAuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEseUJBQXlDLG1CQUFtQixDQUFDLENBQUE7QUFDN0QsdUJBQXVFLGlCQUFpQixDQUFDLENBQUE7QUFDekYsMEJBQXFCLCtCQUErQixDQUFDLENBQUE7QUFDckQsMkJBQXNCLGlDQUFpQyxDQUFDLENBQUE7QUFDeEQsNEJBQXVCLG1DQUFtQyxDQUFDLENBQUE7QUFFM0Q7SUFBQUE7SUFlQUMsQ0FBQ0E7SUFmREQ7UUFBQ0Esb0JBQVNBLENBQUNBO1lBQ1BBLFFBQVFBLEVBQUVBLEtBQUtBO1lBQ2ZBLFlBQVlBLEVBQUVBLEVBQUVBO1NBQ25CQSxDQUFDQTtRQUNEQSxvQkFBV0EsQ0FBQ0E7WUFFVEEsRUFBQ0EsSUFBSUEsRUFBRUEsU0FBU0EsRUFBRUEsU0FBU0EsRUFBRUEsa0JBQU1BLEVBQUVBLEVBQUVBLEVBQUVBLFFBQVFBLEVBQUNBO1lBQ2xEQSxFQUFDQSxJQUFJQSxFQUFFQSxVQUFVQSxFQUFFQSxTQUFTQSxFQUFFQSxvQkFBT0EsRUFBRUEsRUFBRUEsRUFBRUEsU0FBU0EsRUFBQ0E7WUFDckRBLEVBQUNBLElBQUlBLEVBQUVBLFdBQVdBLEVBQUVBLFdBQVdBLEVBQUVBLHNCQUFRQSxFQUFFQSxFQUFFQSxFQUFFQSxVQUFVQSxFQUFDQTtTQUM3REEsQ0FBQ0E7UUFDREEsZUFBSUEsQ0FBQ0E7WUFDRkEsV0FBV0EsRUFBRUEsWUFBWUE7WUFDekJBLFVBQVVBLEVBQUVBLENBQUNBLHFCQUFZQSxFQUFFQSxtQkFBVUEsRUFBRUEsc0JBQVFBLENBQUNBO1NBQ25EQSxDQUFDQTs7WUFFREE7SUFBREEsVUFBQ0E7QUFBREEsQ0FmQSxBQWVDQSxJQUFBO0FBRUQsb0JBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQywwQkFBaUIsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIFZpZXcsIGJvb3RzdHJhcH0gZnJvbSAnYW5ndWxhcjIvYW5ndWxhcjInO1xuaW1wb3J0IHtSb3V0ZUNvbmZpZywgUm91dGVyT3V0bGV0LCBSb3V0ZXJMaW5rLCByb3V0ZXJJbmplY3RhYmxlc30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7Q3JlYXRlfSBmcm9tICcuL2NvbXBvbmVudHMvQ3JlYXRlL0NyZWF0ZTAwMic7XG5pbXBvcnQge0V4ZWN1dGV9IGZyb20gJy4vY29tcG9uZW50cy9FeGVjdXRlL0V4ZWN1dGUwMDMnO1xuaW1wb3J0IHtIaXN0b3JpY30gZnJvbSAnLi9jb21wb25lbnRzL0hpc3RvcmljL0hpc3RvcmljMDA0JztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhcHAnLFxuICAgIHZpZXdCaW5kaW5nczogW11cbn0pXG5AUm91dGVDb25maWcoW1xuXG4gICAge3BhdGg6ICcvY3JlYXRlJywgY29tcG9uZW50OiBDcmVhdGUsIGFzOiAnY3JlYXRlJ30sXG4gICAge3BhdGg6ICcvZXhlY3V0ZScsIGNvbXBvbmVudDogRXhlY3V0ZSwgYXM6ICdleGVjdXRlJ30sXG4gICAge3BhdGg6ICcvaGlzdG9yaWMnLCBjb21wb25lbnRlczogSGlzdG9yaWMsIGFzOiAnaGlzdG9yaWMnfSxcbl0pXG5AVmlldyh7XG4gICAgdGVtcGxhdGVVcmw6ICcuL2FwcC5odG1sJyxcbiAgICBkaXJlY3RpdmVzOiBbUm91dGVyT3V0bGV0LCBSb3V0ZXJMaW5rLCBIaXN0b3JpY11cbn0pXG5jbGFzcyBBcHAge1xufVxuXG5ib290c3RyYXAoQXBwLCBbcm91dGVySW5qZWN0YWJsZXNdKTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==