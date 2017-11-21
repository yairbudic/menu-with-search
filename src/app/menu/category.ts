import { Item } from "./item";

export class Category {
	public id: number;
	public active: boolean;
	public Name: string;
	public Description: string;
	public Items: Item[];
}