import $ from 'jquery';
import { Lokacija } from "../../components/lokacija/lokacija";
import './style.css';
import { useEffect, useState } from 'react';

export const Lokacije = () => {
    const [lokacije, setLokacije] = useState([]);
    function ucitajLokacije() {
     
        $.ajax({
            url: "http://localhost:3002/lokacije",
            type: "GET",
            dataType: 'json',
            success: function (result) {
                setLokacije(result.data);
            }
        });
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