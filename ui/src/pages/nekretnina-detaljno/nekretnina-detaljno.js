import $ from 'jquery';
import './style.css';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
export const NekretninaDetaljno = () => {
    const [nekretnina, setNekretnina] = useState(null);
    const [email, setEmail] = useState('');
    const [poruka, setPoruka] = useState('');
    const [brojTelefona, setBrojTelefona] = useState('');
    let { id } = useParams();
    const handleSubmit = (event) => {
        // Prevent page reload
        event.preventDefault();
        $.ajax({
            url: "http://localhost:3002/upit",
            type: "POST",
            dataType: 'json',
            data: {
                email: email,
                poruka: poruka,
                brojTelefona: brojTelefona,
                idNekretnine: id
            },
            success: function (result) {
                window.location.href = '/nekretnine';
            },
            error: function (error) {
                alert('nok');
            }
        });
    };
    function ucitajNekretninu() {
        $.ajax({
            url: `http://localhost:3002/nekretnine/${id}`,
            type: "GET",
            dataType: 'json',
            success: function (result) {
                setNekretnina(result.data);
            }
        });

    }
    useEffect(() => {
        ucitajNekretninu();
    }, [id]);

    return nekretnina &&
        <div className='nekretnina-detaljno'>
            <div className="detalji">
                <h1 className="naziv">
                    {nekretnina.naziv}
                </h1>
                <div className='slika-detalji'>
                    <img
                        className="slika"
                        src={nekretnina.slika}
                        alt="Real estate Box"
                    />
                    <div className="svojstva">
                        <span>Vrsta: {nekretnina.vrsta}</span>
                        <span>Kvadratura: {nekretnina.kvadratura}</span>
                        <span>Sprat: {nekretnina.sprat}</span>
                        <span>Struktura: {nekretnina.struktura}</span>
                        <span>Novogradnja: {(nekretnina.novogradnja ? "DA" : "NE")}</span>
                        <span>Renoviran: {(nekretnina.renoviran ? "DA" : "NE")}</span>
                        <span>Lift: {(nekretnina.lift ? "DA" : "NE")}</span>
                        <span>Garaza: {(nekretnina.garaza ? "DA" : "NE")}</span>
                        <span>Grijanje: {nekretnina.grijanje}</span>

                        <span className="cijena">Cijena: {nekretnina.cijena}KM</span>
                    </div>
                </div>
            </div>
            <div className='opis'>
                {nekretnina.opis}
            </div>
            <h3>Sviđa ti se nekretnina? Kontaktiraj nas!</h3>
            <form method="post" onSubmit={handleSubmit} className='kontakt-forma'>
                <div className="container">
                    <label htmlFor="email"><b>Email</b></label>
                    <input type="text" placeholder="Email" name="uname" required
                        onChange={(e) => setEmail(e.target.value)} />
                        
                    <label htmlFor="brTel"><b>Broj telefona</b></label>
                    <input type="text" placeholder="Broj telefona" name="brTel" required
                        onChange={(e) => setBrojTelefona(e.target.value)} />

                    <label htmlFor="poruka"><b>Poruka</b></label>
                    <input className='poruka-input' type="text" placeholder="Upiši poruku" name="poruka" required
                        onChange={(e) => setPoruka(e.target.value)} />

                    <button type="submit" >Pošalji upit</button>
                </div>
            </form>
        </div>;
};