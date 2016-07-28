import {Page, Platform} from 'ionic-angular';
import {Injectable} from 'angular2/core';
declare const facebookConnectPlugin:any;

@Injectable()
export class Facebook {
    constructor( platform: Platform ) {
        this.platform = platform;
    }
    platform:any;

    

    login() {

        var p = new Promise((resolve, reject) => {
        if(this.platform.is('cordova')) {
            facebookConnectPlugin.login([ 'email' ], (success) => {
                    console.log(JSON.stringify(success));
                    resolve(success);
                },(err) => {
                    console.log(JSON.stringify(err));
                    reject(err);
                });
            
            } else {
                facebookConnectPlugin.browserInit('251846581843454');
                console.log("Please run me on a device");
                reject('Please run me on a device');
            }
        });
        return p;
    }
   
    getCurrentUserProfile() {
        var p = new Promise((resolve, reject) => {
            facebookConnectPlugin.api('me?fields=email,name', null,
            (profileData) => {
                console.log(JSON.stringify(profileData));
                resolve(profileData);
            },(err) => {
                console.log(JSON.stringify(err));
                reject(err);
            });
        });
        return p;
    }
}
