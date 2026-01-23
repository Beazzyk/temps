import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ZakonHistoria from './pages/ZakonHistoria';
import Odeszli from './pages/Odeszli';
import WielkiPrzeorat from './pages/WielkiPrzeorat';
import WielkiPrzeoratStatut from './pages/WielkiPrzeoratStatut';
import WielkiPrzeoratUmocowanie from './pages/WielkiPrzeoratUmocowanie';
import WielkiPrzeoratDokumenty from './pages/WielkiPrzeoratDokumenty';
import WielkiPrzeoratStruktura from './pages/WielkiPrzeoratStruktura';
import Kontakt from './pages/Kontakt';
import Oddzialy from './pages/Oddzialy';
import OddzialDetail from './pages/OddzialDetail';
import Aktualnosci from './pages/Aktualnosci';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/zakon/historia" element={<ZakonHistoria />} />
            <Route path="/zakon/odeszli" element={<Odeszli />} />
            <Route path="/wielki-przeorat" element={<WielkiPrzeorat />} />
            <Route path="/wielki-przeorat/statut-generalny" element={<WielkiPrzeoratStatut />} />
            <Route path="/wielki-przeorat/umocowanie" element={<WielkiPrzeoratUmocowanie />} />
            <Route path="/wielki-przeorat/pozostale-dokumenty" element={<WielkiPrzeoratDokumenty />} />
            <Route path="/wielki-przeorat/struktura" element={<WielkiPrzeoratStruktura />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/oddzialy" element={<Oddzialy />} />
            <Route path="/oddzialy/:wojewodztwo" element={<OddzialDetail />} />
            <Route path="/aktualnosci" element={<Aktualnosci />} />
            <Route path="/projekty" element={<div className="pt-20 min-h-screen flex items-center justify-center"><h1 className="font-heading text-4xl">Projekty - Wkrótce</h1></div>} />
            <Route path="/modlitwy" element={<div className="pt-20 min-h-screen flex items-center justify-center"><h1 className="font-heading text-4xl">Modlitwy OECTH - Wkrótce</h1></div>} />
            <Route path="/sklep" element={<div className="pt-20 min-h-screen flex items-center justify-center"><h1 className="font-heading text-4xl">Sklep - Wkrótce</h1></div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
