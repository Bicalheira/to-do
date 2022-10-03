import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipeModule } from '../pipes/pipe.module';
import { CardComponent } from './card/card.component';

import { HeaderComponent } from './header/header.component';
import { TaskComponent } from './task/task.component';



@NgModule({
    declarations: [
        HeaderComponent,
        TaskComponent,
        CardComponent
    ],
    imports: [
        PipeModule,
        ReactiveFormsModule,
        FormsModule,

        CommonModule,

    ],
    exports: [
        HeaderComponent,
        TaskComponent,
        CardComponent
    ],
    providers: [],
    bootstrap: []
})
export class ComponentModule { }
