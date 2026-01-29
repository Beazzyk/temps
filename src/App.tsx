import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ZakonHistoria from './pages/ZakonHistoria';
import Odeszli from './pages/Odeszli';
import ZostanTemplariuszem from './pages/ZostanTemplariuszem';
import WielkiPrzeoratStatut from './pages/WielkiPrzeoratStatut';
import WielkiPrzeoratUmocowanie from './pages/WielkiPrzeoratUmocowanie';
import WielkiPrzeoratStruktura from './pages/WielkiPrzeoratStruktura';
import Kontakt from './pages/Kontakt';
import Oddzialy from './pages/Oddzialy';
import OddzialDetail from './pages/OddzialDetail';
import Aktualnosci from './pages/Aktualnosci';
import Projekty from './pages/Projekty';
import SerceDlaSyrii from './pages/projekty/SerceDlaSyrii';
import KosciolSwHelenyWTurcji from './pages/projekty/KosciolSwHelenyWTurcji';
import PomocDlaLibanu from './pages/projekty/PomocDlaLibanu';
import RozaZywegoRozanca from './pages/projekty/RozaZywegoRozanca';
import MatkaBoskaStrzegomska from './pages/projekty/MatkaBoskaStrzegomska';
import KsiazkaDlaWieznia from './pages/projekty/KsiazkaDlaWieznia';
import BenefactorTempli from './pages/projekty/BenefactorTempli';
import FamiliareTempli from './pages/projekty/FamiliareTempli';
import DobrodziejRokuDobryRycerz from './pages/projekty/DobrodziejRokuDobryRycerz';

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
            <Route path="/zakon/zostan-templariuszem" element={<ZostanTemplariuszem />} />
            <Route path="/wielki-przeorat/statut-generalny" element={<WielkiPrzeoratStatut />} />
            <Route path="/wielki-przeorat/umocowanie" element={<WielkiPrzeoratUmocowanie />} />
            <Route path="/wielki-przeorat/struktura" element={<WielkiPrzeoratStruktura />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/oddzialy" element={<Oddzialy />} />
            <Route path="/oddzialy/:wojewodztwo" element={<OddzialDetail />} />
            <Route path="/aktualnosci" element={<Aktualnosci />} />
            <Route path="/projekty" element={<Projekty />} />
            <Route path="/projekty/serce-dla-syrii" element={<SerceDlaSyrii />} />
            <Route path="/projekty/kosciol-sw-heleny-w-turcji" element={<KosciolSwHelenyWTurcji />} />
            <Route path="/projekty/pomoc-dla-libanu" element={<PomocDlaLibanu />} />
            <Route path="/projekty/roza-zywego-rozanca" element={<RozaZywegoRozanca />} />
            <Route path="/projekty/matka-boska-strzegomska" element={<MatkaBoskaStrzegomska />} />
            <Route path="/projekty/ksiazka-dla-wieznia" element={<KsiazkaDlaWieznia />} />
            <Route path="/projekty/benefactor-templi" element={<BenefactorTempli />} />
            <Route path="/projekty/familiare-templi" element={<FamiliareTempli />} />
            <Route path="/projekty/dobrodziej-roku-dobry-rycerz" element={<DobrodziejRokuDobryRycerz />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
