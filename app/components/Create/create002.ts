import {Component, View, NgFor} from 'angular2/angular2';
import {RouterLink} from 'angular2/router';

@Component({
	selector: 'component-1'
})
@View({
	templateUrl: './components/Create/Create002.html?v=<%= VERSION %>',
	directives: [NgFor]
})
export class Create {

	NombreCandidato='';
	FechaEjecucion='';
	ResultadoEvaluacion='';
	LinkHistorico=''	
}