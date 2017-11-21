import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Category} from './category';


@Injectable()
export class CategoriesService {

	private _categories: Category[];
	private _http: HttpClient;

	constructor(http: HttpClient) {
		this._http  = http;
		this._categories = [];
		http.get<Category[]>('https://mycheck-menus-dev.s3.amazonaws.com/9272/menu_general.json')
			.subscribe(response => this._categories = response )

	}

	public get categories(): Category[] {
		this._categories = this._categories.filter( (categories => categories.Name  != "test class" ));
		this._categories.sort( (function(a,b) {return (a.id < b.id) ? 1 : ((b.id < a.id) ? -1 : 0);}) );
		return this._categories;
	}

}
