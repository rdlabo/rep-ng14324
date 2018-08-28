import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { HomePage } from "./home";
import { SimpleModalComponent } from "./simple-modal.component";

@NgModule({
  declarations: [HomePage, SimpleModalComponent],
  entryComponents: [SimpleModalComponent],
  imports: [IonicPageModule.forChild(HomePage)]
})
export class HomePageModule {}
