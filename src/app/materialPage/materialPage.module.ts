import { CommonModule } from '@angular/common';
import { MaterialPageComponent } from './materialPage.component';
import { MaterialPageRoutes } from './materialPage.routing';
import { Component, NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { BrowserModule } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import {LayoutModule} from '@angular/cdk/layout';

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatButtonToggleModule,
  MatCheckboxModule,
} from '@angular/material';
import {
  CdkTableModule,
  DataSource
} from '@angular/cdk/table';
import 'rxjs/add/observable/of';
import { PizzaComponent } from './pizza/pizza.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    MaterialPageRoutes,
    MatAutocompleteModule,
    MatButtonModule,
    // Button toggle and checkbox can't work due to https://github.com/angular/angular/issues/17050
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatExpansionModule,
    MatSortModule,
    MatTableModule,

    // CDK Modules
    CdkTableModule
  ],
  declarations: [MaterialPageComponent,
    PizzaComponent
  ],
  entryComponents: [PizzaComponent]
})
export class MaterialPageModule { }
