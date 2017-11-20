import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class DeviceapiService {

  private heroesUrl = 'http://132.147.151.57';  // URL to web api

  constructor(private http: Http) { }

  sendInformationToDevice(info: string): Promise<Object> {
    return this.http.get(this.heroesUrl + info)
             .toPromise()
             .then(response => response.json().results as Object)
             .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
