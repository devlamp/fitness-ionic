/* tslint:disable */
import { User } from "./User"
import { Date } from "./Date"
import { Category } from "./Category"

export class Course {
		id: number;
		title: string;
		participantsMaximum: number;
		categoryId: number;
		participants: User[];

		hosts: User[];
		dates: Date[];
		category: Category;
}
