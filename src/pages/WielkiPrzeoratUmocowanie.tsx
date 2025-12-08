import { Shield } from '../components/icons';

const WielkiPrzeoratUmocowanie = () => {
  return (
    <div className="pt-20">
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-templar-burgundy to-templar-red"></div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="inline-block px-4 py-2 bg-templar-red text-white text-sm font-semibold mb-6">
            Dokumenty
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            UMOCOWANIE
          </h1>
          <p className="text-xl text-white/90">
            Podstawa prawna i umocowanie Wielkiego Przeoratu Polski
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-2 sm:px-4 lg:px-6">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              <div>
                <h2 className="font-heading text-3xl text-templar-black mb-4">Podstawa Prawna</h2>
                <p className="text-gray-700">
                  Wielki Przeorat Polski działa na podstawie prawa polskiego, w szczególności 
                  ustawy o stowarzyszeniach oraz zgodnie z tradycją i wartościami Ordo Equestris 
                  Christi Templique Hierosolymitani.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-3xl text-templar-black mb-4">Umocowanie Międzynarodowe</h2>
                <p className="text-gray-700">
                  Wielki Przeorat Polski jest uznanym przedstawicielstwem międzynarodowego 
                  zakonu templariuszy na terenie Polski, działającym w zgodzie z zasadami 
                  i tradycją organizacji.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-3xl text-templar-black mb-4">Autoryzacja i Uznanie</h2>
                <p className="text-gray-700">
                  Działalność Wielkiego Przeoratu jest autoryzowana przez najwyższe władze 
                  zakonu templariuszy i uznana przez odpowiednie instytucje kościelne i świeckie.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WielkiPrzeoratUmocowanie;

