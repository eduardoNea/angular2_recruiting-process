import {Component, View} from 'angular2/angular2';
import {RouterLink} from 'angular2/router';

@Component({
    selector: 'component-1'
})
@View({
    templateUrl: './components/Atomos/Atoms_page.html?v=<%= VERSION %>',
    directives: [RouterLink]
})
export class Atomos {}
