/* tslint:disable */
import { CategoryDTO } from "./CategoryDTO"

export class CourseDTO {
		id: number;
		title: string;
		participantsCount: number;
		participantsMaximum: number;

		category: CategoryDTO;
}
