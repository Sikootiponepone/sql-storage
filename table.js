const sqlite = require('sqlite3').verbose();


const db = new sqlite.Database('./Database/car.db',sqlite.OPEN_READWRITE,(err) => {
    if(err){
        console.error(err.message);
    }
    console.log('Connected to the database.');
});

const sql = `CREATE TABLE Person (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        email TEXT
    )`;

const sql2 = `CREATE TABLE Vehicle (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        brand TEXT,
        model TEXT,
        ownerId INTEGER REFERENCES Person(id)
    )`;

db.run(sql,(err) => {
    if(err){
        console.error(err.message);
    }
    console.log('Person Table created successfully.');
});

db.run(sql2,(err) => {
    if(err){
        console.error(err.message);
    }
    console.log('Vehicle Table created successfully.');
});


