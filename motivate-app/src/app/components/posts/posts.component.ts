import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {

@Input() recipe;
@Output() clickSeeRecipe = new EventEmitter<number>();


  constructor() {}

      clickToSeeRecipe(id) {
          this.clickSeeRecipe.emit(id);
        }
       

  ngOnInit() {}

}
