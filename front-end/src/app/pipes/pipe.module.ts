import { NgModule } from '@angular/core';
import { FilterStatusPipe } from './filter.pipe';


@NgModule({
    declarations: [
        FilterStatusPipe
    ],
    exports: [
        FilterStatusPipe
    ]

})
export class PipeModule { }
