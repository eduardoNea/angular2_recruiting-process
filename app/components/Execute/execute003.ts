import {Component, View, NgFor} from 'angular2/angular2';

@Component({
    selector: 'component-1'
})
@View({
    templateUrl: './components/Execute/Execute003.html?v=<%= VERSION %>',
    directives: [NgFor]
})
export class Execute {
   pregunta='';
	Respuesta='';
	PreguntaCategoria='';
	CalidadRespuesta='';
	Notas='';
	Comentarios=''
}
