import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'videotime'
})
export class VideoTimePipe implements PipeTransform {
    transform(input: any): any {
        const seconds = Math.floor(input / 100);
        const miliSeconds = input % 100;

        let videoTime = '';
        if (seconds < 10) {
            videoTime = `0${seconds}`;
        } else {
            videoTime = `${seconds}`;
        }
        videoTime += ':';
        if (miliSeconds < 10) {
            videoTime += `0${miliSeconds}`;
        } else {
            videoTime += `${miliSeconds}`;
        }
        return videoTime;
    }
}
