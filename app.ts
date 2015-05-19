/// <reference path="typings/angular2/angular2.d.ts" />

import {
  Component,
  bootstrap,
  View,
  For
} from "angular2/angular2";

class Article {
  title: string;
  link: string;
  votes: number;

  constructor(title, link) {
    this.title = title;
    this.link = link;
    this.votes = 0;
  }

  domain() {
    var link = this.link.split('//')[1];
    return link.split('/')[0];
  }

  voteUp()   {
    this.votes += 1
    return false;
  };

  voteDown() {
    this.votes -= 1
    return false;
  };
}

@Component({
  selector: 'one-article',
  properties: {
    'article': 'article'
  }
})
@View({
  template: `
  <article>
    <div class="votes">{{ article.votes }}</div>
    <div class="main">
      <h2>
        <a href="{{ article.link }}">{{ article.title }}</a>
        <span>({{ article.domain() }})</span>
       </h2>
      <ul>
        <li><a href (click)='article.voteUp()'>upvote</a></li>
        <li><a href (click)='article.voteDown()'>downvote</a></li>
      </ul>
    </div>
  </article>
  `
})
class ArticleComponent {
}

@Component({
  selector: 'articles'
})
@View({
  template: `
    <section class="new-link">
      <div class="control-group">
        <div><label for="title">Text:</label></div>
        <div><input #newtitle></div>
      </div>
      <div class="control-group">
        <div><label for="title">Link:</label></div>
        <div><input #newlink></div>
      </div>

      <button (click)="addArticle(newtitle, newlink)">Submit Link</button>
    </section>

    <one-article
       *for="#article of articles"
       [article]="article">
    </one-article>
  `,

   directives: [For, ArticleComponent]
})
class ArticlesComponent {
  articles: Array<Article>;

  constructor() {
    this.articles = [
      new Article('Angular 2.0', 'http://angular.io'),
      new Article('FullStack', 'http://fullstack.io')
    ];
  }

  addArticle(title, link) {
    this.articles.push(new Article(title.value, link.value));
    title.value = '';
    link.value = '';
  }
}

bootstrap(ArticlesComponent);
