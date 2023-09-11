import $ from 'jquery';
import { Upit } from "../../components/upit/upit";
import './style.css';
import { useEffect, useState } from 'react';

export const Upiti = () => {
    const [upiti, setUpiti] = useState([]);
    function ucitajUpite() {
      
        $.ajax({
            url: "http://localhost:3002/upiti",
            type: "GET",
            dataType: 'json',
            success: function (result) {
                setUpiti(result.data);
            }
        });
    }
    useEffect(() => {
        ucitajUpite();
    }, []);

    return <div>
        <section className="upiti-wrapper">
            {upiti.map((u, i) => {
                return <Upit key={i} upit={u} />;
            })}
        </section>
    </div>;
};