import {Component, View, NgFor} from 'angular2/angular2';
import {RouterLink} from 'angular2/router';
import {HistoricService} from '.Historic/HistoricService'
import '.rxjs-operators';
@Component({
	selector: 'component-1'
})
@View({
	templateUrl: './components/Historic/Historic004.html?v=<%= VERSION %>',
	directives: <any>[HistoricService, NgFor]
})
export class 	Historic {
	}
