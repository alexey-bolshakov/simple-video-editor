import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from './editor.component';
import { EditorRoutingModule } from './editor.routes';

import { SliderModule } from 'primeng/slider';
import { FormsModule } from '@angular/forms';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
    declarations: [
        EditorComponent
    ],
    imports: [
        CommonModule,
        EditorRoutingModule,
        FormsModule,
        PipesModule,
        SliderModule
    ]
})
export class EditorModule {
}
