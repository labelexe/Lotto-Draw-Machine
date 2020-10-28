import { Component, OnInit, EventEmitter, Output  } from '@angular/core';
import { Client, ClientService } from '../client.service';
import 'rxjs/Rx';

@Component({
    selector: 'app-client-form',
    templateUrl: './client-form.component.html',
    styleUrls: ['./client-form.component.css']
})

export class ClientFormComponent implements OnInit {

    errors: string = '';
    isLoading: boolean = false;

    constructor(private clientService: ClientService) { }

    @Output()
    clientAdded: EventEmitter<Client> = new EventEmitter<Client>();

    ngOnInit() {
    }

    addClient(name) {
        this.isLoading = true;
        this.clientService
            .addClient({
                name: name
            })
            .subscribe(
                client => {
                    this.isLoading = false;
                    client.isUpdating = false;
                    this.clientAdded.emit(client);
                },
                error => {
                    this.errors = error.json().message;
                    this.isLoading = false;
                }
            );
    }
}
