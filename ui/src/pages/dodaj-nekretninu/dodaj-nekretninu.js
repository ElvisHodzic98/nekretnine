import { useState } from "react";
import "./style.css";
import $ from 'jquery';


export const DodajNekretninu = () => {
    const [naziv, setNaziv] = useState("");
    const [opis, setOpis] = useState("");
    const [vrsta, setVrsta] = useState("");
    const [kvadratura, setKvadratura] = useState(0);
    const [struktura, setStruktura] = useState("");
    const [sprat, setSprat] = useState(0);
    const [novogradnja, setNovogradnja] = useState(false);
    const [renoviran, setRenoviran] = useState(false);
    const [lift, setLift] = useState(false);
    const [garaza, setGaraza] = useState(false);
    const [grijanje, setGrijanje] = useState('');
    const [cijena, setCijena] = useState(null);
    const [slika, setSlika] = useState('');




    function handleSubmit(event) {
        event.preventDefault();

        $.ajax({
            url: "http://localhost:3002/nekretnine",
            type: "POST",
            dataType: 'json',
            data: {
                naziv, opis, vrsta, kvadratura, struktura, sprat, novogradnja, renoviran, lift, garaza, grijanje, cijena, slika
            },
            success: function (result) {
                window.location.href = '/nekretnine';
            },
            error: function (error) {
                alert('nok');
            }
        });
    }


    return <div className="dodaj-nekretninu">
        <form onSubmit={handleSubmit} className="dodaj-nekretninu-forma">
            <div className="container">
                <label htmlFor="naziv">Naziv</label>
                <input required onChange={(e) => setNaziv(e.target.value)} type="text" placeholder="Naziv" name="naziv"></input>

                <label htmlFor="opis">Opis</label>
                <input required onChange={(e) => setOpis(e.target.value)} type="text" placeholder="Opis" name="opis"></input>

                <label htmlFor="vrsta">Vrsta</label>
                <input required onChange={(e) => setVrsta(e.target.value)} type="text" placeholder="Vrsta" name="vrsta"></input>

                <label htmlFor="kvadratura">Kvadratura</label>
                <input required onChange={(e) => setKvadratura(e.target.value)} type="number" placeholder="Kvadratura" name="kvadratura"></input>

                <label htmlFor="struktura">Struktura</label>
                <input required onChange={(e) => setStruktura(e.target.value)} type="text" placeholder="Struktura" name="struktura"></input>

                <label htmlFor="sprat">Sprat</label>
                <input required onChange={(e) => setSprat(e.target.value)} type="text" placeholder="Sprat" name="sprat"></input>

                <label htmlFor="novogradnja">Novogradnja</label>
                <input onChange={(e) => setNovogradnja(e.target.value)} type="checkbox" placeholder="Novogradnja" name="novogradnja"></input>

                <label htmlFor="renoviran"><b>Renoviran</b></label>
                <input type="checkbox" placeholder="Renoviran" name="renoviran" checked={renoviran}
                    onChange={(e) => setRenoviran(e.target.checked)} />

                <label htmlFor="lift"><b>Lift</b></label>
                <input type="checkbox" placeholder="Lift" name="lift" checked={lift}
                    onChange={(e) => setLift(e.target.checked)} />

                <label htmlFor="garaza"><b>Garaza</b></label>
                <input type="checkbox" placeholder="Garaza" name="garaza" checked={garaza}
                    onChange={(e) => setGaraza(e.target.checked)} />

                <label htmlFor="grijanje"><b>Grijanje</b></label>
                <input type="text" placeholder="Grijanje" name="grijanje" required
                    onChange={(e) => setGrijanje(e.target.value)} />

                <label htmlFor="cijena"><b>Cijena</b></label>
                <input type="number" placeholder="Cijena" name="cijena" required
                    onChange={(e) => setCijena(e.target.value)} />

                <label htmlFor="slika"><b>Slika</b></label>
                <input type="text" placeholder="URL Slike" name="slika" required
                    onChange={(e) => setSlika(e.target.value)} />




                <button type="submit">Dodaj nekretninu</button>

            </div>
        </form>
    </div>
}

