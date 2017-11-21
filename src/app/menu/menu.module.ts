import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuContentComponent } from './menu-content.component';
import { MenuListComponent } from './menu-list.component';
import { MenuHeadComponent } from './menu-head.component';
import { CategoriesService } from "./categories.service";
import { MenuItemsListComponent } from './menu-items-list.component';
import { HighlightPipe } from "../pipes/highlight.pipe";

@NgModule({
    imports: [
    CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule
    ],
    providers   : [
      {
          provide: CategoriesService,
          useClass: CategoriesService
      }
    ],
    declarations: [MenuContentComponent, MenuListComponent, MenuHeadComponent, MenuItemsListComponent, HighlightPipe],
    exports: [ MenuContentComponent, HighlightPipe ]
})
export class MenuModule { }
