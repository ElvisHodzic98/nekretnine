import $ from 'jquery';
import { Agent } from "../../components/agent/agent";
import './style.css';
import { useEffect, useState } from 'react';

export const Agenti = () => {
    const [agenti, setAgenti] = useState([]);
    function ucitajAgente() {
        $.ajax({
            url: "http://localhost:3002/agenti",
            type: "GET",
            dataType: 'json',
            success: function (result) {
                setAgenti(result.data);
            }
        });
    }
    useEffect(() => {
        ucitajAgente();
        
    }, []);

    return <div>
        <section className="agents-wrapper">
            {agenti.map((a, i) => {
                return <Agent key={i} agent={a} />;
            })}
        </section>
    </div>


        ;
};