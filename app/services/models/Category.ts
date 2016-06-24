/* tslint:disable */
import { Course } from "./Course"

export class Category {
		id: number;
		name: string;
		parentCategory: string;

		course: Course[];
}
