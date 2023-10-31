import mysql from 'mysql2';

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '5679',
    database: 'huiseongdatabase'
});

db.connect();

export default db;