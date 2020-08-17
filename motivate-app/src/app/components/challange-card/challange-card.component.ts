import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-challange-card',
  templateUrl: './challange-card.component.html',
  styleUrls: ['./challange-card.component.scss'],
})
export class ChallangeCardComponent implements OnInit {

@Input() challenge;
@Output() clickSeeChallenge = new EventEmitter<number>();

  constructor() {}

      clickToSee(id) {
          this.clickSeeChallenge.emit(id);
        }

  ngOnInit() {}

}
