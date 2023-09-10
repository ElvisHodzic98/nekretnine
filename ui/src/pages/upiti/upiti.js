import $ from 'jquery';
import { Upit } from "../../components/upit/upit";
import './style.css';
import { useEffect, useState } from 'react';

export const Upiti = () => {
    const [upiti, setUpiti] = useState([]);
    function ucitajUpite() {
        setUpiti([
            {
                "id": 4,
                "email": "test@test.com",
                "broj_telefona": "4980298402",
                "poruka": "rjglaeijknzkvnmkmv zd",
                "idNekretnine": 1
            },
            {
                "id": 5,
                "email": "test@test.com",
                "broj_telefona": "2394u209420",
                "poruka": "iehjfoaihroa feoairfjroie gjoaiergj rei agj areogepgoejapog jepgjaegi joigrheogi aejga",
                "idNekretnine": 1
            },
            {
                "id": 6,
                "email": "test@test.com",
                "broj_telefona": "331421414",
                "poruka": "irfjaoeigheaoi efjapoew kfowejepigjaeigj peoar gkeog keagegr",
                "idNekretnine": 1
            },
            {
                "id": 7,
                "email": "test@test.com",
                "broj_telefona": "412111",
                "poruka": "irejioajgiorjig eapgakepg aepgk aivn juahwygiauhnfde",
                "idNekretnine": 1
            },
            {
                "id": 8,
                "email": "test@test.com",
                "broj_telefona": "412111",
                "poruka": "qeqwadfcewfwafe qeqwadfcewfwafe qeqwadfcewfwafe qeqwadfcewfwafe qeqwadfcewfwafe qeqwadfcewfwafe qeqwadfcewfwafe qeqwadfcewfwafe qeqwadfcewfwafe qeqwadfcewfwafe qeqwadfcewfwafe qeqwadfcewfwafe qeqwadfcewfwafe qeqwadfcewfwafe qeqwadfcewfwafe qeqwadfcewfwafe ",
                "idNekretnine": 1
            },
            {
                "id": 9,
                "email": "eorigja@jgmrelikgja.com",
                "broj_telefona": "32424",
                "poruka": "rjkfnailfj paowkjfopw ajfoiehr eorjeo;jiaerjgoreriae gjeigjoiahrg riea oapap arjkfnailfj paowkjfopw ajfoiehr eorjeo;jiaerjgoreriae gjeigjoiahrg riea oapap arjkfnailfj paowkjfopw ajfoiehr eorjeo;jiaerjgoreriae gjeigjoiahrg riea oapap a",
                "idNekretnine": 1
            }]);
        // $.ajax({
        //     url: "http://localhost:3002/upiti",
        //     type: "GET",
        //     dataType: 'json',
        //     success: function (result) {
        //         setUpiti(result.data);
        //     }
        // });
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