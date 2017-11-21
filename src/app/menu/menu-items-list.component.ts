import { Component, Input, OnInit } from '@angular/core';
import { Item } from "./item";

@Component({
  selector: 'app-menu-items-list',
  template: `
          <li *ngFor="let item of items">
              <div class="item">
                  <b [innerHtml] = "item.Name | highlight:searchValue"></b><b> - </b>
                  <span [innerHtml] = "item.Description | highlight:searchValue"></span>
              </div>
              <div class="itemPrice">{{item.Price}}$</div>
          </li>
  `,
  styles: []
})
export class MenuItemsListComponent implements OnInit {
  @Input() items: Item[];
  @Input() searchValue:string;

  constructor() { }

  ngOnInit() {
  }

}
