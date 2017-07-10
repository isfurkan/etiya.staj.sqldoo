import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FilterService } from './addfilter/addfilterservice'
import { AddFilterComponent } from './addfilter/addfiltercomponent'
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TabpanelComponent } from './tabpanel/tabpanel.component';
import { TabpanelService} from "./tabpanel/tabpanel.service";
//import {OverlayPanelModule} from 'primeng/components/overlaypanel';

import { PanelMenuModule,PanelModule, TabViewModule,DialogModule, FieldsetModule,
   ToolbarModule,DropdownModule,GrowlModule, ButtonModule, DataTableModule,SharedModule, } from 'primeng/primeng';


const appRoutes: Routes = [
  {
    path: "",
    redirectTo:"app",
    pathMatch:"full"
  },
  {
    path: "app",
    component: AppComponent
  },
  {
    path: "menu",
    component: MenuComponent
  },
  {
    path: "tabpanel",
    component: TabpanelComponent,
  },
  {
    path:"filter",
    component:AddFilterComponent,
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TabpanelComponent,
    AddFilterComponent,
  ],
  imports: [
    BrowserModule,
    DialogModule,
    GrowlModule,
    DropdownModule,
    PanelModule,
    BrowserAnimationsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    PanelMenuModule, 
    TabViewModule,
    FieldsetModule,
    ToolbarModule,
    ButtonModule,
    DataTableModule,SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    TabpanelService,
    FilterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
