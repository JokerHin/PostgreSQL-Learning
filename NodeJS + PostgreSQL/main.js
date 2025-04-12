const { Client } = require("pg");

const con = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "123",
  database: "demopost",
});

con.connect().then(() => {
  console.log("connected");
});

con.query("Select * from demotable", (err, res) => {
  if (!err) {
    console.log(res.rows);
  } else {
    console.log(err.message);
  }
  con.end;
});
