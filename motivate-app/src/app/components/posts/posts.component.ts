import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {

    @Input() usuario;
    @Input() recipe;
    @Output() clickSeeRecipe = new EventEmitter<number>();
    @Output() clickSeeProfile = new EventEmitter<number>();

constructor(private router: Router, public recipeService: RecipeService) {}

  clickToSeeRecipe(id) {
      this.clickSeeRecipe.emit(id);
    }

  clickToSeeProfile(id){
      this.clickSeeProfile.emit(id);
  }


  ngOnInit() {}

}
