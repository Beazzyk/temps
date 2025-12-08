import { FileText, Download } from '../components/icons';

const WielkiPrzeoratDokumenty = () => {
  const dokumenty = [
    {
      title: 'Regulamin Wewnętrzny',
      description: 'Szczegółowe zasady funkcjonowania Wielkiego Przeoratu',
      date: '2024-01-15',
    },
    {
      title: 'Kodeks Etyczny',
      description: 'Zasady etyczne i moralne obowiązujące członków',
      date: '2024-01-10',
    },
    {
      title: 'Procedury Ceremonialne',
      description: 'Opis procedur i ceremonii zakonu',
      date: '2023-12-20',
    },
    {
      title: 'Zasady Rekrutacji',
      description: 'Warunki i procedury przyjmowania nowych członków',
      date: '2023-11-15',
    },
  ];

  return (
    <div className="pt-20">
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-templar-burgundy to-templar-red"></div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="inline-block px-4 py-2 bg-templar-red text-white text-sm font-semibold mb-6">
            Dokumenty
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            POZOSTAŁE DOKUMENTY
          </h1>
          <p className="text-xl text-white/90">
            Wszystkie dokumenty i materiały Wielkiego Przeoratu Polski
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-2 sm:px-4 lg:px-6">
          <div className="space-y-6">
            {dokumenty.map((dokument, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4 flex-grow">
                    <div className="w-12 h-12 bg-templar-red/10 flex items-center justify-center rounded-lg flex-shrink-0">
                      <FileText className="w-6 h-6 text-templar-red" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-heading text-xl text-templar-black mb-2">
                        {dokument.title}
                      </h3>
                      <p className="text-gray-700 mb-2">{dokument.description}</p>
                      <p className="text-sm text-gray-500">Data: {dokument.date}</p>
                    </div>
                  </div>
                  <button className="ml-4 px-4 py-2 bg-templar-red hover:bg-templar-red-light text-white rounded transition-colors flex items-center space-x-2 flex-shrink-0">
                    <Download className="w-4 h-4" />
                    <span>Pobierz</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WielkiPrzeoratDokumenty;

