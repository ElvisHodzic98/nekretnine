import $ from 'jquery';
import { Nekretnina } from "../../components/nekretnina/nekretnina";
import './style.css';
import { useEffect, useState } from 'react';

export const Nekretnine = () => {
    const [nekretnine, setNekretnine] = useState([]);
    function ucitajNekretnine() {
       
        $.ajax({
            url: "http://localhost:3002/nekretnine",
            type: "GET",
            dataType: 'json',
            success: function (result) {
    setNekretnine(result.data);
            }
        });
    }
    useEffect(() => {
        ucitajNekretnine();
    }, []);
    
    return <div>
        <section className="item-wrapper">
            {nekretnine.map((n, i) => {
                return <Nekretnina key={i} nekretnina={n} />;
            })}
        </section>
    </div>
};