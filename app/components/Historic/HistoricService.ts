import {Component}  from '@angular/core';
import {PostListComponent} from './post-list.component';
import {PostService} from './post.service';

@Component({
    selector: 'my-service',

    directives: <any>[PostListComponent],
    providers: <any>[PostService]
})
export class HistoricService {

	constructor(private http:Http) {
		var obj;
		this.getJSON().subscribe(data => obj=data, error => console.log(error));
	}
	public getJSON(): Observable<any> {
		return.this.http.get("./Data/Agenda.json")
		.map((res:any) => res.json())
		.catch((error:any)=> console.log(error));
						}
	}
