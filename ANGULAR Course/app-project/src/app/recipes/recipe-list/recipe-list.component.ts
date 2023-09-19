import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[] = [
    new Recipe('A test name','A test description','https://assets.epicurious.com/photos/63ea6ba855007bc33c26ba0b/1:1/w_1920,c_limit/Shakshuka_RECIPE_020923_47096.jpg')
  ];

  constructor(){

  }

  ngOnInit(): void {
    
  }
}
