import {Component, View, NgFor} from 'angular2/angular2';
import {RouterLink} from 'angular2/router';
import {PostListComponent} from './post-list.component';
import {PostService} from './PostService';

@Component({
    selector: 'post-parent',

    directives: <any>[PostListComponent],
    providers: <any>[PostService]
})
export class postcomponent {}
