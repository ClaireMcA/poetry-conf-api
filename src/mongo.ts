import { Db, MongoClient } from 'mongodb';
import { environment } from './env/environment';

const mongoUri = process.env.MONGODB_URI || environment.connectionString;
export var db: Db;

export function initDb() {
    return MongoClient.connect(mongoUri).then(client => {
        db = client.db('poetry-conf');
    });
}
