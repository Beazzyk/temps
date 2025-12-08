import { Book, FileText } from '../components/icons';

const WielkiPrzeoratStatut = () => {
  return (
    <div className="pt-20">
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-templar-burgundy to-templar-red"></div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="inline-block px-4 py-2 bg-templar-red text-white text-sm font-semibold mb-6">
            Dokumenty
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            STATUT GENERALNY
          </h1>
          <p className="text-xl text-white/90">
            Podstawowe zasady i regulacje Wielkiego Przeoratu Polski
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-2 sm:px-4 lg:px-6">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              <div>
                <h2 className="font-heading text-3xl text-templar-black mb-4">Rozdział I - Postanowienia Ogólne</h2>
                <p className="text-gray-700">
                  Wielki Przeorat Polski jest najwyższą władzą duchową i administracyjną 
                  Ordo Equestris Christi Templique Hierosolymitani na terenie Rzeczypospolitej Polskiej.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-3xl text-templar-black mb-4">Rozdział II - Struktura i Władza</h2>
                <p className="text-gray-700">
                  Wielki Przeorat składa się z Wielkiego Mistrza, Rady Priorów oraz struktur 
                  regionalnych. Wszystkie decyzje podejmowane są zgodnie z tradycją templariuską 
                  i wartościami chrześcijańskimi.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-3xl text-templar-black mb-4">Rozdział III - Obowiązki i Prawa</h2>
                <p className="text-gray-700">
                  Członkowie Wielkiego Przeoratu zobowiązani są do przestrzegania zasad honoru, 
                  służby Bogu i bliźnim oraz ochrony tradycji zakonu templariuszy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WielkiPrzeoratStatut;

