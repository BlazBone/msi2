const express = require('express');
const cors = require('cors');
const Pool = require('pg').Pool;
const port = process.env.PORT;
const app = express();
app.use(cors());
app.use(express.json());
// const client = new Client({
//     host: 'localhost',
//     user: 'myadmin',
//     port: 5432,
//     password: 'mypassword',
//     database: 'postgres',
// });

// const pool = new Pool({
//     host: 'localhost',
//     user: 'myadmin',
//     port: 5432,
//     password: 'mypassword',
//     database: 'postgres',
// });
const pool = new Pool();
// pool.query(`CREATE TABLE ocene (
//   ocena integer NOT NULL,
//   predmet varchar(255) NOT NULL,
//   PRIMARY KEY (predmet)`);
app.get('/now', async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT NOW()');
        res.status(200).send(rows[0].now);
    } catch (err) {
        console.log(err);
    }
});

// app.post('/dodajPredmet', async (req, res) => {
//     try {
//         const { rows } = await pool.query('CREATE TABLE ocene(ocena INT)');
//         res.status(200).send(rows[0].now);
//     } catch (err) {
//         console.log(err);
//     }
// });
app.post('/dodajPredmet', async (req, res) => {
    try {
        await pool.query(`CREATE TABLE IF NOT EXISTS  ocene (
          ocena integer NOT NULL,
          predmet varchar(255) NOT NULL,
          PRIMARY KEY (predmet))`);

        const { ocena, predmet } = req.body;
        console.log(ocena, predmet);
        const { rows } = await pool.query(`
INSERT INTO ocene(ocena, predmet)VALUES(${ocena},'${predmet}')
`);
        res.status(200).send(rows);
    } catch (err) {
        console.log(err);
    }
});
app.get('/vseOcene', async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM ocene');
        res.status(200).send(rows);
        console.log(rows);
    } catch (err) {
        console.log(err);
    }
});
app.listen(port, () => {
    console.log(`api listening at http://0.0.0.0:${port}`);
});
