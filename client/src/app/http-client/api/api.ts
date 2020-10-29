export * from './bets.service';
import { BetsService } from './bets.service';
export * from './results.service';
import { ResultsService } from './results.service';
export const APIS = [BetsService, ResultsService];
