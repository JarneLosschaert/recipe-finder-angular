import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {
  recipeId: string  = '';
  recipe: any;
  loading: boolean = false;
  error: string = '';

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.recipeId = params['id'];
      this.getRecipeDetails(this.recipeId);
    });
  }

  getRecipeDetails(id: string): void {
    const idNr = parseInt(id, 10);
    this.loading = true;
    this.error = '';

    this.recipeService.getRecipeById(idNr)
      .subscribe(
        (data: any) => {
          this.recipe = data;
          this.loading = false;
        },
        (error: any) => {
          this.error = 'An error occurred while fetching recipe details.';
          this.loading = false;
        }
      );
  }
}
