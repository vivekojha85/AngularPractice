/**
 * Created by Vivek Ojha on 9/17/17.
 */

import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';

@Injectable()
export class ServerServiceS{

  constructor(private http: Http){}

  storeServers(server: any[]){
    const headers = new Headers({'Content-Type': 'application/json','entityName':'abc'});
  // return  this.http.post('https://myfirstproject-690bd.firebaseio.com/data.json',
  //   server,
  //   {headers: headers});

    return  this.http.put('https://myfirstproject-690bd.firebaseio.com/data.json',
       server,
       {headers: headers});
  }

  getSevers(){
    return this.http.get('https://myfirstproject-690bd.firebaseio.com/data.json');
  }
}
