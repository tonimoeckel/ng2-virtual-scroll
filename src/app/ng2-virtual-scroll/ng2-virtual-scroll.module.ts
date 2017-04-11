import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VirtualScrollListComponent } from './components/virtual-scroll-list/virtual-scroll-list.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        VirtualScrollListComponent
    ],
    exports: [
        VirtualScrollListComponent
    ]
})
export class Ng2VirtualScrollModule { }
