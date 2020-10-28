import { Injectable } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';

export interface Client {
    id: Number,
    name: String,
    answers: Number,
    points: Number,
    isUpdating: boolean
}

const API_URL: string = 'http://localhost:8000';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

    private accessToken;
    private headers;

    constructor(private oktaAuth: OktaAuthService, private http: Http) {
        this.init();
    }

    async init() {
        this.accessToken = await this.oktaAuth.getAccessToken();
        this.headers = new Headers({
            Authorization: 'Bearer ' + this.accessToken
        });
    }

    getClients(): Observable<Client[]> {
        return this.http.get(API_URL + '/api/clients',
            new RequestOptions({ headers: this.headers })
        )
        .map(res => {
            let modifiedResult = res.json().data
            modifiedResult = modifiedResult.map(function(client) {
                client.isUpdating = false;
                return client;
            });
            return modifiedResult;
        });
    }

    addClient(client): Observable<Client> {
        return this.http.post(API_URL + '/api/clients', client,
            new RequestOptions({ headers: this.headers })
        ).map(res => res.json().data);
    }

    deleteClient(id): Observable<any> {
        return this.http.delete(API_URL + '/api/clients/' + id,
            new RequestOptions({ headers: this.headers })
        );
    }

    answer(id, data): Observable<Client> {
        return this.http.post(API_URL + '/api/clients/' + id + '/answers', data,
            new RequestOptions({ headers: this.headers })
        ).map(res => res.json().data);
    }
}
