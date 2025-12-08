import { Mail, Phone, MapPin, Clock, Send, Facebook, Youtube, Instagram, Twitter } from '../components/icons';
import { useState } from 'react';

const Kontakt = () => {
  const [formData, setFormData] = useState({
    imie: '',
    nazwisko: '',
    email: '',
    telefon: '',
    temat: '',
    wiadomosc: '',
    zgoda: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-templar-burgundy to-templar-red"></div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="inline-block px-4 py-2 bg-templar-red text-white text-sm font-semibold mb-6">
            Skontaktuj się z nami
          </div>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-white mb-6">
            KONTAKT
          </h1>
          <p className="text-xl text-white/90">
            Jesteśmy gotowi odpowiedzieć na Twoje pytania i pomóc w dołączeniu do naszej wspólnoty
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[95rem] mx-auto px-2 sm:px-4 lg:px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form Section */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-templar-red/10 flex items-center justify-center rounded-lg">
                    <Send className="w-6 h-6 text-templar-red" />
                  </div>
                  <div>
                    <h2 className="font-heading text-2xl text-templar-black">WYŚLIJ WIADOMOŚĆ</h2>
                    <p className="text-gray-600 text-sm">Skontaktuj się z nami bezpośrednio</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Imię
                      </label>
                      <input
                        type="text"
                        value={formData.imie}
                        onChange={(e) => setFormData({ ...formData, imie: e.target.value })}
                        placeholder="Twoje imię"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-templar-red focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Nazwisko
                      </label>
                      <input
                        type="text"
                        value={formData.nazwisko}
                        onChange={(e) => setFormData({ ...formData, nazwisko: e.target.value })}
                        placeholder="Twoje nazwisko"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-templar-red focus:border-transparent"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="twoj@email.com"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-templar-red focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        value={formData.telefon}
                        onChange={(e) => setFormData({ ...formData, telefon: e.target.value })}
                        placeholder="+48 123 456 789"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-templar-red focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Temat
                    </label>
                    <select
                      value={formData.temat}
                      onChange={(e) => setFormData({ ...formData, temat: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-templar-red focus:border-transparent"
                      required
                    >
                      <option value="">Wybierz temat</option>
                      <option value="czlonkostwo">Członkostwo</option>
                      <option value="pytania">Pytania ogólne</option>
                      <option value="projekty">Projekty</option>
                      <option value="inne">Inne</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Wiadomość
                    </label>
                    <textarea
                      value={formData.wiadomosc}
                      onChange={(e) => setFormData({ ...formData, wiadomosc: e.target.value })}
                      placeholder="Napisz swoją wiadomość..."
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-templar-red focus:border-transparent"
                      required
                    />
                  </div>

                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="zgoda"
                      checked={formData.zgoda}
                      onChange={(e) => setFormData({ ...formData, zgoda: e.target.checked })}
                      className="mt-1"
                      required
                    />
                    <label htmlFor="zgoda" className="text-sm text-gray-700">
                      Zgadzam się na przetwarzanie danych osobowych zgodnie z polityką prywatności
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-templar-red hover:bg-templar-red-light text-white font-semibold rounded-lg transition-colors flex items-center justify-center space-x-2"
                  >
                    <span>Wyślij Wiadomość</span>
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="font-heading text-xl text-templar-black mb-6">DANE KONTAKTOWE</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-templar-red mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-700">Adres Siedziby</div>
                      <div className="text-gray-600 text-sm">
                        ul. Świętokrzyska 15<br />
                        00-050 Warszawa, Polska
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-templar-red mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-700">Telefon</div>
                      <div className="text-gray-600 text-sm">+48 22 123 45 67</div>
                      <div className="text-gray-500 text-xs">Pon-Pt: 9:00-17:00</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-templar-red mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-700">Email</div>
                      <div className="text-gray-600 text-sm">kontakt@templariusze.pl</div>
                      <div className="text-gray-500 text-xs">Odpowiadamy w ciągu 2h</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="font-heading text-xl text-templar-black mb-6">GODZINY URZĘDOWANIA</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Poniedziałek - Piątek</span>
                    <span className="font-semibold text-gray-900">9:00-17:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Sobota</span>
                    <span className="font-semibold text-gray-900">10:00-14:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Niedziela</span>
                    <span className="font-semibold text-gray-900">Zamknięte</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <div className="flex items-start space-x-2">
                    <Clock className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <p className="text-xs text-yellow-800">
                      W dni świąteczne biuro jest zamknięte. Prosimy o wcześniejsze umówienie spotkań.
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="font-heading text-xl text-templar-black mb-6">MEDIA SPOŁECZNOŚCIOWE</h3>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="#"
                    className="flex items-center justify-center space-x-2 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                    <span className="text-sm">Facebook</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-center space-x-2 p-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
                  >
                    <Youtube className="w-5 h-5" />
                    <span className="text-sm">YouTube</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-center space-x-2 p-3 bg-pink-600 hover:bg-pink-700 text-white rounded-lg transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                    <span className="text-sm">Instagram</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-center space-x-2 p-3 bg-blue-400 hover:bg-blue-500 text-white rounded-lg transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                    <span className="text-sm">Twitter</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[95rem] mx-auto px-2 sm:px-4 lg:px-6">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <MapPin className="w-6 h-6 text-templar-red" />
              <div className="inline-block px-4 py-2 bg-templar-red text-white text-sm font-semibold">
                Lokalizacja
              </div>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl text-templar-black mb-4">
              ZNAJDŹ NAS
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Nasza siedziba znajduje się w centrum Warszawy, w zabytkowej kamienicy przy ulicy Świętokrzyskiej
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Map Placeholder */}
            <div className="lg:col-span-2">
              <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Mapa interaktywna</p>
                  <p className="text-sm text-gray-500">ul. Świętokrzyska 15, Warszawa</p>
                </div>
              </div>
            </div>

            {/* Transport Info */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="font-heading text-lg text-templar-black">TRANSPORT PUBLICZNY</h3>
                </div>
                <div className="space-y-2 text-sm text-gray-700">
                  <p><strong>Metro:</strong> Świętokrzyska (linia M1, M2)</p>
                  <p><strong>Autobusy:</strong> 160, 175, 180, 500</p>
                  <p><strong>Tramwaje:</strong> 7, 9, 22, 24</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-green-600" />
                  </div>
                  <h3 className="font-heading text-lg text-templar-black">DOJAZD SAMOCHODEM</h3>
                </div>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>Parking płatny w strefie</p>
                  <p><strong>Najbliższy parking:</strong> Galeria Centrum</p>
                  <p><strong>Czas:</strong> 5 minut pieszo</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-purple-600" />
                  </div>
                  <h3 className="font-heading text-lg text-templar-black">W POBLIŻU</h3>
                </div>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>Pałac Kultury i Nauki - 300m</p>
                  <p>Centrum handlowe Złote Tarasy - 400m</p>
                  <p>Dworzec Centralny - 500m</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Kontakt;

