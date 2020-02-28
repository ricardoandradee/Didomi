import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatListModule,
    MatIconModule
} from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatNativeDateModule,
        MatCheckboxModule,
        MatSidenavModule,
        MatToolbarModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        MatListModule,
        MatIconModule
    ],
    exports: [
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatNativeDateModule,
        MatCheckboxModule,
        MatSidenavModule,
        MatToolbarModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        MatListModule,
        MatIconModule
    ]
})

export class MaterialModule { }
