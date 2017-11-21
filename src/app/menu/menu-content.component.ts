import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CategoriesService } from "./categories.service";
import { Category } from "./category";

@Component({
  selector: 'app-menu-content',
  template: `
      <div class="container" *ngIf="categoriesService.categories.length > 0">
          <app-menu-head [categories]="categoriesService.categories"></app-menu-head>
          <app-menu-list [categories]="categoriesService.categories"></app-menu-list>
      </div>
  `,
  styles: []
})
export class MenuContentComponent implements AfterViewInit{

	public categoriesService: CategoriesService;
	private cd: ChangeDetectorRef;



	constructor(categoryService: CategoriesService, cd: ChangeDetectorRef) {
		this.categoriesService = categoryService;
		this.cd = cd;
	}


	ngAfterViewInit() {
		this.cd.detectChanges();
	}

}
