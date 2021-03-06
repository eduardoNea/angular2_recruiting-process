import {Component, View, NgFor} from 'angular2/angular2';
import {RouterLink} from 'angular2/router';
import {Injectable} from "@angular/core";
import {Post} from './post';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class postservice {
 constructor(private http:Http)

getData():Ovserbable<Post[]> {
  return this.http.get('http://jsonplaceholder.typicode.com/posts/')
              .map(this.extractData)
              .catch(this.handleError);
            }

    private extractData(res:Response){
      let body = res.json();
        return body || [];
    }
    private handleError(error:any) {
       // In a real world app, we might use a remote logging infrastructure
       // We'd also dig deeper into the error to get a better message
       let errMsg = (error.message) ? error.message :
           error.status ? `${error.status} - ${error.statusText}` : 'Server error';
       console.error(errMsg); // log to console instead
       return Observable.throw(errMsg);
   }
}
