import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { DataService } from "./data.service";
import { ButtonModule } from "primeng/button";
import { TableModule } from "primeng/table";
import { OverlayPanelModule } from "primeng/overlaypanel";
import { ToastModule } from "primeng/toast";
import { CardModule } from "primeng/card";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    OverlayPanelModule,
    TableModule,
    ButtonModule,
    ToastModule,
    CardModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
