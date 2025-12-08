import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from '../components/icons';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isZakonOpen, setIsZakonOpen] = useState(false);
  const [isOddzialyOpen, setIsOddzialyOpen] = useState(false);
  const [isPrzeoratOpen, setIsPrzeoratOpen] = useState(false);
  const location = useLocation();
  const zakonRef = useRef<HTMLDivElement>(null);
  const oddzialyRef = useRef<HTMLDivElement>(null);
  const przeoratRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (zakonRef.current && !zakonRef.current.contains(event.target as Node)) {
        setIsZakonOpen(false);
      }
      if (oddzialyRef.current && !oddzialyRef.current.contains(event.target as Node)) {
        setIsOddzialyOpen(false);
      }
      if (przeoratRef.current && !przeoratRef.current.contains(event.target as Node)) {
        setIsPrzeoratOpen(false);
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
                    to="/zakon/statut"
                    onClick={() => setIsZakonOpen(false)}
                    className="block px-4 py-2 text-white hover:bg-templar-red/20 transition-colors"
                  >
                    Statut
                  </Link>
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
                </div>
              )}
            </div>

            {/* DROPDOWN — WIELKI PRZEORAT */}
            <div className="relative" ref={przeoratRef}>
              <button
                onClick={() => setIsPrzeoratOpen(!isPrzeoratOpen)}
                className={`text-white hover:text-templar-red-light transition-colors flex items-center space-x-1 text-base ${
                  isActive('/wielki-przeorat') ? 'text-templar-red-light' : ''
                }`}
              >
                <span>Wielki Przeorat Polski</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isPrzeoratOpen ? 'rotate-180' : ''}`} />
              </button>

              {isPrzeoratOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-black/95 border border-templar-red/30 rounded shadow-lg py-2 z-50">
                  <Link
                    to="/wielki-przeorat"
                    onClick={() => setIsPrzeoratOpen(false)}
                    className="block px-4 py-2 text-white hover:bg-templar-red/20 transition-colors"
                  >
                    O Przeoracie
                  </Link>
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
                    to="/wielki-przeorat/pozostale-dokumenty"
                    onClick={() => setIsPrzeoratOpen(false)}
                    className="block px-4 py-2 text-white hover:bg-templar-red/20 transition-colors"
                  >
                    Pozostałe Dokumenty
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

            <Link
              to="/projekty"
              className={`text-white hover:text-templar-red-light transition-colors text-base ${
                isActive('/projekty') ? 'text-templar-red-light border-b-2 border-templar-red-light pb-1' : ''
              }`}
            >
              Projekty
            </Link>

            {/* DROPDOWN — ODDZIAŁY */}
            <div className="relative" ref={oddzialyRef}>
              <button
                onClick={() => setIsOddzialyOpen(!isOddzialyOpen)}
                className="text-white hover:text-templar-red-light transition-colors flex items-center space-x-1 text-base"
              >
                <span>Oddziały</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isOddzialyOpen ? 'rotate-180' : ''}`} />
              </button>

              {isOddzialyOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-black/95 border border-templar-red/30 rounded shadow-lg py-2 z-50">
                  <Link
                    to="/oddzialy/mazowieckie"
                    onClick={() => setIsOddzialyOpen(false)}
                    className="block px-4 py-2 text-white hover:bg-templar-red/20 transition-colors"
                  >
                    Oddział mazowiecki
                  </Link>
                  <Link
                    to="/oddzialy/malopolskie"
                    onClick={() => setIsOddzialyOpen(false)}
                    className="block px-4 py-2 text-white hover:bg-templar-red/20 transition-colors"
                  >
                    Oddział małopolski
                  </Link>
                  <Link
                    to="/oddzialy/pomorskie"
                    onClick={() => setIsOddzialyOpen(false)}
                    className="block px-4 py-2 text-white hover:bg-templar-red/20 transition-colors"
                  >
                    Oddział pomorski
                  </Link>
                  <Link
                    to="/oddzialy/slaskie"
                    onClick={() => setIsOddzialyOpen(false)}
                    className="block px-4 py-2 text-white hover:bg-templar-red/20 transition-colors"
                  >
                    Oddział śląski
                  </Link>
                  <Link
                    to="/oddzialy/wielkopolskie"
                    onClick={() => setIsOddzialyOpen(false)}
                    className="block px-4 py-2 text-white hover:bg-templar-red/20 transition-colors"
                  >
                    Oddział wielkopolski
                  </Link>
                  <Link
                    to="/oddzialy/dolnoslaskie"
                    onClick={() => setIsOddzialyOpen(false)}
                    className="block px-4 py-2 text-white hover:bg-templar-red/20 transition-colors"
                  >
                    Oddział dolnośląski
                  </Link>
                  <Link
                    to="/oddzialy"
                    onClick={() => setIsOddzialyOpen(false)}
                    className="block px-4 py-2 text-white hover:bg-templar-red/20 transition-colors border-t border-templar-red/30 mt-1 pt-2"
                  >
                    Wszystkie oddziały
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/modlitwy"
              className={`text-white hover:text-templar-red-light transition-colors text-base ${
                isActive('/modlitwy') ? 'text-templar-red-light border-b-2 border-templar-red-light pb-1' : ''
              }`}
            >
              Modlitwy
            </Link>

            <Link
              to="/sklep"
              className={`text-white hover:text-templar-red-light transition-colors text-base ${
                isActive('/sklep') ? 'text-templar-red-light border-b-2 border-templar-red-light pb-1' : ''
              }`}
            >
              Sklep <span className="text-xs">(wkrótce)</span>
            </Link>
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
            <Link to="/wielki-przeorat" className="block text-white" onClick={() => setIsMenuOpen(false)}>
              Wielki Przeorat Polski
            </Link>
            <Link to="/projekty" className="block text-white" onClick={() => setIsMenuOpen(false)}>
              Projekty
            </Link>
            <Link to="/oddzialy" className="block text-white" onClick={() => setIsMenuOpen(false)}>
              Oddziały
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
