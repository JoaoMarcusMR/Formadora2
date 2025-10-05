import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-page-1',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: './page-1.page.html',
  styleUrls: ['./page-1.page.scss'],
})
export class PageAPage {
  meals: any[] = [];
  selectedMeal: any = null;
  loading = false;
  currentCuisine = '';

  // TRADUTOR DE CATEGORIAS
  categoryTranslations: { [key: string]: string } = {
    'Beef': 'Carne Bovina',
    'Chicken': 'Frango',
    'Dessert': 'Sobremesa',
    'Lamb': 'Cordeiro',
    'Pasta': 'Massa',
    'Pork': 'Porco',
    'Seafood': 'Frutos do Mar',
    'Vegetarian': 'Vegetariana',
    'Breakfast': 'Café da Manhã'
  };

  // TRADUTOR DE REGIÕES
  areaTranslations: { [key: string]: string } = {
    'Brazilian': 'Brasileira',
    'Portuguese': 'Portuguesa',
    'Italian': 'Italiana',
    'Mexican': 'Mexicana',
    'American': 'Americana',
    'French': 'Francesa',
    'Chinese': 'Chinesa',
    'Japanese': 'Japonesa'
  };

  constructor(private api: ApiService) {}

  // CARREGAR CULINÁRIA
  loadCuisine(cuisine: string) {
    this.loading = true;
    this.meals = [];
    this.selectedMeal = null;
    this.currentCuisine = this.areaTranslations[cuisine] || cuisine;

    switch(cuisine) {
      case 'Brazilian':
        this.api.getBrazilianMeals().subscribe({
          next: (res: any) => this.handleMealsResponse(res),
          error: () => this.loading = false
        });
        break;
      case 'Portuguese':
        this.api.getPortugueseMeals().subscribe({
          next: (res: any) => this.handleMealsResponse(res),
          error: () => this.loading = false
        });
        break;
      case 'Italian':
        this.api.getItalianMeals().subscribe({
          next: (res: any) => this.handleMealsResponse(res),
          error: () => this.loading = false
        });
        break;
      case 'Mexican':
        this.api.getMexicanMeals().subscribe({
          next: (res: any) => this.handleMealsResponse(res),
          error: () => this.loading = false
        });
        break;
    }
  }

  handleMealsResponse(res: any) {
    if (res.meals) {
      this.meals = res.meals;
    }
    this.loading = false;
  }

  // VER DETALHES DA RECEITA
  viewMealDetails(mealId: string) {
    this.loading = true;
    this.api.getMealById(mealId).subscribe({
      next: (res: any) => {
        if (res.meals && res.meals.length > 0) {
          this.selectedMeal = res.meals[0];
        }
        this.loading = false;
      },
      error: () => this.loading = false
    });
  }

  // RECEITA ALEATÓRIA
  getRandomMeal() {
    this.loading = true;
    this.api.getRandomMeal().subscribe({
      next: (res: any) => {
        if (res.meals && res.meals.length > 0) {
          this.selectedMeal = res.meals[0];
          this.currentCuisine = 'Receita Surpresa';
        }
        this.loading = false;
      },
      error: () => this.loading = false
    });
  }

  // RESETAR PÁGINA
  resetPage() {
    this.meals = [];
    this.selectedMeal = null;
    this.currentCuisine = '';
    this.loading = false;
    window.scrollTo(0, 0);
  }

  // OBTER INGREDIENTES
  getIngredients(): any[] {
    if (!this.selectedMeal) return [];
    
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = this.selectedMeal[`strIngredient${i}`];
      const measure = this.selectedMeal[`strMeasure${i}`];
      
      if (ingredient && ingredient.trim() !== '') {
        ingredients.push({
          ingredient: ingredient,
          measure: measure || ''
        });
      }
    }
    return ingredients;
  }

  getTranslatedCategory(category: string): string {
    return this.categoryTranslations[category] || category;
  }

  getTranslatedArea(area: string): string {
    return this.areaTranslations[area] || area;
  }

  openYoutube() {
    if (this.selectedMeal.strYoutube) {
      window.open(this.selectedMeal.strYoutube, '_blank');
    }
  }
}