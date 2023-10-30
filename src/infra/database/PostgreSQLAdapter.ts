import { Connection } from './Connection';
import pgp from 'pg-promise';

export class PostgreSQLAdapter implements Connection {
  connection: any;

  constructor() {
    this.connection = pgp()('postgres://ja058700:Th30@2020@localhost:5432/app');
  }

  query(statement: string, params: any): Promise<any> {
    return this.connection.query(statement, params);
  }

  one(statement: string, params: any): Promise<any> {
    return this.connection.one(statement, params);
  }

  close(): Promise<void> {
    return this.connection.$pool.end();
  }
}
