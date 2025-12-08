import { Shield, Crown, Scroll, Cross, Lock, Award } from '../components/icons';

const ZakonHistoria = () => {
  const timelineEvents = [
    {
      year: '1119',
      title: 'Powstanie Zakonu',
      description: 'Hugon z Payns wraz z ośmioma towarzyszami założył Zakon Ubogich Rycerzy Chrystusa i Świątyni Salomona w Jerozolimie.',
      icon: Crown,
      side: 'left',
    },
    {
      year: '1129',
      title: 'Sobór w Troyes',
      description: 'Oficjalne uznanie Zakonu przez Kościół katolicki. Święty Bernard z Clairvaux napisał regułę zakonną.',
      icon: Scroll,
      side: 'right',
    },
    {
      year: '1139',
      title: 'Bulla Omne Datum Optimum',
      description: 'Papież Innocenty II przyznał Templariuszom niezależność od władz świeckich i kościelnych.',
      icon: Shield,
      side: 'left',
    },
    {
      year: '1187',
      title: 'Bitwa pod Hattin',
      description: 'Decydująca porażka krzyżowców. Upadek Jerozolimy i początek końca państw krzyżowych.',
      icon: Cross,
      side: 'right',
    },
    {
      year: '1307',
      title: 'Czarny Piątek',
      description: 'Filip IV Piękny nakazał aresztowanie wszystkich Templariuszy we Francji. Początek prześladowań Zakonu.',
      icon: Lock,
      side: 'left',
    },
    {
      year: '2024',
      title: 'Współczesny Zakon',
      description: 'Kontynuacja tradycji i wartości Templariuszy w służbie wiary, kultury i społeczności chrześcijańskiej.',
      icon: Award,
      side: 'right',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-templar-burgundy to-templar-red"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(139, 0, 0, 0.3) 0%, transparent 50%),
                             radial-gradient(circle at 80% 80%, rgba(107, 0, 0, 0.3) 0%, transparent 50%)`
          }}></div>
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="inline-block px-4 py-2 bg-templar-red text-white text-sm font-semibold mb-6">
            Historia i Misja Zakonu
          </div>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-white mb-6">
            HISTORIA ZAKONU TEMPLARIUSZY
          </h1>
          <p className="text-xl text-white/90">
            Poznaj bogatą historię Zakonu Templariuszy - od jego powstania w 1119 roku 
            po współczesną misję obrony wartości chrześcijańskich i tradycji europejskich.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[95rem] mx-auto px-2 sm:px-4 lg:px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-templar-red text-white text-sm font-semibold mb-4">
              KAMIENIE MILOWE W HISTORII
            </div>
            <h2 className="font-heading text-4xl md:text-5xl text-templar-black mb-4">
              Najważniejsze wydarzenia w dziejach Zakonu Templariuszy
            </h2>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-templar-red via-templar-red-light to-templar-red"></div>

            {/* Timeline Events */}
            <div className="space-y-24">
              {timelineEvents.map((event, index) => {
                const Icon = event.icon;
                const isLeft = event.side === 'left';
                
                return (
                  <div
                    key={index}
                    className={`relative flex items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    {/* Content Card */}
                    <div className={`w-5/12 ${isLeft ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                        <div className="flex items-center space-x-3 mb-3">
                          {!isLeft && <Icon className="w-6 h-6 text-templar-red" />}
                          <div className={`text-2xl font-heading text-templar-red ${isLeft ? 'ml-auto' : ''}`}>
                            {event.year}
                          </div>
                          {isLeft && <Icon className="w-6 h-6 text-templar-red" />}
                        </div>
                        <h3 className="font-heading text-xl text-templar-black mb-2">
                          {event.title}
                        </h3>
                        <p className="text-gray-700">{event.description}</p>
                      </div>
                    </div>

                    {/* Timeline Dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-templar-red rounded-full border-4 border-white shadow-lg flex items-center justify-center z-10">
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    {/* Empty space for alignment */}
                    <div className="w-5/12"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[95rem] mx-auto px-2 sm:px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-templar-red text-white text-sm font-semibold mb-4">
                Nasza Misja
              </div>
              <h2 className="font-heading text-4xl md:text-5xl text-templar-black mb-6">
                WARTOŚCI I CELE
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Współczesny Zakon Templariuszy kontynuuje dziedzictwo swoich poprzedników, 
                adaptując starożytne wartości do wyzwań XXI wieku. Nasza działalność opiera 
                się na trzech fundamentalnych filarach: honorze, braterstwie i miłosierdziu.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Shield className="w-6 h-6 text-templar-red mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-heading text-xl text-templar-black mb-1">Honor</h3>
                    <p className="text-gray-700">
                      Przestrzegamy najwyższych standardów etycznych i moralnych, działając 
                      zgodnie z zasadami honoru rycerskiego.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Shield className="w-6 h-6 text-templar-red mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-heading text-xl text-templar-black mb-1">Braterstwo</h3>
                    <p className="text-gray-700">
                      Tworzymy silną wspólnotę opartą na wzajemnym szacunku, zaufaniu i 
                      gotowości niesienia pomocy.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Shield className="w-6 h-6 text-templar-red mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-heading text-xl text-templar-black mb-1">Miłosierdzie</h3>
                    <p className="text-gray-700">
                      Angażujemy się w działalność charytatywną i pomoc tym, którzy potrzebują 
                      wsparcia w trudnych chwilach.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-lg overflow-hidden shadow-2xl flex items-center justify-center">
                <div className="text-center p-8">
                  <Shield className="w-24 h-24 text-templar-red mx-auto mb-4 opacity-50" />
                  <div className="w-full h-32 bg-gradient-to-b from-templar-red/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ZakonHistoria;

