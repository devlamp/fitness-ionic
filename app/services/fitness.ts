import { Injectable, Inject } from 'angular2/core';
import { Http } from 'angular2/http';
import 'rxjs/add/operator/map';

@Injectable()
export class FitnessService {
    userid: String = "5735b85352fc8b2e6824a075";
    //server: String = "http://192.168.178.21:3000/";
    server: string = "http://ec2-52-91-228-142.compute-1.amazonaws.com:3000/"
    constructor( @Inject(Http) private http: Http) {
        this.mapRequest("options", "options").add(() => {
            this.mapRequest("categories", "categories");
            this.refreshUsers();
            this.refreshCourses();
            this.refreshUser();
        });

    }
    
    refreshCourses() {
        return this.mapRequest("courses", "courses");
    }
    
    refreshUser() {
        return this.mapRequest("users?uid=" + this.userid, "user").add(() => {
                this.mapRequest("users/courses?uid=" + this.userid, "mycourses")
                this.mapRequest("users/hosted?uid=" + this.userid, "hostedcourses")
            });
    }
    
    

    mapRequest(query, field) {
        return this.http.get(this.server + query).map(res => res = res.json()).subscribe(
            data => { this[field] = data.json(); },
            (data) => { this[field] = data.json(); }
        );
    }


    request(query) {
        return this.http.get(this.server + query).map(res => res = res.json()).subscribe(
            data => { },
            (data) => { }
        );
    }
    
   
   addCourse(course: any) {
       return this.request("courses/add?course=" + JSON.stringify(course) + "&uid=" + this.userid).add(() => {
            this.refreshUser();
            this.refreshCourses();
        });
   }

    participate(course: any) {
        this.request("courses/participations/add?cid=" + course._id + "&uid=" + this.userid).add(() => {
            this.refreshUser();
            this.refreshCourses();
        });
    }

    departicipate(course: any) {
        this.request("courses/participations/remove?cid=" + course._id + "&uid=" + this.userid).add(() => {
            this.refreshUser();
            this.refreshCourses();
        });
    }

    isParticipating(courseid): Boolean {
        return (this.user.courses.indexOf(courseid) > -1)
    }

    getIcon(category) {
        let output:any;
        this.options.categories.forEach(element => {
            if (element.name === category) {
                output= element.icon;
                return;
            }
        });
        return output;
    }
    
    addUser(name) {
        if (name!=="") {
        this.request("users/add?name="+name).add(()=> {
            this.refreshUsers();
        });
        }
    }
    
    refreshUsers() {
        return this.mapRequest("users", "users");
    }

    categories: any;
    mycourses:any;
    courses: any;
    user: any;
    options: any;
    users: any;




}