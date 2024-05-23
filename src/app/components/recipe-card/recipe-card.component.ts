import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.scss',
})
export class RecipeCardComponent {
  @Input() recipe: any;

  constructor(private router: Router) {}

  showRecipeDetails() {
    this.router.navigate([`/recipe/${this.recipe.id}`]);
  }
}
