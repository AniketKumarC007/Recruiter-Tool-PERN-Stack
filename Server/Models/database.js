
const Pool = require("pg").Pool;

// const pool = new Pool({
//   user: "postgres",
//   password: "12345",
//   host: "localhost",
//   port: 5432,
//   database: "candidate"
// });

  const pool = new Pool({
    connectionString:"postgres://default:xQvCAhWEj1b8@ep-ancient-shape-a4l3l47j-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require",
  })
 
pool.connect((err)=>{
  if (err) {
    console.log (err) ;
  }
  else console.log ("Connection to db was successfull")
})
// console.log("herer") ;
module.exports = pool;
