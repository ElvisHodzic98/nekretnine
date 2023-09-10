import $ from 'jquery';
import { Nekretnina } from "../../components/nekretnina/nekretnina";
import './style.css';
import { useEffect, useState } from 'react';

export const Nekretnine = () => {
    const [nekretnine, setNekretnine] = useState([]);
    function ucitajNekretnine() {
        setNekretnine([
        {
            "id": 1,
            "naziv": "Dvosoban stan - Novo Sarajevo - Dolac Malta - 55 m2",
            "opis": "Stan je površine 73 m2. Sastoji se od dnevnog boravka koji je povezan sa trepezarijom i kuhinjom, dvije spavaće sobe, hodnika, kupatila, wc-a te balkona. Isti posjeduje parking mjesto ispred zgrade, koje je osigurano rampom te video nadzorom. Stan se nalazi na petom spratu u zgradi koja broji 6 spratova, dvostrano orijentisan, istok/zapad te sunčan tokom čitavnog dana, sa otvorenim pogledom.",
            "vrsta": "stan",
            "kvadratura": 73,
            "struktura": "trosoban",
            "sprat": 4,
            "novogradnja": 1,
            "renoviran": 0,
            "lift": 1,
            "garaza": 0,
            "grijanje": "plin",
            "cijena": 330000,
            "slika": "https://trust.ba/wp-content/uploads/2021/01/IMG_4823-1500.jpg"
        },
        {
            "id": 2,
            "naziv": "Kvalitetna kuća i dvorište, Kotorac, Ilidža",
            "opis": "Prodaje se kvalitetno građena kuća, bruto kvadrature cca. 140 m2, spratnosti P+1 sa garažom i lijepo uređenim i prostranim dvorištem na parceli uknjižene površine 724 m2 u mirnom dijelu naselja Donji Kotorac, Ilidža.\r\n\r\n\r\n\r\nPrema informacijama vlasnika kuća je izgrađena 2018. godine i redovno je održavana, a prilikom gradnje su korišteni kvalitetni građevinski materijali.\r\n\r\nU prizemlju se nalaze dvije zasebne stambene jedinice od kojih se jedna sastoji od dnevnog boravka, spavaće sobe, kupatila i kuhinje a druga od dnevnog boravka, kupatila i kuhinje.\r\n\r\nBudući vlasnici imaju mogućnost spajanja ove dvije stambene jedinice čime bi se uz manji građevinski poduhvat ofomila veća stambena funkcionalna stambena cjelina.\r\n\r\nNa prvoj etaži su smješteni dnevni boravak sa izlazom na terasu, dvije spavaće sobe, kuhinja i ostava.\r\n\r\n\r\n\r\nEtaže su povezane kvalitetnim vanjskim stepenicama tako da se mogu koristiti kao zasebne stambene jedinice.\r\n\r\nIspred su garaža i betonirani prostor koji se može koristiti kao parking za nekoliko vozila, a pristup je omogućen sa asfaltirane pristupne ceste.\r\n\r\nKuća je okružena prostranim dvorištem sa lijepo uređenim travnatim površinama i obiljem zelenila kao i mnoštvom stabala voća. Obzirom na ravan teren i samu uređenost dvorišta koje budućim vlasnicima omogućava boravak u potpunoj privatnosti ove nekretnina predstavlja odličnu priliku za one koji žele miran porodični život izvan gradske buke nadomak svih potrebnih sadržaja.\r\n\r\nOno što ovu nekretninu čini još atraktivnijom jeste okruženje u kojem je sagrađeno više modernih stambenih objekata.",
            "vrsta": "kuca",
            "kvadratura": 200,
            "struktura": "petosoban",
            "sprat": 2,
            "novogradnja": 0,
            "renoviran": 0,
            "lift": 0,
            "garaza": 1,
            "grijanje": "pelet",
            "cijena": 240000,
            "slika": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/225339233.jpg?k=8905fc88b0b809a6bb62fa4c735544b08133b44784f1ccd18a7921cdc76ceee5&o=&hp=1"
        },
        {
            "id": 4,
            "naziv": "Luksuzan petosoban stan u novogradnji Vraca, 144m2",
            "opis": "Stan je površine 144 m2 + terasa i nalazi se na prizemlju stambene zgrade. Sastoji se od dvije etaže i po strukturi je petosoban.\r\n\r\nSastoj se iz ulaznog hola sa stepeništem, prostranog dnevnog boravka, kuhinje sa trpezarijom, četiri spavaće sobe, tri kupatila i ostave. Iz dnevnog boravka i iz dvije spavaće sobe se izlazi na terase sa prelijepim pogledom na Sarajevo. Zgrada u kojoj se stan nalazi odikuje se prvoklasnim materijalima gradnje, kao i vrhunskom termičkom izolacijom sa uštedom energije kako za grijanje zimi tako i hlađenje ljeti. Pod u stanu je parket i keramika. Vanjska stolarija je ALU (SCHUCO). Ulazna vrata su protivpožarna i protuvprovalna. Objektu pripada ograđeno dvorište, obezbijeđeno video nadzorom, koje služi kao parking za stanare. Također budući stanari imaju mogućnost koritešnja dječijeg igrališta kao i dijela za uživanje i roštiljanje.\r\n",
            "vrsta": "stan",
            "kvadratura": 73,
            "struktura": "trosoban",
            "sprat": 4,
            "novogradnja": 1,
            "renoviran": 0,
            "lift": 1,
            "garaza": 0,
            "grijanje": "plin",
            "cijena": 330000,
            "slika": "https://trust.ba/wp-content/uploads/2020/10/IMG_4091-1500.jpg"
        },
        {
            "id": 5,
            "naziv": "Trosoban namješten stan Pofalići-Sarajevo Tower, 83m2, #79\r\n",
            "opis": "Stan je površine 83,5 m2 i nalazi se na 24. spratu stambene zgrade sa osam liftova. Po strukturi je trosoban.\r\nSastoji se iz hodnika, dnevnog boravka sa kuhinjom, trpezarijom i izlazom na balkon, kupatila i dječije spavaće sobe sa izlazom na balkon i master spavaće sobe sa kupatilom i izlazom na balkon. Stan je u novogradnji Sarajevo Tower. Vanjska stolarija je PVC, dok je unutrašnja drvena. Pod je parket i keramika. Ulazna vrata su blindirana. Grijanje je centralno gradsko, po potrošnji. Orijentacija stana je istok. Nalazi na veoma atraktivnoj lokaciji, u sklopu samog objekta planiran je tržni centa, u neposrednoj blizini su gradski prijevoz, mnogi drugi shoping centri, KAMPUSA… kao i drugi neophodni sadržaji.",
            "vrsta": "kuca",
            "kvadratura": 200,
            "struktura": "petosoban",
            "sprat": 2,
            "novogradnja": 0,
            "renoviran": 0,
            "lift": 0,
            "garaza": 1,
            "grijanje": "pelet",
            "cijena": 240000,
            "slika": "https://www.nekretnine-myspace.com/wp-content/uploads/2022/03/21t%C5%BE-1110x650.jpg"
        },
        {
            "id": 6,
            "naziv": "Četverosoban stan u novogradnji Breka, 104m2",
            "opis": "Stan je površine 104 m2 i nalazi se na I spratu stambene zgarde sa liftom. Po strukturi je četverosoban.\r\n\r\nSastoji se iz hodnika, dnevnog boravka sa izlazom na balkon, kuhinje sa trpezarijom i izlazom na drugi balkon, manjeg kupatila, tri spavaće sobe i većeg kupatila. Stan se nalazi u gradnji iz 2010. godine. Pod je parket i keramika. Vanjska stolarija drvena kao i unutrašnja. Ulazna vrata su drvena sa sigurnosnom bravom. Grijanje je etažno plinsko. Ortjentacija stana je trostrana (Zapad – Sjever – Istok). Stan posjeduje podrumsku prostoriji kao i parking mjesto ispred zgrade. Nalazi se na veoma lijepoj i mirnoj lokaciji sa otvorenim pogledom i prodaje se namješten.",
            "vrsta": "stan",
            "kvadratura": 73,
            "struktura": "trosoban",
            "sprat": 4,
            "novogradnja": 1,
            "renoviran": 0,
            "lift": 1,
            "garaza": 0,
            "grijanje": "plin",
            "cijena": 330000,
            "slika": "https://ontime.ba/wp-content/uploads/2022/04/DSC_1073A.jpg"
        },
        {
            "id": 7,
            "naziv": "Dvosoban renoviran stan sa garažom Stari Grad",
            "opis": "Stan je površine 52m2 i nalazi se na I spratu u manjoj stambenoj zgradi, ujedno i zadnji sprat. Po strukturi stan je dvosoban.\r\n\r\nSastoji se iz hodnika, dnevnog boravka, kuhinje sa trpezarijom, spavaće sobe i kupatila. Stan je kompletno renoviran 2015. godine (zamijenjene instalacije, stolarija). Krov je rađen prije 7 godina. Vanjska i unutrašnja stolarija je drvena. Pod je parket i keramika. Grijanje je etažno plinsko. Toplotna izolacija stana je odlična. Orijentacija stana je dvostrana (sjever-jug). Iznad stana je tavanski prostor. Stan se prodaje namješten (bez trepezarijskog stola sa stolicama i ličnih stvari). Uz stan se dobije i garaza 15,5m2 (vanknjižno vlasništvo).",
            "vrsta": "kuca",
            "kvadratura": 200,
            "struktura": "petosoban",
            "sprat": 2,
            "novogradnja": 0,
            "renoviran": 0,
            "lift": 0,
            "garaza": 1,
            "grijanje": "pelet",
            "cijena": 240000,
            "slika": "https://d4n0y8dshd77z.cloudfront.net/listings/51899821/lg/IMG-0669-4b2a3e534889.jpg"
        },
        {
            "id": 8,
            "naziv": "Jednoiposona namješten stan novogradnja Vogošća, 35m2",
            "opis": "Stan je površine 35 m2 i nalazi se na II spratu stambene zgrade sa liftom. Po strukturi je jednoiposoban.\r\n\r\nSastoji se iz hodnika, dnevnog boravka sa kuhinjom, trpezarijom i izlazom na balkon, spavaće sobe i kupatila. Vanjska stolarija je PVC, unutrašnja stolarija je drvena. Pod je parket i keramika. Grijanje u stanu je na struju konvektorima. Ulazna vrata su blindirana. Stan se nalazi u novogradnji i prodaje se namješten.",
            "vrsta": "stan",
            "kvadratura": 73,
            "struktura": "trosoban",
            "sprat": 4,
            "novogradnja": 1,
            "renoviran": 0,
            "lift": 1,
            "garaza": 0,
            "grijanje": "plin",
            "cijena": 330000,
            "slika": "https://d4n0y8dshd77z.cloudfront.net/listings/54621050/lg/img-1691087691-9c60a1c3f3ff.jpg"
        },
        {
            "id": 9,
            "naziv": "Trosoban namješten stan Ciglane, 90m2",
            "opis": "Stan je površine 90 m2 i nalazi se na IV spratu stambene zgrade sa liftom. Po strukturi je trosoban.\r\n\r\nSastoji se iz hodnika, dnevnog boravka sa izlazoma na balkon, trpezarije, kuhinje, toaleta, degažmana, dvije spavaće sobe (jedna je sa izlazom na drugi balkon) i ostave. Vanjska stolarija je drvena, kao i unutrašnja. Pod je laminat i keramika. Ulazna vrata su blindirana. Grijanje je centralno gradsko. Stan je na veoma lijepoj lokaciji, sa otvorenim pogledom i iznajmljuje se namješten.",
            "vrsta": "kuca",
            "kvadratura": 200,
            "struktura": "petosoban",
            "sprat": 2,
            "novogradnja": 0,
            "renoviran": 0,
            "lift": 0,
            "garaza": 1,
            "grijanje": "pelet",
            "cijena": 240000,
            "slika": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMd_9kWlvNz9Q61qudBbR2zj5yQ-Dz-jdPPw&usqp=CAU"
        }
    ])
    //     $.ajax({
    //         url: "http://localhost:3002/nekretnine",
    //         type: "GET",
    //         dataType: 'json',
    //         success: function (result) {
    // setNekretnine(result.data);
    //         }
    //     });
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