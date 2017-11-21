import {
	Component, Input, OnInit
} from '@angular/core';
import { Category } from "./category";
import * as $ from 'jquery';

@Component({
  selector: 'app-menu-list',
  template: `
      <ul class="tabs">
          <li *ngFor="let category of categories" [ngClass]="{ 'active': category.active }" 
		  (click)="selectedCategory(category)">
          {{ category.Name }}
		  </li>
      </ul>
      <div *ngFor="let category  of categories" class="tab_container">
          <h3  class="tab_drawer_heading" [ngClass]="{'d_active': category.active }"
			  (click)="selectedCategory(category)" >
			  {{category.Name}}</h3>
          <div id="{{category.id}}" class="tab_content" [style.display]="category.active ? 'block': 'none'">
              <h2>{{category.Description}}</h2>
              <ul class="items">
			  	<app-menu-items-list [items]="category.Items" ></app-menu-items-list>
			  </ul>
          </div>
      </div>
  `,
  styles: []
})
export class MenuListComponent implements OnInit{
	@Input() categories: Category[];

	ngOnInit(){
		this.selectedCategory(this.categories[0]);
		$('ul.tabs li').last().addClass("tab_last");
	}

	selectedCategory(category:Category) {
		this.categories.forEach((category) => {
			category.active = false;
		});
		category.active=true;
		$(".tab_content").hide();
		$("#"+category.id).fadeIn();
	}

}
