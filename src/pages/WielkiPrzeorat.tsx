import { Crown, Users, MapPin, Target, Book, Globe } from '../components/icons';

const WielkiPrzeorat = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-templar-burgundy to-templar-red"></div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="inline-block px-4 py-2 bg-templar-red text-white text-sm font-semibold mb-6">
            Magnus Prioratus
          </div>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-white mb-6">
            WIELKI PRZEORAT
          </h1>
          <p className="text-xl text-white/90">
            Najwyższa władza duchowa i administracyjna Zakonu Templariuszy, kontynuująca 
            tradycje wielowiekowej hierarchii rycerskiej.
          </p>
        </div>
      </section>

      {/* Tradition Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[95rem] mx-auto px-2 sm:px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-templar-red text-white text-sm font-semibold mb-4">
                Historia i Znaczenie
              </div>
              <h2 className="font-heading text-4xl md:text-5xl text-templar-black mb-6">
                TRADYCJA ZARZĄDZANIA ZAKONEM
              </h2>
              <div className="space-y-4 text-lg text-gray-700 mb-8">
                <p>
                  Wielki Przeorat stanowi najwyższą władzę w Zakonie Templariuszy, odpowiedzialną 
                  za jego duchowy i administracyjny rozwój. Kontynuuje on tradycję wielkich 
                  mistrzów średniowiecza, adaptując starożytne zasady do współczesnych wyzwań.
                </p>
                <p>
                  Struktura Przeoratu opiera się na wielowiekowej tradycji hierarchii rycerskiej, 
                  gdzie każdy poziom władzy ma swoje określone obowiązki i odpowiedzialności, 
                  zawsze w służbie wartości chrześcijańskich i dobra wspólnoty.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-heading text-templar-red mb-2">800+</div>
                  <div className="text-sm text-gray-600">Lat tradycji</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-heading text-templar-red mb-2">15</div>
                  <div className="text-sm text-gray-600">Krajów</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-heading text-templar-red mb-2">1200+</div>
                  <div className="text-sm text-gray-600">Członków</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-lg overflow-hidden shadow-2xl flex items-center justify-center">
                <div className="text-center p-8">
                  <Crown className="w-24 h-24 text-yellow-400 mx-auto mb-4 opacity-50" />
                  <div className="w-full h-32 bg-gradient-to-b from-templar-red/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hierarchy Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[95rem] mx-auto px-2 sm:px-4 lg:px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-templar-red text-white text-sm font-semibold mb-4">
              Struktura Organizacyjna
            </div>
            <h2 className="font-heading text-4xl md:text-5xl text-templar-black mb-4">
              HIERARCHIA WIELKIEGO PRIORATU
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Poznaj strukturę władzy i odpowiedzialności w ramach najwyższych organów Zakonu
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 - Wielki Mistrz */}
            <div className="bg-templar-black text-white p-8 rounded-lg shadow-xl">
              <div className="w-16 h-16 bg-templar-red/20 flex items-center justify-center rounded-lg mb-6">
                <Crown className="w-8 h-8 text-templar-red-light" />
              </div>
              <h3 className="font-heading text-2xl mb-4">WIELKI MISTRZ</h3>
              <p className="text-gray-300 mb-6">
                Najwyższa władza duchowa i administracyjna w Zakonie, odpowiedzialna za 
                strategiczne kierowanie i reprezentację zewnętrzną.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span className="text-gray-300">Kierownictwo duchowe</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span className="text-gray-300">Decyzje strategiczne</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span className="text-gray-300">Reprezentacja zewnętrzna</span>
                </li>
              </ul>
            </div>

            {/* Card 2 - Rada Priorów */}
            <div className="bg-templar-red text-white p-8 rounded-lg shadow-xl">
              <div className="w-16 h-16 bg-white/20 flex items-center justify-center rounded-lg mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heading text-2xl mb-4">RADA PRIORÓW</h3>
              <p className="text-gray-200 mb-6">
                Organ doradczy i decyzyjny, wspierający Wielkiego Mistrza w zarządzaniu 
                Zakonem i nadzorowaniu działalności regionalnej.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span className="text-gray-200">Doradztwo strategiczne</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span className="text-gray-200">Nadzór nad regionami</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span className="text-gray-200">Rozstrzyganie sporów</span>
                </li>
              </ul>
            </div>

            {/* Card 3 - Priory Regionalni */}
            <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 text-templar-black p-8 rounded-lg shadow-xl">
              <div className="w-16 h-16 bg-templar-black/20 flex items-center justify-center rounded-lg mb-6">
                <MapPin className="w-8 h-8 text-templar-black" />
              </div>
              <h3 className="font-heading text-2xl mb-4">PRIORY REGIONALNI</h3>
              <p className="text-templar-black/80 mb-6">
                Lokalne struktury zarządzające, odpowiedzialne za koordynację działań 
                w poszczególnych regionach i rozwój lokalnej wspólnoty.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <span className="text-green-700 mt-1">✓</span>
                  <span className="text-templar-black/80">Zarządzanie regionem</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-700 mt-1">✓</span>
                  <span className="text-templar-black/80">Koordynacja działań</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-700 mt-1">✓</span>
                  <span className="text-templar-black/80">Rozwój lokalny</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Functions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[95rem] mx-auto px-2 sm:px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/5] bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-lg overflow-hidden shadow-2xl flex items-center justify-center">
                <div className="text-center p-8">
                  <Users className="w-24 h-24 text-templar-red mx-auto mb-4 opacity-50" />
                  <div className="w-full h-32 bg-gradient-to-b from-templar-red/20 to-transparent"></div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-block px-4 py-2 bg-templar-red text-white text-sm font-semibold mb-4">
                Działalność i Odpowiedzialność
              </div>
              <h2 className="font-heading text-4xl md:text-5xl text-templar-black mb-8">
                GŁÓWNE FUNKCJE PRIORATU
              </h2>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-templar-red/10 flex items-center justify-center rounded-lg flex-shrink-0">
                    <Target className="w-6 h-6 text-templar-red" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl text-templar-black mb-2">
                      ZARZĄDZANIE STRATEGICZNE
                    </h3>
                    <p className="text-gray-700">
                      Podejmowanie kluczowych decyzji dotyczących rozwoju Zakonu i jego 
                      przyszłości w zgodzie z tradycją templariuską.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-templar-red/10 flex items-center justify-center rounded-lg flex-shrink-0">
                    <Book className="w-6 h-6 text-templar-red" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl text-templar-black mb-2">
                      OCHRONA TRADYCJI
                    </h3>
                    <p className="text-gray-700">
                      Strzeżenie autentyczności nauk, rytuałów i wartości przekazanych przez 
                      poprzednie pokolenia rycerzy.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-templar-red/10 flex items-center justify-center rounded-lg flex-shrink-0">
                    <Globe className="w-6 h-6 text-templar-red" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl text-templar-red mb-2">
                      WSPÓŁPRACA MIĘDZYNARODOWA
                    </h3>
                    <p className="text-gray-700">
                      Utrzymywanie kontaktów z zakonami templariuskimi na całym świecie oraz 
                      koordynacja wspólnych inicjatyw.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WielkiPrzeorat;

