import {Component, View, NgFor} from 'angular2/angular2';
import {RouterLink} from 'angular2/router';
import {postcomponent} from '.components/Historic/post.component'
import '.Historic/rxjs-operators';
import './rxjs-operators';

@Component({
	selector: 'component-1'
})
@View({

	templateUrl: './components/Historic/Historic004.html?v=<%= VERSION %>',
	directives: <any>[postcomponent,NgFor]
})
export class 	Historic {}
