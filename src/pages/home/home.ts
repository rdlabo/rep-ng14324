import { Component } from "@angular/core";
import { IonicPage, ModalController } from "ionic-angular";
import { SimpleModalComponent } from "./simple-modal.component";

@IonicPage()
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  constructor(public modalCtrl: ModalController) {}
  openModal() {
    // `Error: No component factory found for SimpleModalComponent.` occurs
    this.modalCtrl.create(SimpleModalComponent).present();
  }
}
