import './style.css';
import { useState, useEffect } from "react";

export const Header = () => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        setIsAdmin(localStorage.getItem('loggedInAsAdmin') === '1');
        setIsLoggedIn(localStorage.getItem('loggedInUserEmail') !== null);
    }, []);

    function onLogout() {
        localStorage.removeItem('loggedInUserEmail');
        localStorage.removeItem('loggedInUserName');
        localStorage.removeItem('loggedInAsAdmin');
    }
    return <div className="header">
        <div>
            <a className='logo' href="/" >CompanyLogo</a>
            <div className="header-right">
                <a href="/nekretnine">Nekretnine</a>
                {isAdmin && <a href="/dodaj-nekretninu">Dodaj nekretninu</a>}
                {isAdmin && <a href="/upiti">Upiti</a>}
                <a href="/agenti">Agenti</a>
                <a href="/lokacije">Lokacije</a>
                <a href="/login" onClick={onLogout}>{isLoggedIn ? 'Logout' : 'Login'}</a>
            </div>
        </div>
       
    </div>
};