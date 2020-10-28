import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})

enum LottoType {
  lotto,
  powerball
}

export class LottoService {

  getRandom(min, max, low, high) {
    let numbers = new Set();
    for (var i = 0; i <= this.getRandom(1, 1, min, max).pop(); i++){
      numbers.add(Math.floor(Math.random() * (high - low + 1)) + low);
    }
    return Array.from(numbers);
  }

  getGame(lottoType){
    switch (lottoType) {
      case LottoType.lotto:
        return {
          minAmount: 5,
          maxAmount: 7,
          lowNumber: 40,
          hightNumber: 49
        }
        break;
        case LottoType.powerball:
          return {
            minAmount: 5,
            maxAmount: 49,
            lowNumber: 0,
            hightNumber: 3
          }
          break;
    }
  }

  getDraw() {
    return {
      lotto: this.getGame(LottoType.lotto),
      powerball: this.getGame(LottoType.powerball),
    };
  }
}
