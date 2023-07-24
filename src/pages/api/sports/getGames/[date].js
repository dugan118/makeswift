import { Client } from 'pg';



export default async function handler(req, res) {
    let ret
    const client = new Client({
        database: process.env.PGSQL_DATABASE,
        host: process.env.PGSQL_HOST,
        port: process.env.PGSQL_PORT,
        user: process.env.PGSQL_USER,
        password: process.env.PGSQL_PASSWORD,
      });
    await client.connect();

    console.log('req.query : ', req.query)

    let date = req.query.date
    const result = await client.query("SELECT * FROM sport_games WHERE date_of_event=$1",[date])
    
    await client.end();
    res.status(200).json(result.rows);
  }
  