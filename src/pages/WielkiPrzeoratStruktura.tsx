import { Crown, Users, MapPin, Shield } from '../components/icons';

const WielkiPrzeoratStruktura = () => {
  return (
    <div className="pt-20">
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-templar-burgundy to-templar-red"></div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="inline-block px-4 py-2 bg-templar-red text-white text-sm font-semibold mb-6">
            Organizacja
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            STRUKTURA
          </h1>
          <p className="text-xl text-white/90">
            Hierarchia i organizacja Wielkiego Przeoratu Polski
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-2 sm:px-4 lg:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Wielki Mistrz */}
            <div className="bg-templar-black text-white p-8 rounded-lg shadow-xl">
              <div className="w-16 h-16 bg-templar-red/20 flex items-center justify-center rounded-lg mb-6">
                <Crown className="w-8 h-8 text-templar-red-light" />
              </div>
              <h3 className="font-heading text-2xl mb-4">WIELKI MISTRZ</h3>
              <p className="text-gray-300 mb-4">
                Najwyższa władza duchowa i administracyjna w Wielkim Przeoracie
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Kierownictwo duchowe</li>
                <li>• Decyzje strategiczne</li>
                <li>• Reprezentacja zewnętrzna</li>
              </ul>
            </div>

            {/* Rada Priorów */}
            <div className="bg-templar-red text-white p-8 rounded-lg shadow-xl">
              <div className="w-16 h-16 bg-white/20 flex items-center justify-center rounded-lg mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heading text-2xl mb-4">RADA PRIORÓW</h3>
              <p className="text-gray-200 mb-4">
                Organ doradczy i decyzyjny wspierający Wielkiego Mistrza
              </p>
              <ul className="space-y-2 text-sm text-gray-200">
                <li>• Doradztwo strategiczne</li>
                <li>• Nadzór nad regionami</li>
                <li>• Rozstrzyganie sporów</li>
              </ul>
            </div>

            {/* Komandorie Regionalne */}
            <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 text-templar-black p-8 rounded-lg shadow-xl">
              <div className="w-16 h-16 bg-templar-black/20 flex items-center justify-center rounded-lg mb-6">
                <MapPin className="w-8 h-8 text-templar-black" />
              </div>
              <h3 className="font-heading text-2xl mb-4">KOMANDORIE REGIONALNE</h3>
              <p className="text-templar-black/80 mb-4">
                Lokalne struktury zarządzające w poszczególnych regionach
              </p>
              <ul className="space-y-2 text-sm text-templar-black/80">
                <li>• Zarządzanie regionem</li>
                <li>• Koordynacja działań</li>
                <li>• Rozwój lokalny</li>
              </ul>
            </div>

            {/* Kapituły */}
            <div className="bg-gray-800 text-white p-8 rounded-lg shadow-xl">
              <div className="w-16 h-16 bg-templar-red/20 flex items-center justify-center rounded-lg mb-6">
                <Shield className="w-8 h-8 text-templar-red" />
              </div>
              <h3 className="font-heading text-2xl mb-4">KAPITUŁY</h3>
              <p className="text-gray-300 mb-4">
                Organy decyzyjne w poszczególnych komandoriach
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Decyzje lokalne</li>
                <li>• Formacja członków</li>
                <li>• Organizacja wydarzeń</li>
              </ul>
            </div>

            {/* Członkowie */}
            <div className="bg-blue-800 text-white p-8 rounded-lg shadow-xl">
              <div className="w-16 h-16 bg-white/20 flex items-center justify-center rounded-lg mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heading text-2xl mb-4">CZŁONKOWIE</h3>
              <p className="text-gray-200 mb-4">
                Rycerze i siostry zakonu templariuszy
              </p>
              <ul className="space-y-2 text-sm text-gray-200">
                <li>• Rycerze</li>
                <li>• Siostry</li>
                <li>• Kandydaci</li>
              </ul>
            </div>

            {/* Sympatycy */}
            <div className="bg-gray-700 text-white p-8 rounded-lg shadow-xl">
              <div className="w-16 h-16 bg-templar-red/20 flex items-center justify-center rounded-lg mb-6">
                <Users className="w-8 h-8 text-templar-red" />
              </div>
              <h3 className="font-heading text-2xl mb-4">SYMPATYCY</h3>
              <p className="text-gray-300 mb-4">
                Osoby wspierające działalność zakonu
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Wsparcie duchowe</li>
                <li>• Wsparcie materialne</li>
                <li>• Współpraca</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WielkiPrzeoratStruktura;

