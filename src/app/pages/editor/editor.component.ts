import { Component, OnInit } from '@angular/core';
import { Subtitle } from 'src/app/models/Subtitle';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  val: number;
  videoTime = 2537;
  currentPlay = 0;
  subtitles: Subtitle[] = [ ];
  defaultRange: number[];
  isShowCompleteModal = false;

  constructor() { }

  ngOnInit() {
    this.defaultRange = [0, Math.floor(this.videoTime / 10)];
  }

  addSubtitle() {
    const newSub: Subtitle = {
      id: new Date().getTime().toString(),
      text: '',
      time: [0, Math.ceil(this.videoTime / 2)]
    };
    this.subtitles.push(newSub);
  }

  deleteSubtitle(id) {
    const index = this.subtitles.findIndex(item => item.id === id);
    this.subtitles.splice(index, 1);
  }

  closeCompleteModal() {
    this.isShowCompleteModal = false;
  }

  showCompleteModal() {
    this.isShowCompleteModal = true;
  }
}
