import { Link } from 'react-router-dom';
import { Facebook, Twitter, Youtube, Instagram } from './icons';

const Footer = () => {
  return (
    <footer className="text-white" style={{ backgroundColor: '#1a1a1a' }}>
      <div className="max-w-[95rem] mx-auto px-2 sm:px-4 lg:px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <img 
                src="/logo.png" 
                alt="OECTH Logo" 
                className="h-12 w-auto"
              />
              <div className="font-heading text-xl font-bold">OECTH</div>
            </Link>
            <p className="text-gray-400 text-sm mb-4">
              Utrzymujemy dziedzictwo rycerskie templariuszy w służbie Bogu i bliźniemu.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-templar-red/20 hover:bg-templar-red rounded-lg flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-templar-red/20 hover:bg-templar-red rounded-lg flex items-center justify-center transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-templar-red/20 hover:bg-templar-red rounded-lg flex items-center justify-center transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-templar-red/20 hover:bg-templar-red rounded-lg flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-heading text-lg mb-4">NAWIGACJA</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Strona główna
                </Link>
              </li>
              <li>
                <Link to="/zakon/historia" className="text-gray-400 hover:text-white transition-colors">
                  Kim jesteśmy
                </Link>
              </li>
              <li>
                <Link to="/zakon/historia" className="text-gray-400 hover:text-white transition-colors">
                  Zakon Templariuszy
                </Link>
              </li>
              <li>
                <Link to="/wielki-przeorat" className="text-gray-400 hover:text-white transition-colors">
                  Wielki Przeorat
                </Link>
              </li>
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h3 className="font-heading text-lg mb-4">WIĘCEJ</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/oddzialy" className="text-gray-400 hover:text-white transition-colors">
                  Oddziały
                </Link>
              </li>
              <li>
                <Link to="/aktualnosci" className="text-gray-400 hover:text-white transition-colors">
                  Aktualności
                </Link>
              </li>
              <li>
                <Link to="/zakon/historia" className="text-gray-400 hover:text-white transition-colors">
                  Historia
                </Link>
              </li>
              <li>
                <Link to="/kontakt" className="text-gray-400 hover:text-white transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-lg mb-4">KONTAKT</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>kontakt@templariusze.pl</li>
              <li>+48 123 456 789</li>
              <li>Warszawa, Polska</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 OECTH - Ordo Equestris Christi Templique Hierosolymitani. Wszelkie prawa zastrzeżone.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Polityka prywatności
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Regulamin
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

