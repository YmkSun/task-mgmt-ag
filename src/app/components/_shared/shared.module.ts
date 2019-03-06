import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import { NKDatetimeModule } from 'ng2-datetime/ng2-datetime';
import * as $ from 'jquery';
import * as jQuery from 'jquery';

@NgModule({
    exports: [
        CommonModule,
        FormsModule
        //NKDatetimeModule
    ]
})
export class SharedModule { }