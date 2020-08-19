import { Component, OnInit, Input,  Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss'],
})
export class RecipesListComponent implements OnInit {

  @Input() recipe;

  @Output() clickSeeRecipe = new EventEmitter<number>();

  constructor() { }



  clickToSee(id) {
    console.log(id);
    this.clickSeeRecipe.emit(id);
   
  }

  ngOnInit() {}

}
