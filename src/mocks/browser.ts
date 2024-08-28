import { setupWorker } from 'msw/browser';
import boothRankingHandler from './handlers';

export const worker = setupWorker(...boothRankingHandler);
