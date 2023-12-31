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
    //filters: date, ( later: sport, league, team_name, )
    //console.log('req : ', req)

    const result = await client.query("SELECT * FROM sport_games")
    await client.end();
    res.status(200).json(result.rows);
  }
  