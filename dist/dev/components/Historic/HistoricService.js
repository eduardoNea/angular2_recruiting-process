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
var core_1 = require('@angular/core');
var post_list_component_1 = require('./post-list.component');
var post_service_1 = require('./post.service');
var HistoricService = (function () {
    function HistoricService(http) {
        this.http = http;
        var obj;
        this.getJSON().subscribe(function (data) { return obj = data; }, function (error) { return console.log(error); });
    }
    HistoricService.prototype.getJSON = function () {
        return .this.http.get("./Data/Agenda.json")
            .map(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    HistoricService = __decorate([
        core_1.Component({
            selector: 'my-service',
            directives: [post_list_component_1.PostListComponent],
            providers: [post_service_1.PostService]
        }), 
        __metadata('design:paramtypes', [(typeof Http !== 'undefined' && Http) || Object])
    ], HistoricService);
    return HistoricService;
})();
exports.HistoricService = HistoricService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGlzdG9yaWMvSGlzdG9yaWNTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbIkhpc3RvcmljU2VydmljZSIsIkhpc3RvcmljU2VydmljZS5jb25zdHJ1Y3RvciIsIkhpc3RvcmljU2VydmljZS5nZXRKU09OIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6QyxvQ0FBZ0MsdUJBQXVCLENBQUMsQ0FBQTtBQUN4RCw2QkFBMEIsZ0JBQWdCLENBQUMsQ0FBQTtBQUUzQztJQVFDQSx5QkFBb0JBLElBQVNBO1FBQVRDLFNBQUlBLEdBQUpBLElBQUlBLENBQUtBO1FBQzVCQSxJQUFJQSxHQUFHQSxDQUFDQTtRQUNSQSxJQUFJQSxDQUFDQSxPQUFPQSxFQUFFQSxDQUFDQSxTQUFTQSxDQUFDQSxVQUFBQSxJQUFJQSxJQUFJQSxPQUFBQSxHQUFHQSxHQUFDQSxJQUFJQSxFQUFSQSxDQUFRQSxFQUFFQSxVQUFBQSxLQUFLQSxJQUFJQSxPQUFBQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxLQUFLQSxDQUFDQSxFQUFsQkEsQ0FBa0JBLENBQUNBLENBQUNBO0lBQ3pFQSxDQUFDQTtJQUNNRCxpQ0FBT0EsR0FBZEE7UUFDQ0UsTUFBTUEsQ0FBQUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0Esb0JBQW9CQSxDQUFDQTthQUN6Q0EsR0FBR0EsQ0FBQ0EsVUFBQ0EsR0FBT0EsSUFBS0EsT0FBQUEsR0FBR0EsQ0FBQ0EsSUFBSUEsRUFBRUEsRUFBVkEsQ0FBVUEsQ0FBQ0E7YUFDNUJBLEtBQUtBLENBQUNBLFVBQUNBLEtBQVNBLElBQUlBLE9BQUFBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLEtBQUtBLENBQUNBLEVBQWxCQSxDQUFrQkEsQ0FBQ0EsQ0FBQ0E7SUFDckNBLENBQUNBO0lBaEJQRjtRQUFDQSxnQkFBU0EsQ0FBQ0E7WUFDUEEsUUFBUUEsRUFBRUEsWUFBWUE7WUFFdEJBLFVBQVVBLEVBQU9BLENBQUNBLHVDQUFpQkEsQ0FBQ0E7WUFDcENBLFNBQVNBLEVBQU9BLENBQUNBLDBCQUFXQSxDQUFDQTtTQUNoQ0EsQ0FBQ0E7O3dCQVlBQTtJQUFEQSxzQkFBQ0E7QUFBREEsQ0FqQkQsQUFpQkVBLElBQUE7QUFYVyx1QkFBZSxrQkFXMUIsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL0hpc3RvcmljL0hpc3RvcmljU2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7UG9zdExpc3RDb21wb25lbnR9IGZyb20gJy4vcG9zdC1saXN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7UG9zdFNlcnZpY2V9IGZyb20gJy4vcG9zdC5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdteS1zZXJ2aWNlJyxcclxuXHJcbiAgICBkaXJlY3RpdmVzOiA8YW55PltQb3N0TGlzdENvbXBvbmVudF0sXHJcbiAgICBwcm92aWRlcnM6IDxhbnk+W1Bvc3RTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSGlzdG9yaWNTZXJ2aWNlIHtcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBodHRwOkh0dHApIHtcclxuXHRcdHZhciBvYmo7XHJcblx0XHR0aGlzLmdldEpTT04oKS5zdWJzY3JpYmUoZGF0YSA9PiBvYmo9ZGF0YSwgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcclxuXHR9XHJcblx0cHVibGljIGdldEpTT04oKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHRcdHJldHVybi50aGlzLmh0dHAuZ2V0KFwiLi9EYXRhL0FnZW5kYS5qc29uXCIpXHJcblx0XHQubWFwKChyZXM6YW55KSA9PiByZXMuanNvbigpKVxyXG5cdFx0LmNhdGNoKChlcnJvcjphbnkpPT4gY29uc29sZS5sb2coZXJyb3IpKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdH1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9