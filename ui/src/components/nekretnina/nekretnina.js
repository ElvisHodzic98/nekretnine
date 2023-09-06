import './style.css';

export const Nekretnina = ({ nekretnina }) => {
    function otvoriDetaljno() {
        window.location.href = `/nekretnina/${nekretnina.id}`;
    }
    return <div className="real-estate-box" onClick={otvoriDetaljno}>
        <div className="image-container">
            <img
                className="image"
                src={nekretnina.slika}
                alt="Real estate Box"
            />
        </div>
        <div className="content">
            <h4 className="title">
                {nekretnina.naziv}
            </h4>
            <div className="svojstva">
                <span>Vrsta: {nekretnina.vrsta}</span>
                <span>Kvadratura: {nekretnina.kvadratura}</span>
                <span>Sprat: {nekretnina.sprat}</span>
                <span>Struktura: {nekretnina.struktura}</span>
                <span>Novogradnja: {(nekretnina.novogradnja ? "DA" : "NE")}</span>
                <span>Renoviran: {(nekretnina.renoviran ? "DA" : "NE")}</span>
                <span>Lift: {(nekretnina.lift ? "DA" : "NE")}</span>
                <span>Garaza: {(nekretnina.garaza ? "DA" : "NE")}</span>
                <span>Grijanje: {nekretnina.grijanje}</span>
            </div>
            <span className="cijena">Cijena: {nekretnina.cijena}</span>
        </div>
    </div>
};