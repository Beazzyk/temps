import { Book, FileText, Shield } from '../components/icons';

const ZakonStatut = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-templar-burgundy to-templar-red"></div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="inline-block px-4 py-2 bg-templar-red text-white text-sm font-semibold mb-6">
            Statut Zakonu
          </div>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-white mb-6">
            STATUT ZAKONU TEMPLARIUSZY
          </h1>
          <p className="text-xl text-white/90">
            Podstawowe zasady, wartości i struktura organizacyjna Zakonu
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              <div>
                <h2 className="font-heading text-3xl text-templar-black mb-4">Rozdział I - Postanowienia Ogólne</h2>
                <p className="text-gray-700">
                  Ordo Equestris Christi Templique Hierosolymitani (OECTH) jest stowarzyszeniem 
                  kontynuującym tradycję i wartości Zakonu Templariuszy, działającym na podstawie 
                  prawa polskiego i w zgodzie z wartościami chrześcijańskimi.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-3xl text-templar-black mb-4">Rozdział II - Cele i Zadania</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <Shield className="w-6 h-6 text-templar-red mt-1 flex-shrink-0" />
                    <p className="text-gray-700">
                      Krzewienie wartości chrześcijańskich i tradycji rycerskich
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Shield className="w-6 h-6 text-templar-red mt-1 flex-shrink-0" />
                    <p className="text-gray-700">
                      Działalność charytatywna i pomoc potrzebującym
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Shield className="w-6 h-6 text-templar-red mt-1 flex-shrink-0" />
                    <p className="text-gray-700">
                      Ochrona dziedzictwa historycznego i kulturowego
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Shield className="w-6 h-6 text-templar-red mt-1 flex-shrink-0" />
                    <p className="text-gray-700">
                      Rozwój duchowy i formacja członków
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-heading text-3xl text-templar-black mb-4">Rozdział III - Struktura Organizacyjna</h2>
                <p className="text-gray-700 mb-4">
                  Zakon składa się z następujących organów:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Wielki Przeorat - najwyższa władza w Zakonie</li>
                  <li>Rada Priorów - organ doradczy i decyzyjny</li>
                  <li>Komandorie Regionalne - lokalne struktury zarządzające</li>
                  <li>Kapituły - organy decyzyjne w poszczególnych regionach</li>
                </ul>
              </div>

              <div>
                <h2 className="font-heading text-3xl text-templar-black mb-4">Rozdział IV - Członkostwo</h2>
                <p className="text-gray-700">
                  Członkiem Zakonu może zostać osoba, która ukończyła 18 lat, wyznaje wartości 
                  chrześcijańskie, akceptuje statut i zasady Zakonu oraz przejdzie odpowiednią 
                  formację i ceremonię przyjęcia.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-templar-red">
                <p className="text-gray-700 italic">
                  "Non nobis, Domine, non nobis, sed Nomini tuo da gloriam"<br />
                  <span className="text-sm">(Nie nam, Panie, nie nam, ale Twemu imieniu daj chwałę)</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ZakonStatut;

