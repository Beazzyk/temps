import { Cross, Calendar, MapPin } from '../components/icons';

const Odeszli = () => {
  const members = [
    {
      name: 'Br. Jan Kowalski',
      date: '15 Listopada 2023',
      location: 'Warszawa',
      description: 'Wieloletni członek Zakonu, zaangażowany w działalność charytatywną i formację duchową.',
    },
    {
      name: 'Br. Piotr Nowak',
      date: '10 Października 2023',
      location: 'Kraków',
      description: 'Komandor Komandorii Małopolskiej, oddany służbie wartościom chrześcijańskim.',
    },
    {
      name: 'Br. Marek Wiśniewski',
      date: '05 Września 2023',
      location: 'Gdańsk',
      description: 'Aktywny członek Komandorii Pomorskiej, znany z działalności charytatywnej.',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-templar-burgundy to-templar-red"></div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="inline-block px-4 py-2 bg-templar-red text-white text-sm font-semibold mb-6">
            Pamięć o Braciach
          </div>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-white mb-6">
            „ODESZLI DO DOMU OJCA"
          </h1>
          <p className="text-xl text-white/90">
            Pamiętamy o naszych braciach i siostrach, którzy odeszli do wieczności
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-lg text-gray-700">
              Wspominamy z wdzięcznością tych, którzy służyli Zakonowi i odeszli do Domu Ojca. 
              Ich pamięć pozostaje z nami, a ich przykład inspiruje nas do dalszej służby.
            </p>
          </div>

          <div className="space-y-8">
            {members.map((member, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-lg border-l-4 border-templar-red shadow-lg"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-templar-red/10 flex items-center justify-center rounded-lg flex-shrink-0">
                    <Cross className="w-8 h-8 text-templar-red" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-heading text-2xl text-templar-black mb-3">
                      {member.name}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 mb-4 text-gray-600">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{member.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span>{member.location}</span>
                      </div>
                    </div>
                    <p className="text-gray-700">{member.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 italic">
              "Wieczny odpoczynek racz im dać, Panie, a światłość wiekuista niechaj im świeci. 
              Niech odpoczywają w pokoju. Amen."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Odeszli;

