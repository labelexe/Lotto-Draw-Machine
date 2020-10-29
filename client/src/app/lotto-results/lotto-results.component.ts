import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { Bet, BetService } from '../bet.service';
import 'rxjs/Rx';

@Component({
  selector: 'app-lotto-results',
  templateUrl: './lotto-results.component.html',
  styleUrls: ['./lotto-results.component.css']
})
export class LottoResultComponent implements OnInit {

    bets: Bet[];
    errorMessage: string;
    isLoading: boolean = true;

    constructor(private betService: BetService,
                private oktaAuth: OktaAuthService) { }

    async ngOnInit() {
        await this.oktaAuth.getAccessToken();
        this.getBets();
    }

    getBets() {
        this.betService
            .getBets()
            .subscribe(
                bets => {
                    this.bets = bets
                    this.isLoading = false
                },
                error => {
                    this.errorMessage = <any>error
                    this.isLoading = false
                }
            );
    }

    findBet(id): Bet {
        return this.bets.find(bet => bet.id === id);
    }

    isUpdating(id): boolean {
        return this.findBet(id).isUpdating;
    }

    appendBet(bet: Bet) {
        this.bets.push(bet);
    }

    deleteBet(id) {
        let bet = this.findBet(id)
        bet.isUpdating = true
        this.betService
            .deleteBet(id)
            .subscribe(
                response => {
                    let index = this.bets.findIndex(bet => bet.id === id)
                    this.bets.splice(index, 1)
                    bet.isUpdating = false
                },
                error => {
                    this.errorMessage = <any>error
                    bet.isUpdating = false
                }
            );
    }

    rightSelection(id) {
        let data = {
            correct: true
        }
        this.selection(id, data)
    }

    wrongSelection(id) {
        let data = {
            correct: false
        }
        this.selection(id, data)
    }

    selection(id, data) {
        let bet = this.findBet(id)
        bet.isUpdating = true
        this.betService
            .selection(id, data)
            .subscribe(
                response => {
                    bet.notes = response.notes
                    bet.selection = response.selection
                    bet.isUpdating = false
                },
                error => {
                    this.errorMessage = <any>error
                    bet.isUpdating = false
                }
            );
    }
}
