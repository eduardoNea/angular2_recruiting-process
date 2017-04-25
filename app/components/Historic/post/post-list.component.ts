import {Component, View, NgFor} from 'angular2/angular2';
import {RouterLink} from 'angular2/router';
import {postservice} from './post.service';
import {post} from './post';

@Component({
    selector: 'post-list',
    template:` `
  })
export class PostListComponent {
  constructor(private _postDataService:postservice) {
      this.getPosts();
    }
      private posts:post[] = [];
   private errorMessage:any = '';

   getPosts() {
       //To Do: Fetch Posts here using PostsDataService
       this._postDataService.getData()
        .subscribe(
            posts => this.posts = posts,
            error => this.errorMessage = <any>error);
   }
}
