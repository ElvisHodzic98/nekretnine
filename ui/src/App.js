import logo from './logo.svg';
import './App.css';
import { Nekretnine } from './pages/nekretnine/nekretnine';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { Header } from "./components/header/header";
import {Footer} from "./components/footer/footer";
function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);
  useEffect(() => {
    const email = localStorage.getItem('loggedInUserEmail');
    if (email) {
      const isAdmin = localStorage.getItem('loggedInAsAdmin');
      const name = localStorage.getItem('loggedInUserName');
      setLoggedInUser({ email, name, isAdmin: isAdmin === '1' });
    }
  }, []);
  return (
    <div>
      <Header></Header>
      <Router>
        <div className="page-wrapper">
          {/* <Header /> */}
          <Routes>
            <Route path="/nekretnine" element={<Nekretnine tekst="Elvis" />} />
            {/* <Route path="/agenti" element={<Agenti />} />
          <Route path="/lokacije" element={<Lokacije />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dodaj-nekretninu" element={<DodajNekretninu />} />
          <Route path="/upiti" element={<Upiti />} />
           {loggedInUser && loggedInUser.isAdmin && <Route path="/dodaj-nekretninu" element={<DodajNekretninu />} />}
          {loggedInUser && loggedInUser.isAdmin && <Route path="/upiti" element={<Upiti />} />} 
          <Route exact path="/nekretnina/:id" element={<NekretninaDetaljno />} />
          <Route path='' element={<Navigate to='/nekretnine' />} /> */}
          <Route path='*' element={<Navigate to='/nekretnine' />} />
          </Routes>
        </div>
      </Router>
      <Footer></Footer>
    </div>

  );
}

export default App;
