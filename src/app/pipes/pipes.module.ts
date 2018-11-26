import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoTimePipe } from './videotime.pipe';

@NgModule({
    declarations: [
        VideoTimePipe
    ],
    imports: [ CommonModule ],
    exports: [
        VideoTimePipe
    ]
})
export class PipesModule { }
