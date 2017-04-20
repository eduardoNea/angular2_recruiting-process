import {Component, View, bootstrap} from 'angular2/angular2';
import {RouteConfig, RouterOutlet, RouterLink, routerInjectables} from 'angular2/router';

import {Home} from './components/home/home';
import {About} from './components/about/about';
import {Atomos} from './components/atomos/atomos';
import {NamesList} from './services/NameList';
import {Organismos} from './components/organismos/Organismos';

@Component({
    selector: 'app',
    viewBindings: [NamesList]
})
@RouteConfig([
    {path: '/home', component: Home, as: 'home'},
    {path: '/about', component: About, as: 'about'},
    {path: '/atomos', component: Atomos, as: 'atomos'},
    {path: '/organismos', component: Organismos, as: 'organismos'}

])
@View({
    templateUrl: './Navigation.html',
    directives: [RouterOutlet, RouterLink]
})
class App {
}

bootstrap(App, [routerInjectables]);
