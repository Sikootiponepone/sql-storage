const sqlite = require('sqlite3').verbose();


const db = new sqlite.Database('./Database/car.db',sqlite.OPEN_READWRITE, (err) => {
    if (err){
        console.error(err.message);
    }
    console.log('Connected to the database.');
  });



const sql = `INSERT INTO Person (name,email) VALUES(?,?)`;
const sql2 = `INSERT INTO Vehicle (brand,model,ownerId) VALUES(?,?,?)`;

//Person Table Entries
// db.run(sql, ['Sikooti','sikooti@gmail.com'], (err) => {
//     if (err){
//         return res.json({ error: err.message });
//     }
//     console.log('Person Row inserted.');
// });
// db.run(sql, ['PonePone','ponepone@gmail.com'], (err) => {
//   if (err){
//       return res.json({ error: err.message });
//   }
//   console.log('Person Row 2 inserted.');
// });

//Vehicle Table entries
// db.run(sql2, ['Audi','R8','1'], (err) => {
//   if (err){
//       return res.json({ error: err.message });
//   }
//   console.log('Vehicle Row  inserted.');
// });
// db.run(sql2, ['Mercedes','Benz','2'], (err) => {
//   if (err){
//       return res.json({ error: err.message });
//   }
//   console.log('Vehicle Row 2 inserted.');
// });
// db.run(sql2, ['Toyota','Harrier','2'], (err) => {
//   if (err){
//       return res.json({ error: err.message });
//   }
//   console.log('Vehicle Row 2 inserted.');
// });
 
// const sql3 = `SELECT * FROM Person`;
// db.all(sql3,[],(err,rows)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log('Person Table',rows);
// });
// const sql4 = `SELECT * FROM Vehicle`;
// db.all(sql4,[],(err,rows)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log('Vehicle Table',rows);
// });

// let people =db.all(`SELECT * FROM Person`,(rows)=>rows);
// console.log(people)
