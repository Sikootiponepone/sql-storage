const sqlite = require('sqlite3').verbose();

export default async function getPersonById(req, res ) {
  const db = new sqlite.Database('./Database/car.db',sqlite.OPEN_READWRITE,(err) => {
    if(err){
      console.error(err.message);
    }
    console.log('Connected to the database.');
  });

  if(req.method === 'PUT'){
    const statement = await db.prepare(`UPDATE Person SET name = ?, email = ? WHERE id = ?`);
    const result = await statement.run(req.body.name, req.body.email, req.query.id);
    result.finalize();
  }

  await db.get(`SELECT * FROM Person WHERE id = ?`,[req.query.id],(err,rows)=>{
    if(err){
      console.log(err);
    }
    return res.json(rows);
  });
};