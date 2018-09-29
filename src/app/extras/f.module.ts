import { RouterModule } from "@angular/router";
import { routes } from "./feature-module-routing";
import { NgModule } from "@angular/core";
import { ItemsComponent } from "./items/items.component";

@NgModule({
  imports:[
    RouterModule.forChild(routes)
  ],
  declarations:[ItemsComponent]
})
export class legalModule{}
