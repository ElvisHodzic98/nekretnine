import { useEffect, useState } from "react";
import $ from 'jquery';
import { Nekretnina } from "../../components/nekretnina/nekretnina";

export const Nekretnine = ({ tekst }) => {
    const [nekretnine, setNekretnine] = useState([]);
    function ucitajNekretnine() {
        $.ajax({
            url: "http://localhost:3002/nekretnine",
            type: "GET",
            dataType: 'json',
            success: function (result) {
                console.log(result)
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
}
