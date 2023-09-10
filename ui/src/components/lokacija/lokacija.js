import './style.css';

export const Lokacija = ({ lokacija }) => {
    return <div className="lokacija">
        <h5 className="filijala">
            Filijala: {lokacija.filijala}
        </h5>
        <span>Adresa: {lokacija.adresa}</span>
        <span>Email: {lokacija.email}</span>
        <span>Telefon: {lokacija.telefon}</span>
    </div>
};