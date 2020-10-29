import { Component, OnInit, EventEmitter, Output  } from '@angular/core';
import { Bet, BetService } from '../bet.service';
import 'rxjs/Rx';

@Component({
    selector: 'app-bet-form',
    templateUrl: './bet-form.component.html',
    styleUrls: ['./bet-form.component.css']
})

export class BetFormComponent implements OnInit {

    errors: string = '';
    isLoading: boolean = false;

    constructor(private betService: BetService) { }

    @Output()
    betAdded: EventEmitter<Bet> = new EventEmitter<Bet>();

    ngOnInit() {
    }

    addBet(note) {
        this.isLoading = true;
        this.betService
            .addBet({
              note: note
            })
            .subscribe(
                bet => {
                    this.isLoading = false;
                    bet.isUpdating = false;
                    this.betAdded.emit(bet);
                },
                error => {
                    this.errors = error.json().message;
                    this.isLoading = false;
                }
            );
    }
}
