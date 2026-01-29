import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from '../components/icons';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isZakonOpen, setIsZakonOpen] = useState(false);
  const [isPrzeoratOpen, setIsPrzeoratOpen] = useState(false);
  const [isProjektyOpen, setIsProjektyOpen] = useState(false);
  const location = useLocation();
  const zakonRef = useRef<HTMLDivElement>(null);
  const przeoratRef = useRef<HTMLDivElement>(null);
  const projektyRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (zakonRef.current && !zakonRef.current.contains(event.target as Node)) {
        setIsZakonOpen(false);
      }
      if (przeoratRef.current && !przeoratRef.current.contains(event.target as Node)) {
        setIsPrzeoratOpen(false);
      }
      if (projektyRef.current && !projektyRef.current.contains(event.target as Node)) {
        setIsProjektyOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const languages = ['PL', 'EN', 'DE', 'ES', 'IT'];
  const isActive = (path: string) => location.pathname === path;
  const isPrzeoratActive = () => location.pathname.startsWith('/wielki-przeorat');
  const isProjektyActive = () => location.pathname.startsWith('/projekty');

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 gradient-templar border-b border-templar-red/30">
      <div className="max-w-[95rem] mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-20">
          
          {/* LEFT — LOGO */}
          <div className="flex items-center flex-none">
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="/logo.png" 
                alt="OECTH Logo" 
                className="h-12 w-auto"
              />
              <div className="text-white font-heading text-xl font-bold">
                OECTH
              </div>
            </Link>
          </div>

          {/* CENTER — NAVIGATION MENU (PERFECTLY CENTERED) */}
          <div className="hidden lg:flex items-center space-x-8 flex-grow justify-center">

            <Link
              to="/"
              className={`text-white hover:text-templar-red-light transition-colors text-base ${
                isActive('/') ? 'text-templar-red-light border-b-2 border-templar-red-light pb-1' : ''
              }`}
            >
              Strona główna
            </Link>

            <Link
              to="/aktualnosci"
              className={`text-white hover:text-templar-red-light transition-colors text-base ${
                isActive('/aktualnosci') ? 'text-templar-red-light border-b-2 border-templar-red-light pb-1' : ''
              }`}
            >
              Aktualności
            </Link>

            {/* DROPDOWN — ZAKON */}
            <div className="relative" ref={zakonRef}>
              <button
                onClick={() => setIsZakonOpen(!isZakonOpen)}
                className="text-white hover:text-templar-red-light transition-colors flex items-center space-x-1 text-base"
              >
                <span>Zakon Templariuszy</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isZakonOpen ? 'rotate-180' : ''}`} />
              </button>

              {isZakonOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-black/95 border border-templar-red/30 rounded shadow-lg py-2 z-50">
                  <Link
                    to="/zakon/historia"
                    onClick={() => setIsZakonOpen(false)}
                    className="block px-4 py-2 text-white hover:bg-templar-red/20 transition-colors"
                  >
                    Historia
                  </Link>
                  <Link
                    to="/zakon/odeszli"
                    onClick={() => setIsZakonOpen(false)}
                    className="block px-4 py-2 text-white hover:bg-templar-red/20 transition-colors"
                  >
                    „Odeszli do Domu Ojca"
                  </Link>
                  <Link
                    to="/zakon/zostan-templariuszem"
                    onClick={() => setIsZakonOpen(false)}
                    className="block px-4 py-2 text-white hover:bg-templar-red/20 transition-colors"
                  >
                    Zostań Templariuszem
                  </Link>
                </div>
              )}
            </div>

            {/* DROPDOWN — WIELKI PRZEORAT */}
            <div className="relative" ref={przeoratRef}>
              <button
                onClick={() => setIsPrzeoratOpen(!isPrzeoratOpen)}
                className={`text-white hover:text-templar-red-light transition-colors flex items-center space-x-1 text-base ${
                  isPrzeoratActive() ? 'text-templar-red-light' : ''
                }`}
              >
                <span>Wielki Przeorat Polski</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isPrzeoratOpen ? 'rotate-180' : ''}`} />
              </button>

              {isPrzeoratOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-black/95 border border-templar-red/30 rounded shadow-lg py-2 z-50">
                  <Link
                    to="/wielki-przeorat/statut-generalny"
                    onClick={() => setIsPrzeoratOpen(false)}
                    className="block px-4 py-2 text-white hover:bg-templar-red/20 transition-colors"
                  >
                    Statut Generalny
                  </Link>
                  <Link
                    to="/wielki-przeorat/umocowanie"
                    onClick={() => setIsPrzeoratOpen(false)}
                    className="block px-4 py-2 text-white hover:bg-templar-red/20 transition-colors"
                  >
                    Umocowanie
                  </Link>
                  <Link
                    to="/wielki-przeorat/struktura"
                    onClick={() => setIsPrzeoratOpen(false)}
                    className="block px-4 py-2 text-white hover:bg-templar-red/20 transition-colors"
                  >
                    Struktura
                  </Link>
                </div>
              )}
            </div>

            {/* DROPDOWN — PROJEKTY */}
            <div className="relative" ref={projektyRef}>
              <button
                onClick={() => setIsProjektyOpen(!isProjektyOpen)}
                className={`text-white hover:text-templar-red-light transition-colors flex items-center space-x-1 text-base ${
                  isProjektyActive() ? 'text-templar-red-light' : ''
                }`}
              >
                <span>Projekty</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isProjektyOpen ? 'rotate-180' : ''}`} />
              </button>

              {isProjektyOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-black/95 border border-templar-red/30 rounded shadow-lg py-2 z-50 max-h-[80vh] overflow-y-auto">
                  <Link
                    to="/projekty/serce-dla-syrii"
                    onClick={() => setIsProjektyOpen(false)}
                    className="block px-4 py-2 text-white hover:bg-templar-red/20 transition-colors"
                  >
                    Serce dla Syrii
                  </Link>
                  <Link
                    to="/projekty/kosciol-sw-heleny-w-turcji"
                    onClick={() => setIsProjektyOpen(false)}
                    className="block px-4 py-2 text-white hover:bg-templar-red/20 transition-colors"
                  >
                    Kościół Św. Heleny w Turcji
                  </Link>
                  <Link
                    to="/projekty/pomoc-dla-libanu"
                    onClick={() => setIsProjektyOpen(false)}
                    className="block px-4 py-2 text-white hover:bg-templar-red/20 transition-colors"
                  >
                    Pomoc dla Libanu
                  </Link>
                  <Link
                    to="/projekty/roza-zywego-rozanca"
                    onClick={() => setIsProjektyOpen(false)}
                    className="block px-4 py-2 text-white hover:bg-templar-red/20 transition-colors"
                  >
                    Róża Żywego Różańca
                  </Link>
                  <Link
                    to="/projekty/matka-boska-strzegomska"
                    onClick={() => setIsProjektyOpen(false)}
                    className="block px-4 py-2 text-white hover:bg-templar-red/20 transition-colors"
                  >
                    Matka Boska Strzegomska zwana „Fundatorką"
                  </Link>
                  <Link
                    to="/projekty/ksiazka-dla-wieznia"
                    onClick={() => setIsProjektyOpen(false)}
                    className="block px-4 py-2 text-white hover:bg-templar-red/20 transition-colors"
                  >
                    Książka dla Więźnia
                  </Link>
                  <Link
                    to="/projekty/benefactor-templi"
                    onClick={() => setIsProjektyOpen(false)}
                    className="block px-4 py-2 text-white hover:bg-templar-red/20 transition-colors"
                  >
                    Benefactor Templi
                  </Link>
                  <Link
                    to="/projekty/familiare-templi"
                    onClick={() => setIsProjektyOpen(false)}
                    className="block px-4 py-2 text-white hover:bg-templar-red/20 transition-colors"
                  >
                    Familiare Templi
                  </Link>
                  <Link
                    to="/projekty/dobrodziej-roku-dobry-rycerz"
                    onClick={() => setIsProjektyOpen(false)}
                    className="block px-4 py-2 text-white hover:bg-templar-red/20 transition-colors"
                  >
                    Dobrodziej Roku - Dobry Rycerz
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT — LANGUAGE + CONTACT + MOBILE BUTTON */}
          <div className="flex items-center space-x-4 flex-none">

            {/* Language Selector */}
            <div className="relative hidden md:block">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center space-x-1 px-3 py-2 bg-black hover:bg-gray-900 text-white rounded transition-colors font-semibold border border-white/20"
              >
                <span>PL</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {isLangOpen && (
                <div className="absolute top-full right-0 mt-2 w-20 bg-black/95 border border-templar-red/30 rounded shadow-lg py-2 z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      className="block w-full text-left px-4 py-2 text-white hover:bg-templar-red/20 transition-colors"
                      onClick={() => setIsLangOpen(false)}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Contact */}
            <Link
              to="/kontakt"
              className="px-6 py-2 bg-black hover:bg-gray-900 text-white rounded transition-colors font-semibold border border-white/20"
            >
              Kontakt
            </Link>

            {/* Mobile Menu */}
            <button
              className="lg:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="lg:hidden bg-black/98 border-t border-templar-red/30">
          <div className="px-4 py-4 space-y-3">
            <Link to="/" className="block text-white" onClick={() => setIsMenuOpen(false)}>
              Strona główna
            </Link>
            <Link to="/zakon/historia" className="block text-white" onClick={() => setIsMenuOpen(false)}>
              Zakon Templariuszy
            </Link>
            <Link to="/wielki-przeorat/statut-generalny" className="block text-white" onClick={() => setIsMenuOpen(false)}>
              Wielki Przeorat Polski
            </Link>
            <Link to="/projekty" className="block text-white" onClick={() => setIsMenuOpen(false)}>
              Projekty
            </Link>
            <Link to="/aktualnosci" className="block text-white" onClick={() => setIsMenuOpen(false)}>
              Aktualności
            </Link>
            <Link to="/kontakt" className="block text-white" onClick={() => setIsMenuOpen(false)}>
              Kontakt
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
