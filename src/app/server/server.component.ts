import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    //selector : '[app-server]',
    // selector: '.app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})

export class ServerComponent {
    serverID: number = 1731710037;
    serverStatus = 'offline';

    getServerStatus(){
        return this.serverStatus;
    }
}