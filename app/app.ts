import {Component, View, bootstrap} from 'angular2/angular2';
import {RouteConfig, RouterOutlet, RouterLink, routerInjectables} from 'angular2/router';
import {Create} from './components/Create/Create002';
import {Execute} from './components/Execute/Execute003';
import {Historic} from './components/Historic/Historic004';

@Component({
    selector: 'app',
    viewBindings: []
})
@RouteConfig([

    {path: '/create', component: Create, as: 'create'},
    {path: '/execute', component: Execute, as: 'execute'},
    {path: '/historic', componentes: Historic, as: 'historic'},
])
@View({
    templateUrl: './app.html',
    directives: [RouterOutlet, RouterLink, Historic]
})
class App {
}

bootstrap(App, [routerInjectables]);
