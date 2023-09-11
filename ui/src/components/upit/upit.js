import './style.css';

export const Upit = ({ upit }) => {
    return <div className="upit">
        <span className="email">
            Email: {upit.email}
        </span>
        <span>Telefon: {upit['broj_telefona']}</span>
        <span>Poruka: {upit.poruka}</span>
        <a href={`http://localhost:3000/nekretnina/${upit.idNekretnine}`}>Link za nekretninu</a>
    </div>
};