import $ from 'jquery';
import { Lokacija } from "../../components/lokacija/lokacija";
import './style.css';
import { useEffect, useState } from 'react';

export const Lokacije = () => {
    const [lokacije, setLokacije] = useState([]);
    function ucitajLokacije() {
        setLokacije([
            {
                "id": 1,
                "filijala": "Sarajevo",
                "adresa": "Drinska bb",
                "telefon": "033123123",
                "email": "nekretnine_sa@gmail.com"
            },
            {
                "id": 3,
                "filijala": "Tuzla",
                "adresa": "Kotromaniceva bb",
                "telefon": "033321321",
                "email": "nekretnine_tz@gmail.com"
            },
            {
                "id": 5,
                "filijala": "Banja Luka",
                "adresa": "Dobojska bb",
                "telefon": "033322321",
                "email": "nekretnine_bl@gmail.com"
            }
        ]);
        // $.ajax({
        //     url: "http://localhost:3002/lokacije",
        //     type: "GET",
        //     dataType: 'json',
        //     success: function (result) {
        //         setLokacije(result.data);
        //     }
        // });
    }
    useEffect(() => {
        ucitajLokacije();
    }, []);

    return <div>
        <section className="lokacije-wrapper">
            {lokacije.map((l, i) => {
                return <Lokacija key={i} lokacija={l} />;
            })}
        </section>
    </div>
};