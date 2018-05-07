import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule, MatTableModule, MatToolbarModule, MatPaginatorModule } from '@angular/material';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
	imports: [CommonModule, MatToolbarModule, MatInputModule, MatTableModule, MatPaginatorModule, BrowserAnimationsModule],
	exports: [CommonModule, MatToolbarModule, MatInputModule, MatTableModule, MatPaginatorModule, BrowserAnimationsModule],
})
export class MaterialModule { }