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
var home_1 = require('./components/home/home');
var about_1 = require('./components/about/about');
var atomos_1 = require('./components/atomos/atomos');
var NameList_1 = require('./services/NameList');
var Organismos_1 = require('./components/organismos/Organismos');
var App = (function () {
    function App() {
    }
    App = __decorate([
        angular2_1.Component({
            selector: 'app',
            viewBindings: [NameList_1.NamesList]
        }),
        router_1.RouteConfig([
            { path: '/home', component: home_1.Home, as: 'home' },
            { path: '/about', component: about_1.About, as: 'about' },
            { path: '/atomos', component: atomos_1.Atomos, as: 'atomos' },
            { path: '/organismos', component: Organismos_1.Organismos, as: 'organismos' }
        ]),
        angular2_1.View({
            templateUrl: './Navigation.html',
            directives: [router_1.RouterOutlet, router_1.RouterLink]
        }), 
        __metadata('design:paramtypes', [])
    ], App);
    return App;
})();
angular2_1.bootstrap(App, [router_1.routerInjectables]);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk5hdmlnYXRpb24udHMiXSwibmFtZXMiOlsiQXBwIiwiQXBwLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHlCQUF5QyxtQkFBbUIsQ0FBQyxDQUFBO0FBQzdELHVCQUF1RSxpQkFBaUIsQ0FBQyxDQUFBO0FBRXpGLHFCQUFtQix3QkFBd0IsQ0FBQyxDQUFBO0FBQzVDLHNCQUFvQiwwQkFBMEIsQ0FBQyxDQUFBO0FBQy9DLHVCQUFxQiw0QkFBNEIsQ0FBQyxDQUFBO0FBQ2xELHlCQUF3QixxQkFBcUIsQ0FBQyxDQUFBO0FBQzlDLDJCQUF5QixvQ0FBb0MsQ0FBQyxDQUFBO0FBRTlEO0lBQUFBO0lBZ0JBQyxDQUFDQTtJQWhCREQ7UUFBQ0Esb0JBQVNBLENBQUNBO1lBQ1BBLFFBQVFBLEVBQUVBLEtBQUtBO1lBQ2ZBLFlBQVlBLEVBQUVBLENBQUNBLG9CQUFTQSxDQUFDQTtTQUM1QkEsQ0FBQ0E7UUFDREEsb0JBQVdBLENBQUNBO1lBQ1RBLEVBQUNBLElBQUlBLEVBQUVBLE9BQU9BLEVBQUVBLFNBQVNBLEVBQUVBLFdBQUlBLEVBQUVBLEVBQUVBLEVBQUVBLE1BQU1BLEVBQUNBO1lBQzVDQSxFQUFDQSxJQUFJQSxFQUFFQSxRQUFRQSxFQUFFQSxTQUFTQSxFQUFFQSxhQUFLQSxFQUFFQSxFQUFFQSxFQUFFQSxPQUFPQSxFQUFDQTtZQUMvQ0EsRUFBQ0EsSUFBSUEsRUFBRUEsU0FBU0EsRUFBRUEsU0FBU0EsRUFBRUEsZUFBTUEsRUFBRUEsRUFBRUEsRUFBRUEsUUFBUUEsRUFBQ0E7WUFDbERBLEVBQUNBLElBQUlBLEVBQUVBLGFBQWFBLEVBQUVBLFNBQVNBLEVBQUVBLHVCQUFVQSxFQUFFQSxFQUFFQSxFQUFFQSxZQUFZQSxFQUFDQTtTQUVqRUEsQ0FBQ0E7UUFDREEsZUFBSUEsQ0FBQ0E7WUFDRkEsV0FBV0EsRUFBRUEsbUJBQW1CQTtZQUNoQ0EsVUFBVUEsRUFBRUEsQ0FBQ0EscUJBQVlBLEVBQUVBLG1CQUFVQSxDQUFDQTtTQUN6Q0EsQ0FBQ0E7O1lBRURBO0lBQURBLFVBQUNBO0FBQURBLENBaEJBLEFBZ0JDQSxJQUFBO0FBRUQsb0JBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQywwQkFBaUIsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiTmF2aWdhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBWaWV3LCBib290c3RyYXB9IGZyb20gJ2FuZ3VsYXIyL2FuZ3VsYXIyJztcclxuaW1wb3J0IHtSb3V0ZUNvbmZpZywgUm91dGVyT3V0bGV0LCBSb3V0ZXJMaW5rLCByb3V0ZXJJbmplY3RhYmxlc30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7SG9tZX0gZnJvbSAnLi9jb21wb25lbnRzL2hvbWUvaG9tZSc7XHJcbmltcG9ydCB7QWJvdXR9IGZyb20gJy4vY29tcG9uZW50cy9hYm91dC9hYm91dCc7XHJcbmltcG9ydCB7QXRvbW9zfSBmcm9tICcuL2NvbXBvbmVudHMvYXRvbW9zL2F0b21vcyc7XHJcbmltcG9ydCB7TmFtZXNMaXN0fSBmcm9tICcuL3NlcnZpY2VzL05hbWVMaXN0JztcclxuaW1wb3J0IHtPcmdhbmlzbW9zfSBmcm9tICcuL2NvbXBvbmVudHMvb3JnYW5pc21vcy9PcmdhbmlzbW9zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhcHAnLFxyXG4gICAgdmlld0JpbmRpbmdzOiBbTmFtZXNMaXN0XVxyXG59KVxyXG5AUm91dGVDb25maWcoW1xyXG4gICAge3BhdGg6ICcvaG9tZScsIGNvbXBvbmVudDogSG9tZSwgYXM6ICdob21lJ30sXHJcbiAgICB7cGF0aDogJy9hYm91dCcsIGNvbXBvbmVudDogQWJvdXQsIGFzOiAnYWJvdXQnfSxcclxuICAgIHtwYXRoOiAnL2F0b21vcycsIGNvbXBvbmVudDogQXRvbW9zLCBhczogJ2F0b21vcyd9LFxyXG4gICAge3BhdGg6ICcvb3JnYW5pc21vcycsIGNvbXBvbmVudDogT3JnYW5pc21vcywgYXM6ICdvcmdhbmlzbW9zJ31cclxuXHJcbl0pXHJcbkBWaWV3KHtcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9OYXZpZ2F0aW9uLmh0bWwnLFxyXG4gICAgZGlyZWN0aXZlczogW1JvdXRlck91dGxldCwgUm91dGVyTGlua11cclxufSlcclxuY2xhc3MgQXBwIHtcclxufVxyXG5cclxuYm9vdHN0cmFwKEFwcCwgW3JvdXRlckluamVjdGFibGVzXSk7XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==