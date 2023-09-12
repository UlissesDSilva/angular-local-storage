import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule  } from '@angular/forms';

import { HeaderComponent } from './components/header/header.component';
import { BtnDeleteAllComponent } from './components/btn-delete-all/btn-delete-all.component';
import { InputAddItemsComponent } from './components/input-add-items/input-add-items.component';
import { ListComponent } from './components/list/list.component';
import { MainComponent } from './pages/main/main.component';



@NgModule({
  declarations: [
    HeaderComponent,
    BtnDeleteAllComponent,
    InputAddItemsComponent,
    ListComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    FormsModule
  ]
})
export class HomeModule { }
