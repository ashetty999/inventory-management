import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogContainer, MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ProductModule } from './product/product.module';

const appRoutes: Routes = [
];

@NgModule({
  declarations: [
    AppComponent
  ],
  entryComponents: [MatDialogContainer, ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatDialogModule,
    MatInputModule,
    DashboardModule,
    ProductModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
