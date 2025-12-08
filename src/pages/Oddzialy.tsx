import { MapPin, Users, Mail, Phone, Info, Crown, Castle, ArrowDown, ArrowUp } from '../components/icons';

const Oddzialy = () => {
  const oddzialy = [
    {
      id: 1,
      name: 'KOMANDORIA MAZOWIECKA',
      location: 'Warszawa, Mazowieckie',
      description: 'Główny oddział w Polsce, siedziba Wielkiego Przeoratu. Odpowiedzialny za koordynację wszystkich oddziałów i reprezentację międzynarodową.',
      komandor: 'Br. Jan Kowalski',
      members: '65 rycerzy',
      icon: Crown,
      iconColor: 'text-templar-red',
      iconBg: 'bg-yellow-400',
    },
    {
      id: 2,
      name: 'KOMANDORIA MAŁOPOLSKA',
      location: 'Kraków, Małopolskie',
      description: 'Jeden z najstarszych oddziałów, z bogatą historią sięgającą średniowiecza. Aktywnie zaangażowany w ochronę dziedzictwa kulturowego regionu.',
      komandor: 'Br. Piotr Nowak',
      members: '62 rycerzy',
      icon: Castle,
      iconColor: 'text-templar-red',
      iconBg: 'bg-yellow-400',
    },
    {
      id: 3,
      name: 'KOMANDORIA POMORSKA',
      location: 'Gdańsk, Pomorskie',
      description: 'Oddział nadmorski, znany z działalności charytatywnej i pomocy społecznej dla społeczności rybackich. Organizuje coroczne pielgrzymki morskie.',
      komandor: 'Br. Marek Wiśniewski',
      members: '40 rycerzy',
      icon: ArrowDown,
      iconColor: 'text-blue-600',
      iconBg: 'bg-white',
    },
    {
      id: 4,
      name: 'KOMANDORIA ŚLĄSKA',
      location: 'Wrocław, Dolnośląskie',
      description: 'Dynamicznie rozwijający się oddział, znany z organizacji konferencji historycznych i współpracy międzynarodowej z oddziałami niemieckimi.',
      komandor: 'Br. Tomasz Zieliński',
      members: '55 rycerzy',
      icon: ArrowUp,
      iconColor: 'text-green-600',
      iconBg: 'bg-white',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-templar-burgundy to-templar-red"></div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-white mb-6">
            NASZE ODDZIAŁY
          </h1>
          <p className="text-xl text-white/90">
            Nasze oddziały działają w kluczowych regionach Polski, każdy z własną komandorią 
            i dedykowanym przywództwem. Każdy oddział kontynuuje tradycję rycerską, służąc 
            lokalnym społecznościom i zachowując nasze wspólne wartości.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[95rem] mx-auto px-2 sm:px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl md:text-5xl text-templar-black mb-4">
              STRUKTURA ORGANIZACYJNA
            </h2>
            <p className="text-lg text-gray-700">
              Nasze oddziały działają w kluczowych regionach Polski, każdy z własną komandorią i dedykowanym przywództwem
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-templar-red text-white p-8 rounded-lg text-center shadow-lg">
              <MapPin className="w-12 h-12 mx-auto mb-4" />
              <div className="text-4xl font-heading mb-2">12</div>
              <div className="text-sm">ODDZIAŁÓW</div>
            </div>
            <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 text-templar-black p-8 rounded-lg text-center shadow-lg">
              <Users className="w-12 h-12 mx-auto mb-4" />
              <div className="text-4xl font-heading mb-2">450+</div>
              <div className="text-sm">RYCERZY</div>
            </div>
            <div className="bg-gray-800 text-white p-8 rounded-lg text-center shadow-lg">
              <MapPin className="w-12 h-12 mx-auto mb-4" />
              <div className="text-4xl font-heading mb-2">16</div>
              <div className="text-sm">WOJEWÓDZTW</div>
            </div>
            <div className="bg-blue-800 text-white p-8 rounded-lg text-center shadow-lg">
              <Users className="w-12 h-12 mx-auto mb-4" />
              <div className="text-4xl font-heading mb-2">25</div>
              <div className="text-sm">LAT DZIAŁALNOŚCI</div>
            </div>
          </div>
        </div>
      </section>

      {/* Oddziały Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[95rem] mx-auto px-2 sm:px-4 lg:px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-templar-red text-white text-sm font-semibold mb-4">
              Regionalne Komandorie
            </div>
            <h2 className="font-heading text-4xl md:text-5xl text-templar-black">
              ODDZIAŁY W POLSCE
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {oddzialy.map((oddzial) => {
              const Icon = oddzial.icon;
              return (
                <div
                  key={oddzial.id}
                  className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
                >
                  <div className="relative h-64 bg-gradient-to-br from-gray-800 via-gray-900 to-black flex items-center justify-center">
                    <div className="absolute inset-0 opacity-50">
                      <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 50% 50%, rgba(139, 0, 0, 0.2) 0%, transparent 70%)`
                      }}></div>
                    </div>
                    <Icon className={`w-24 h-24 ${oddzial.iconColor} opacity-30`} />
                    <div className={`absolute top-4 right-4 w-12 h-12 ${oddzial.iconBg} rounded-full flex items-center justify-center shadow-lg`}>
                      <Icon className={`w-6 h-6 ${oddzial.iconColor}`} />
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-heading text-2xl text-templar-black mb-3">
                      {oddzial.name}
                    </h3>
                    <div className="flex items-center text-gray-600 mb-4">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{oddzial.location}</span>
                    </div>
                    <p className="text-gray-700 mb-6">{oddzial.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-gray-700">
                        <Users className="w-4 h-4 mr-2 text-templar-red" />
                        <span className="font-semibold">Komandor:</span>
                        <span className="ml-2">{oddzial.komandor}</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <Users className="w-4 h-4 mr-2 text-templar-red" />
                        <span className="font-semibold">Członkowie:</span>
                        <span className="ml-2">{oddzial.members}</span>
                      </div>
                    </div>

                    <div className="flex space-x-3">
                      <button className="flex-1 px-4 py-2 bg-templar-red hover:bg-templar-red-light text-white font-semibold rounded-lg transition-colors flex items-center justify-center space-x-2">
                        <Info className="w-4 h-4" />
                        <span>Szczegóły</span>
                      </button>
                      <button className="flex-1 px-4 py-2 bg-white border-2 border-templar-red text-templar-red hover:bg-templar-red/10 font-semibold rounded-lg transition-colors flex items-center justify-center space-x-2">
                        <Mail className="w-4 h-4" />
                        <span>Kontakt</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center items-center space-x-4">
            <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors">
              &lt;
            </button>
            <span className="text-gray-700 font-semibold">4 / 7</span>
            <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors">
              &gt;
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Oddzialy;

