import { Component } from "@angular/core";

@Component({
  selector: "simple-modal",
  template: `
  <ion-header>
    <ion-navbar>
      <ion-title>simple modal</ion-title>
    </ion-navbar>
  </ion-header>
  <ion-content>hello</ion-content>
  `
})
export class SimpleModalComponent {
  constructor() {}
}
