import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { Client, ClientService } from '../client.service';
import { LottoService } from '../lotto.service';
import 'rxjs/Rx';

@Component({
  selector: 'app-lotto-game',
  templateUrl: './lotto-game.component.html',
  styleUrls: ['./lotto-game.component.css']
})
export class LottoGameComponent implements OnInit {

    Clients: Client[];
    errorMessage: string;
    isLoading: boolean = true;

    constructor(private ClientService: ClientService,
                private lottoService: LottoService,
                private oktaAuth: OktaAuthService) { }

    async ngOnInit() {
        await this.oktaAuth.getAccessToken();
        this.getClients();
        this.getResults();
    }

    getClients() {
        this.ClientService
            .getClients()
            .subscribe(
                Clients => {
                    this.Clients = Clients
                    this.isLoading = false
                },
                error => {
                    this.errorMessage = <any>error
                    this.isLoading = false
                }
            );
    }

    findClient(id): Client {
        return this.Clients.find(Client => Client.id === id);
    }

    isUpdating(id): boolean {
        return this.findClient(id).isUpdating;
    }

    appendClient(Client: Client) {
        this.Clients.push(Client);
    }

    deleteClient(id) {
        let Client = this.findClient(id)
        Client.isUpdating = true
        this.ClientService
            .deleteClient(id)
            .subscribe(
                response => {
                    let index = this.Clients.findIndex(Client => Client.id === id)
                    this.Clients.splice(index, 1)
                    Client.isUpdating = false
                },
                error => {
                    this.errorMessage = <any>error
                    Client.isUpdating = false
                }
            );
    }
}
