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
            <div><input name="title"></div>
          </div>
          <div class="control-group">
            <div><label for="link">Link:</label></div>
            <div><input name="link"></div>
          </div>

          <button>Submit Link</button>
        </section>
      `,

  directives: [For]
})
class RedditApp {
}

bootstrap(RedditApp);
