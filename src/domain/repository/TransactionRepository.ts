import { Transaction } from '../entity/Transaction';

export interface TransactionRepository {
  save(transaction: Transaction): Promise<void>;
  get(code: string): Promise<Transaction>;
}
