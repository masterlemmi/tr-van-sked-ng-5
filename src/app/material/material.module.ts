import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule, MatTableModule, MatToolbarModule, MatPaginatorModule } from '@angular/material';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatIconModule} from '@angular/material/icon';


@NgModule({
	imports: [CommonModule, MatToolbarModule, MatInputModule, MatTableModule, 
		MatPaginatorModule, BrowserAnimationsModule, MatIconModule],
	exports: [CommonModule, MatToolbarModule, MatInputModule, MatTableModule, 
		MatPaginatorModule, BrowserAnimationsModule, MatIconModule],
})
export class MaterialModule { }