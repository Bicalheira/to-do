import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register.component';


@NgModule({
    declarations: [
        RegisterComponent
    ],
    imports: [
        ReactiveFormsModule,
        FormsModule,
        CommonModule
    ],
    providers: [],
    bootstrap: []
})
export class RegisterModule { }
