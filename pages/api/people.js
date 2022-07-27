const sqlite = require('sqlite3');

export default async function getPeople(req, res ) {
  const db = new sqlite.Database('./Database/car.db',sqlite.OPEN_READWRITE,(err) => {
    if (err){
        console.error(err.message);
    }
    console.log('Connected to the database.');
  });
  
  await db.all(`SELECT * from Person`,[],(err,rows)=>{
    if (err) {
      return res.json({ error: err.message });
  };
  return res.json(rows);
  });
}