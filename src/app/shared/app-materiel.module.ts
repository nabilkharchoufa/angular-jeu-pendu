import {
  MatButtonModule,
  MatCheckboxModule,
  MatMenuModule,
  MatToolbarModule,
  MatCardModule,
  MatGridListModule,
  MatBadgeModule,
  MatSelectModule,
  MatIconModule,
  MatDividerModule,
  MatInputModule,
  MatTooltipModule
} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatBadgeModule,
    MatSelectModule,
    MatIconModule,
    MatDividerModule,
    MatInputModule,
    MatTooltipModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatBadgeModule,
    MatSelectModule,
    MatIconModule,
    MatDividerModule,
    MatInputModule,
    MatTooltipModule
  ],
})
export class AppMaterielModule { }
