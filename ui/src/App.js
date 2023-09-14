import './App.css';
import { Nekretnine } from './pages/nekretnine/nekretnine';
import { Agenti } from './pages/agenti/agenti';
import { Lokacije } from './pages/lokacije/lokacije';
import { NekretninaDetaljno } from './pages/nekretnina-detaljno/nekretnina-detaljno';
import { Login } from './pages/login/login';
import { Upiti } from './pages/upiti/upiti';
import { Register } from './pages/register/register';
import { DodajNekretninu } from './pages/dodaj-nekretninu/dodaj-nekretninu';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { useState, useEffect } from 'react';
function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const email = localStorage.getItem('loggedInUserEmail');
    if (email) {
      const isAdmin = localStorage.getItem('loggedInAsAdmin');
      const name = localStorage.getItem('loggedInUserName');
      setLoggedInUser({ email, name, isAdmin: isAdmin === '1' });
    }
    setReady(true);
  }, []);

  return (
    <>
      <Header></Header>

      {ready && <Router>
        <div className='routed-wrapper'>
          <Routes>
            <Route path="/nekretnine" element={<Nekretnine />} />
            <Route path="/agenti" element={<Agenti />} />
            <Route path="/lokacije" element={<Lokacije />} />

            <Route exact path="/nekretnina/:id" element={<NekretninaDetaljno />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {loggedInUser && loggedInUser.isAdmin && <Route path="/dodaj-nekretninu" element={<DodajNekretninu />} />}
            {loggedInUser && loggedInUser.isAdmin && <Route path="/upiti" element={<Upiti />} />}

            <Route path='*' element={<Navigate to='/nekretnine' />} />
          </Routes>
        </div>
      </Router>}
      <Footer></Footer>
    </>
  );
}

export default App;
