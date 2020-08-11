import { NgModule } from "@angular/core";
import {
  NbCardModule,
  NbIconModule,
  NbInputModule,
  NbTreeGridModule,
  NbListModule,
} from "@nebular/theme";
import { Ng2SmartTableModule } from "ng2-smart-table";
import {
  NbButtonModule,
  NbDatepickerModule,
  NbActionsModule,
  NbCheckboxModule,

   
  NbLayoutModule,

  NbRadioModule,
  NbSelectModule,
  NbUserModule,
} from "@nebular/theme";
import { ThemeModule } from "../../@theme/theme.module";
import {
  TablesRoutingModule,
  routedComponents,
} from "./work-order-routing.module";
// import { MultiSelComponent } from './workorder/multi-sel/multi-sel.component';
//import { ExportModule } from '../exports/exports.component';
//import { FsIconComponent } from './prevention/prevention.component';

import { DatepickerComponent } from "./datepicker/datepicker.component";

import { NgxPrintModule } from "ngx-print";
import { FormsModule as ngFormsModule } from "@angular/forms";

@NgModule({
  imports: [
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    TablesRoutingModule,
    Ng2SmartTableModule,
    NbListModule,
    NgxPrintModule,

    NbRadioModule,
    ngFormsModule,
    NbButtonModule,

    NbCheckboxModule,

    NbIconModule,
    NbLayoutModule,
    
    NbButtonModule,
    NbDatepickerModule,
    NbActionsModule,
  

    NbCheckboxModule,
    

    NbRadioModule,
    NbSelectModule,
    NbUserModule,
   
  ],
  declarations: [
    ...routedComponents,
    // MultiSelComponent,
   


    DatepickerComponent,
  ],
  
})
export class TablesModule {}
