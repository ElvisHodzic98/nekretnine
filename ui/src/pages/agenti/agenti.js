import $ from 'jquery';
import { Agent } from "../../components/agent/agent";
import './style.css';
import { useEffect, useState } from 'react';

export const Agenti = () => {
    const [agenti, setAgenti] = useState([]);
    function ucitajAgente() {
        setAgenti([
            {
                "id": 1,
                "ime": "Niko Nikic",
                "email": "niko@nikic.com",
                "telefon": "033283929",
                "slika": "https://media.istockphoto.com/id/1300972574/photo/millennial-male-team-leader-organize-virtual-workshop-with-employees-online.jpg?s=612x612&w=0&k=20&c=uP9rKidKETywVil0dbvg_vAKyv2wjXMwWJDNPHzc_Ug="
            },
            {
                "id": 2,
                "ime": "Svako Svakic",
                "email": "svako@svakic.com",
                "telefon": "033283929",
                "slika": "https://media.istockphoto.com/id/1300512215/photo/headshot-portrait-of-smiling-ethnic-businessman-in-office.webp?b=1&s=170667a&w=0&k=20&c=TXCiY7rYEvIBd6ibj2bE-VbJu0rRGy3MlHwxt2LHt9w="
            }
        ]);
        // $.ajax({
        //     url: "http://localhost:3002/agenti",
        //     type: "GET",
        //     dataType: 'json',
        //     success: function (result) {
        //         setAgenti(result.data);
        //     }
        // });
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