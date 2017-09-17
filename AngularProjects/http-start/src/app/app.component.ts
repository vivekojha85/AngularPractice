import { Component } from '@angular/core';
import {ServerServiceS} from './server.service.s';
import {Response} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servers = [
    {
      name: 'Testserver',
      capacity: 10,
      id: this.generateId()
    },
    {
      name: 'Liveserver',
      capacity: 100,
      id: this.generateId()
    }
  ];
  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }

  constructor(private serverService: ServerServiceS){}

  onSave(){
    this.serverService.storeServers(this.servers)
      .subscribe(
        (response) => console.log(response),
        (error) => console.error()
      );
  }

  // onGet(){
  //   this.serverService.getSevers().subscribe(
  //     (response: Response) =>{
  //       console.log(response);
  //       const data = response.json();
  //       console.log(data);
  //     },
  //     (error2) => console.log(error2)
  //   );
  // }
  //
  // onGet(){
  //   this.serverService.getSevers().subscribe(
  //     (servers: any[]) =>{ console.log(servers);},
  //     (error2) => console.log(error2)
  //   );
  // }


  onGet(){
    this.serverService.getSevers().subscribe(
      (servers: any[]) =>{ this.servers = servers},
      (error2) => console.log(error2)
    );
  }

  private generateId() {
    return Math.round(Math.random() * 10000);
  }
}
