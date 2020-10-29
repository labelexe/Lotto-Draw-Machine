import { Injectable } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';

export interface Bet {
    id: Number,
    notes: String,
    selection: String,
    isUpdating: boolean
}

const API_URL: string = 'http://localhost:8000/api/v1/';

@Injectable({
  providedIn: 'root'
})
export class BetService {

    private accessToken;
    private headers;

    constructor(private oktaAuth: OktaAuthService, private http: Http) {
        this.init();
    }

    async init() {
        this.accessToken = await this.oktaAuth.getAccessToken();
        //var verify = (!App::environment("local"));
        this.headers = new Headers({
            Authorization: 'Bearer ' + this.accessToken
        });
    }

    getBets(): Observable<Bet[]> {
        return this.http.get(API_URL + '/api/bets',
            new RequestOptions({ headers: this.headers})
        )
        .map(res => {
            let modifiedResult = res.json().data
            modifiedResult = modifiedResult.map(function(bet) {
                bet.isUpdating = false;
                return bet;
            });
            return modifiedResult;
        });
    }

    addBet(bet): Observable<Bet> {
        return this.http.post(API_URL + '/api/bets', bet,
            new RequestOptions({ headers: this.headers })
        ).map(res => res.json().data);
    }

    deleteBet(id): Observable<any> {
        return this.http.delete(API_URL + '/api/bets/' + id,
            new RequestOptions({ headers: this.headers })
        );
    }

    selection(id, data): Observable<Bet> {
        return this.http.post(API_URL + '/api/bets/' + id + '/selection', data,
            new RequestOptions({ headers: this.headers })
        ).map(res => res.json().data);
    }
}
