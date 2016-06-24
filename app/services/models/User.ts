/* tslint:disable */
import { Course } from "./Course"

export class User {
		id: number;
		providerID: string;
		name: string;
		participatedCourses: Course[];

		hostedCourses: Course[];
}
