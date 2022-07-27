const sqlite = require('sqlite3').verbose();

export default async function getAllVehicles(req, res ) {
  const db = new sqlite.Database('./Database/car.db',sqlite.OPEN_READWRITE,(err) => {
    if(err){
      console.error(err.message);
    }
    console.log('Connected to the database.');
  });

  await db.all(`SELECT * FROM Vehicle`,[],(err,rows)=>{
    if(err){
      console.log(err);
    }
    return res.json(rows);
  });
  
};
