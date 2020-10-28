import { Component, OnInit, EventEmitter, Output  } from '@angular/core';
import { Client, ClientService } from '../Client.service';
import 'rxjs/Rx';

@Component({
    selector: 'app-Client-form',
    templateUrl: './Client-form.component.html',
    styleUrls: ['./Client-form.component.css']
})

export class ClientFormComponent implements OnInit {

    errors: string = '';
    isLoading: boolean = false;

    constructor(private ClientService: ClientService) { }

    @Output()
    ClientAdded: EventEmitter<Client> = new EventEmitter<Client>();

    ngOnInit() {
    }

    addClient(name) {
        this.isLoading = true;
        this.ClientService
            .addClient({
                name: name
            })
            .subscribe(
                Client => {
                    this.isLoading = false;
                    Client.isUpdating = false;
                    this.ClientAdded.emit(Client);
                },
                error => {
                    this.errors = error.json().message;
                    this.isLoading = false;
                }
            );
    }
}
