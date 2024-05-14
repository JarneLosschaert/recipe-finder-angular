import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-find-recipe',
  templateUrl: './find-recipe.component.html',
  styleUrls: ['./find-recipe.component.scss'],
})
export class FindRecipeComponent {
  query: string = '';
  cuisine: string = '';
  diet: string = '';
  intolerancesStr: string = '';
  intolerances: string[] = [];

  recipes: any[] = [];
  loading: boolean = false;
  error: string = '';

  constructor(
    private recipeService: RecipeService,
    private router: Router
  ) {}

  searchRecipes(): void {
    this.loading = true;
    this.error = '';

    this.intolerances = this.intolerancesStr.split(',');

    this.recipeService
      .searchRecipes(this.query, this.cuisine, this.diet, this.intolerances)
      .subscribe(
        (data: any) => {
          this.recipes = data.results;
          this.loading = false;
        },
        (error: any) => {
          this.error = 'An error occurred while fetching recipes.';
          this.loading = false;
        }
      );
  }

  showRecipeDetails(recipe: any): void {    
    this.router.navigate(['/recipe', recipe.id]);
  }

  ngOnInit() {
    this.searchRecipes();
  }
}