/* tslint:disable */
import { Injectable } from 'angular2/core';
import { Http, Response, Headers, URLSearchParams } from 'angular2/http';
import { UserModel, Object, RegisterExternalBindingModel, CategoryDTO, CategoryBuildDTO, CourseDTO, CourseBuildDTO, CourseDetailDTO, UserDTO, Date, Course, Location, User, Category } from './models';
import 'rxjs/Rx';


@Injectable()
/**
 * Created with angular2-swagger-client-generator v
 */
export class ApiClientService {
	domain:string;
  
  constructor(public http: Http){
    this.domain = 'https://findmyfitness.azurewebsites.net';
  }
  /*
	constructor(public http: Http, options?: any) {
		var domain = (typeof options === 'object') ? options.domain : options;
		this.domain = typeof(domain) === 'string' ? domain : '';
		
		if(this.domain.length === 0) {
			throw new Error('Domain parameter must be specified as a string.');
		}
		
	}
  */


	/**
  *
	* @method
	* @name Account_Register
	* @param {UserModel} userModel - 
	* 
	*/
	public Account_Register(userModel: UserModel) {
		let payload = {};	
		let queryParameters = new URLSearchParams();
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		
			
		payload['userModel'] = userModel;
		let uri = `/api/Account/Register`;
	  
		return this.http
			.post(this.domain + uri, JSON.stringify(userModel), { headers: headers, search: queryParameters })
			.map((res: Response) => {
        return res;
      });
	}
	
	/**
  *
	* @method
	* @name Account_GetExternalLogin
	* @param {string} provider - 
	* @param {string} error - 
	* 
	*/
	public Account_GetExternalLogin(provider: string, error: string) {
		let payload = {};	
		let queryParameters = new URLSearchParams();
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		
      
		if(provider !== undefined){
			queryParameters.set('provider', provider);
		}
			
      
		if(error !== undefined){
			queryParameters.set('error', error);
		}
			
		let uri = `/api/Account/ExternalLogin`;
	  
		return this.http
			.get(this.domain + uri, { headers: headers, search: queryParameters })
			.map((res: Response) => {
        return res;
      });
	}
	
	/**
  *
	* @method
	* @name Account_RegisterExternal
	* @param {RegisterExternalBindingModel} model - 
	* 
	*/
	public Account_RegisterExternal(model: RegisterExternalBindingModel) {
		let payload = {};	
		let queryParameters = new URLSearchParams();
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		
			
		payload['model'] = model;
		let uri = `/api/Account/RegisterExternal`;
	  
		return this.http
			.post(this.domain + uri, JSON.stringify(model), { headers: headers, search: queryParameters })
			.map((res: Response) => {
        return res;
      });
	}
	
	/**
  *
	* @method
	* @name Account_ObtainLocalAccessToken
	* @param {string} provider - 
	* @param {string} externalAccessToken - 
	* 
	*/
	public Account_ObtainLocalAccessToken(provider: string, externalAccessToken: string) {
		let payload = {};	
		let queryParameters = new URLSearchParams();
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		
      
		if(provider !== undefined){
			queryParameters.set('provider', provider);
		}
			
      
		if(externalAccessToken !== undefined){
			queryParameters.set('externalAccessToken', externalAccessToken);
		}
			
		let uri = `/api/Account/ObtainLocalAccessToken`;
	  
		return this.http
			.get(this.domain + uri, { headers: headers, search: queryParameters })
			.map((res: Response) => {
        return res;
      });
	}
	
	/**
  *
	* @method
	* @name Categories_GetCategories
	* 
	*/
	public Categories_GetCategories() {
		let payload = {};	
		let queryParameters = new URLSearchParams();
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		
		let uri = `/api/categories`;
	  
		return this.http
			.get(this.domain + uri, { headers: headers, search: queryParameters })
			.map((res: Response) => {
        return res;
      });
	}
	
	/**
  *
	* @method
	* @name Categories_AddCategory
	* @param {CategoryBuildDTO} category - 
	* 
	*/
	public Categories_AddCategory(category: CategoryBuildDTO) {
		let payload = {};	
		let queryParameters = new URLSearchParams();
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		
			
		payload['category'] = category;
		let uri = `/api/categories`;
	  
		return this.http
			.post(this.domain + uri, JSON.stringify(category), { headers: headers, search: queryParameters })
			.map((res: Response) => {
        return res;
      });
	}
	
	/**
  *
	* @method
	* @name Categories_GetCategory
	* @param {string} name - 
	* 
	*/
	public Categories_GetCategory(name: string) {
		let payload = {};	
		let queryParameters = new URLSearchParams();
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		
			
		let uri = `/api/categories/${name}`;
	  
		return this.http
			.get(this.domain + uri, { headers: headers, search: queryParameters })
			.map((res: Response) => {
        return res;
      });
	}
	
	/**
  *
	* @method
	* @name Courses_GetCourses
	* @param {string} q - 
	* 
	*/
	public Courses_GetCourses(q: string) {
		let payload = {};	
		let queryParameters = new URLSearchParams();
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		
      
		if(q !== undefined){
			queryParameters.set('q', q);
		}
			
		let uri = `/api/courses`;
	  
		return this.http
			.get(this.domain + uri, { headers: headers, search: queryParameters })
			.map((res: Response) => {
        return res;
      });
	}
	
	/**
  *
	* @method
	* @name Courses_AddCourse
	* @param {CourseBuildDTO} course - 
	* 
	*/
	public Courses_AddCourse(course: CourseBuildDTO) {
		let payload = {};	
		let queryParameters = new URLSearchParams();
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		
			
		payload['course'] = course;
		let uri = `/api/courses`;
	  
		return this.http
			.post(this.domain + uri, JSON.stringify(course), { headers: headers, search: queryParameters })
			.map((res: Response) => {
        return res;
      });
	}
	
	/**
  *
	* @method
	* @name Courses_GetCourse
	* @param {integer} id - 
	* 
	*/
	public Courses_GetCourse(id: number) {
		let payload = {};	
		let queryParameters = new URLSearchParams();
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		
			
		let uri = `/api/courses/${id}`;
	  
		return this.http
			.get(this.domain + uri, { headers: headers, search: queryParameters })
			.map((res: Response) => {
        return res;
      });
	}
	
	/**
  *
	* @method
	* @name Users_GetUsers
	* 
	*/
	public Users_GetUsers() {
		let payload = {};	
		let queryParameters = new URLSearchParams();
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		
		let uri = `/api/users`;
	  
		return this.http
			.get(this.domain + uri, { headers: headers, search: queryParameters })
			.map((res: Response) => {
        return res;
      });
	}
	
	/**
  *
	* @method
	* @name Users_GetUser
	* @param {integer} id - 
	* 
	*/
	public Users_GetUser(id: number) {
		let payload = {};	
		let queryParameters = new URLSearchParams();
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		
			
		let uri = `/api/users/${id}`;
	  
		return this.http
			.get(this.domain + uri, { headers: headers, search: queryParameters })
			.map((res: Response) => {
        return res;
      });
	}
	

}
