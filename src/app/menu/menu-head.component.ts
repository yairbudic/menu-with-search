import { Component, Input, OnInit } from '@angular/core';
import { Category } from "./category";
import { FormControl, FormGroup } from "@angular/forms";
import { Item } from "./item";

@Component({
  selector: 'app-menu-head',
  template: `
      <div class="search_block">
        <form [formGroup]="searchForm" novalidate>     
          <input class="form-control"
                 formControlName="searchString"
                 [placeholder]="'Search'"
                 (change)="onChange($event)"
                 (keyup)="onChange($event)">
        </form>
        <div *ngIf="searchItems.length > 0" class="search_content">
          <h2>Search results for - {{searchValue}}</h2>
            <ul class="items search_items">
                <app-menu-items-list [items]="searchItems" [searchValue]="searchValue"></app-menu-items-list>
            </ul>
        </div>
      </div>
  `,
  styles: []
})
export class MenuHeadComponent implements OnInit {
    allItems: Item[];
    searchItems: Item[] = [];
    searchValue: string = '';
    searchForm= new FormGroup({
		searchString:  new FormControl()
    });
	@Input() categories: Category[];

	onChange(event){
		let newValue = event.target.value;
        if(newValue.length > 2 ){
			this.searchValue = this.searchForm.get('searchString').value;
            this.searchItems = this.allItems.filter(function(item) {
                if(item.Name.toLowerCase().search(newValue.toLowerCase())>-1 || item.Description.toLowerCase().search(newValue.toLowerCase())>-1){
                  return true;
                }
                return false;
			})
		}else{
			this.searchValue = '';
			this.searchItems = [];
        }

    }

    ngOnInit() {
	    let itemsList = [];
		let mapResults = this.categories.map(a => a.Items);
		for (let i = 0, len = mapResults.length; i < len; i++) {
		  if(typeof mapResults[i] !== 'undefined'){
			  for (let j = 0, len = mapResults[i].length; j < len; j++) {
				  itemsList.push( mapResults[i][j]);
			  }
          }

		}
		this.allItems = itemsList;
    }



}
