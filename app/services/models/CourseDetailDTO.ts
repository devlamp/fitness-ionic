/* tslint:disable */
import { UserDTO } from "./UserDTO"
import { Date } from "./Date"
import { CategoryDTO } from "./CategoryDTO"

export class CourseDetailDTO {
		id: number;
		title: string;
		categoryId: number;
		participantsMaximum: number;
		participants: UserDTO[];

		hosts: UserDTO[];
		dates: Date[];
		category: CategoryDTO;
}
