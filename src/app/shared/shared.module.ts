import {NgModule} from '@angular/core';
import {DropdownDirective} from './dropdown.directive';
import {SpinnerComponent} from './spinner/spinner.component';
import {CommonModule} from '@angular/common';

@NgModule({
    declarations:[
        DropdownDirective,
        SpinnerComponent
    ],
    imports:[
        CommonModule
    ],
    exports:[
        CommonModule,
        DropdownDirective,
        SpinnerComponent
    ]
})
export class SharedModule {}