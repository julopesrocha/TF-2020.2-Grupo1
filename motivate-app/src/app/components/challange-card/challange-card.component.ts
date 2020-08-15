import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-challange-card',
  templateUrl: './challange-card.component.html',
  styleUrls: ['./challange-card.component.scss'],
})
export class ChallangeCardComponent implements OnInit {

@Input() challenge;
@Output() clickSeeMore = new EventEmitter<number>();

  constructor() {}

      clickToSee(id) {
          this.clickSeeMore.emit(id);
        }

  ngOnInit() {}

}
