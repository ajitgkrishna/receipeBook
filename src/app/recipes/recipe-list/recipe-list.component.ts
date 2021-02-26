import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[]=[
    new Recipe('test recipe','test description','https://www.inspiredtaste.net/wp-content/uploads/2020/07/Bean-Salad-Recipe-2-1200.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
