/// <reference path="typings/angular2/angular2.d.ts" />

import {
  Component,
  View,
  bootstrap,
} from "angular2/angular2";

@Component({
  selector: 'hello-world'
})
@View({
  template: `<article>Hello {{ name }}</article>`
})
class HelloWorld {
  name: string;

  constructor() {
    this.name = 'Felipe';
  }
}

bootstrap(HelloWorld);
