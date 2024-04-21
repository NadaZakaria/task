import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

import { DropdownModule } from 'primeng/dropdown';
import { ChipsModule } from 'primeng/chips';
import { PanelModule } from 'primeng/panel';

import { DialogModule } from 'primeng/dialog';
import { StartComponent } from './start/start.component';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DialogService} from 'primeng/dynamicdialog';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    StartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSlideToggleModule,
    MatFormFieldModule, MatSelectModule, MatInputModule,DropdownModule,ChipsModule,PanelModule,DialogModule,
    DynamicDialogModule,
    ButtonModule
  ],
  providers: [DialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
