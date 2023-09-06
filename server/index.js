// Importiranje potrebnih modula
const express = require("express");
const bodyParser = require("body-parser");
const mysql = require('mysql');
const cors = require("cors");

// Stvaranje veze s bazom podataka
const configObject = {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "sys"
};
const connection = mysql.createConnection(configObject);

// Povezivanje s bazom podataka
connection.connect((error) => {
    if (error) {
        console.error('Error connecting to database:', error);
    } else {
        console.log('Connected to database');
    }
});

// Stvaranje Express aplikacije
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/nekretnine', (req, res) => {
    const query = `SELECT * FROM nekretnine`;

    connection.query(query, function (err, rows) {
        if (err) {
            res.json({
                msg: 'error'
            });
        } else {
            res.json({
                msg: 'success',
                data: rows
            });
        }
    });
});

app.get('/nekretnine/:id', (req, res) => {

    const query = `SELECT * FROM nekretnine WHERE id=${req.params.id}`;

    connection.query(query, function (err, rows) {
        if (err) {
            res.json({
                msg: 'error'
            });
        } else {
            res.json({
                msg: 'success',
                data: rows[0]
            });
        }
    });
});



app.post('/nekretnine', (req, res) => {
    const { naziv, opis, vrsta, kvadratura, struktura, sprat, novogradnja, renoviran, lift, garaza, grijanje, cijena, slika } = req.body;
    const query = `INSERT INTO nekretnine (id, naziv, opis, vrsta, kvadratura, struktura, sprat, novogradnja, renoviran, lift, garaza, grijanje, cijena, slika) VALUES (NULL, '${naziv}', '${opis}', '${vrsta}', '${kvadratura}', '${struktura}', '${sprat}', ${novogradnja === true}, ${renoviran === true}, ${lift === true}, ${garaza === true}, '${grijanje}', '${cijena}', '${slika}')`;

    connection.query(query, function (err, rows) {
        if (err) {
            console.log(err);
            res.json({
                msg: 'error'
            });
        } else {
            res.json({
                msg: 'success',
                data: rows
            });
        }
    });

});



app.get('/agenti', (req, res) => {
    const query = `SELECT * FROM agenti`;

    connection.query(query, function (err, rows) {
        if (err) {
            res.json({
                msg: 'error'
            });
        } else {
            res.json({
                msg: 'success',
                data: rows
            });
        }
    });
});


app.get('/upiti', (req, res) => {
    const query = `SELECT * FROM upiti`;

    connection.query(query, function (err, rows) {
        if (err) {
            res.json({
                msg: 'error'
            });
        } else {
            res.json({
                msg: 'success',
                data: rows
            });
        }
    });
});

app.get('/lokacije', (req, res) => {
    const query = `SELECT * FROM lokacije`;

    connection.query(query, function (err, rows) {
        if (err) {
            res.json({
                msg: 'error'
            });
        } else {
            res.json({
                msg: 'success',
                data: rows
            });
        }
    });
});


app.post('/upit', (req, res) => {
    const { email, brojTelefona, poruka, idNekretnine } = req.body;
    const query = `INSERT INTO upiti (id, email, broj_telefona, poruka, idNekretnine) VALUES (NULL, '${email}', '${brojTelefona}', '${poruka}', '${idNekretnine}');`;

    connection.query(query, function (err, rows) {
        if (err) {
            console.log(err);
            res.json({
                msg: 'error'
            });
        } else {
            res.json({
                msg: 'success',
                data: rows
            });
        }
    });


});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const query = `SELECT * FROM korisnici WHERE email='${email}'`;

    connection.query(query, function (err, rows) {
        if (err) {
            res.json({
                msg: 'error'
            });
        } else {
            if (rows[0].password === password) {
                res.status(200).json({ success: true, message: 'Login successful', isAdmin: rows[0].admin, name: rows[0].name });
            } else {
                res.status(401).json({ success: false, message: 'Invalid email or password' });
            }
        }
    });


});

// Pokretanje servera
const port = 3002;
app.listen(port, () => {
    console.log('Server started on port ' + port);
});