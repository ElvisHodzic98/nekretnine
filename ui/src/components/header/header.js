import './style.css';
import { useState, useEffect } from "react";

export const Header = () => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState(null);
    useEffect(() => {
        setIsAdmin(localStorage.getItem('loggedInAsAdmin') === '1');
        setIsLoggedIn(localStorage.getItem('loggedInUserEmail') !== null);
        setUserName(localStorage.getItem('loggedInUserName'));
    }, []);

    function onLogout() {
        localStorage.removeItem('loggedInUserEmail');
        localStorage.removeItem('loggedInUserName');
        localStorage.removeItem('loggedInAsAdmin');
    }
    return <div className="header">
        <div className='header-inner'>
            <a className='logo' href="/" >CompanyLogo</a>
            {userName !== null && <div className='ime'>Cao, {userName}</div>}
            <div className="header-right">
                <a href="/nekretnine">Nekretnine</a>
                {isAdmin && <a href="/dodaj-nekretninu">Dodaj nekretninu</a>}

                {isAdmin && <a href="/upiti">Upiti</a>}
                <a href="/agenti">Agenti</a>
                <a href="/lokacije">Lokacije</a>
                <a href="/login" onClick={onLogout}>{isLoggedIn ? 'Logout' : 'Login'}</a>
                {!isLoggedIn && <a href="/register">Register</a>}
            </div>
        </div>

    </div>
};