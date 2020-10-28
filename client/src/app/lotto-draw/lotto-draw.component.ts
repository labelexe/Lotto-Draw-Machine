import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { Client, ClientService } from '../client.service';
import { LottoService } from '../lotto.service';
import 'rxjs/Rx';

@Component({
  selector: 'app-lotto-draw',
  templateUrl: './lotto-draw.component.html',
  styleUrls: ['./lotto-draw.component.css']
})
export class LottoDrawComponent implements OnInit {

    clients: Client[];
    question: any;
    errorMessage: string;
    isLoading: boolean = true;

    constructor(private clientService: ClientService,
                private lottoService: LottoService,
                private oktaAuth: OktaAuthService) { }

    async ngOnInit() {
        await this.oktaAuth.getAccessToken();
        this.getClients();
        this.getQuestion();
    }

    getClients() {
        this.clientService
            .getClients()
            .subscribe(
                clients => {
                    this.clients = clients
                    this.isLoading = false
                },
                error => {
                    this.errorMessage = <any>error
                    this.isLoading = false
                }
            );
    }

    getQuestion() {
        this.lottoService
            .getQuestion()
            .subscribe(
                question => this.question = question,
                error => this.errorMessage = <any>error
            );
    }

    findClient(id): Client {
        return this.clients.find(client => client.id === id);
    }

    isUpdating(id): boolean {
        return this.findClient(id).isUpdating;
    }

    appendClient(client: Client) {
        this.clients.push(client);
    }

    deleteClient(id) {
        let client = this.findClient(id)
        client.isUpdating = true
        this.clientService
            .deleteClient(id)
            .subscribe(
                response => {
                    let index = this.clients.findIndex(client => client.id === id)
                    this.clients.splice(index, 1)
                    client.isUpdating = false
                },
                error => {
                    this.errorMessage = <any>error
                    client.isUpdating = false
                }
            );
    }

    rightAnswer(id) {
        let data = {
            correct: true
        }
        this.answer(id, data)
    }

    wrongAnswer(id) {
        let data = {
            correct: false
        }
        this.answer(id, data)
    }

    answer(id, data) {
        let client = this.findClient(id)
        client.isUpdating = true
        this.clientService
            .answer(id, data)
            .subscribe(
                response => {
                    client.answers = response.answers
                    client.points = response.points
                    client.isUpdating = false
                },
                error => {
                    this.errorMessage = <any>error
                    client.isUpdating = false
                }
            );
    }
}
