/// <reference path="typings/angular2/angular2.d.ts" />

import {
Component,
For,
View,
bootstrap,
} from "angular2/angular2";

@Component({
  selector: 'reddit'
})
@View({
  template: `
    <section class="new-link">
      <div class="control-group">
        <div><label for="title">Title:</label></div>
        <div><input name="title" #newtitle></div>
      </div>
      <div class="control-group">
        <div><label for="link">Link:</label></div>
        <div><input name="link" #newlink></div>
      </div>

      <button (click)="addArticle(newtitle, newlink)">Submit Link</button>
    </section>
  `,

  directives: [For]
})
class RedditApp {
  addArticle(title, link) {
    console.log("Adding article with title", title.value, "and link", link.value);
  }
}

bootstrap(RedditApp);
