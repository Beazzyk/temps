import { Shield, Mail, FileText, Users, CheckCircle } from '../components/icons';

const ZostanTemplariuszem = () => {
  const kroki = [
    {
      numer: 1,
      tytul: 'Złożenie dokumentów',
      opis: 'Kandydat do Zakonu składa następujące dokumenty: Aplikację Kandydacką, życiorys, list motywacyjny napisany własnoręcznie, oświadczenie o niekaralności za przestępstwa umyślne, fotografię, opinię Proboszcza oraz inne dokumenty, poświadczające jego zaangażowanie w działalność na rzecz Kościoła oraz społeczeństwa.',
    },
    {
      numer: 2,
      tytul: 'Sposób złożenia dokumentów',
      opis: 'Dokumenty można złożyć mailem w formie fotokopii, a oryginały przesłać pocztą albo przekazać dowolnemu Rycerzowi lub Damie Świątyni Jerozolimskiej.',
    },
    {
      numer: 3,
      tytul: 'Procedura kwalifikacyjna',
      opis: 'Kandydat, który złożył wymagane procedurą dokumenty podlega procedurze kwalifikacyjnej przez Komisję Kwalifikacyjną, do której ad casum Wielki Przeor powołuje nie więcej niż 12 osób. Procedura przed Komisją nie powinna trwać dłużej niż 30 dni.',
    },
    {
      numer: 4,
      tytul: 'Decyzja Wielkiego Przeora',
      opis: 'Wielki Przeor po wysłuchaniu stanowiska Komisji dopuszcza Kandydata do Nowicjatu Świątyni Jerozolimskiej i od tej chwili Kandydat otrzymuje rangę Postulanta Świątyni Jerozolimskiej, lub informuje Kandydata o odrzuceniu jego prośby.',
    },
    {
      numer: 5,
      tytul: 'Uczestnictwo w Konwencie',
      opis: 'Postulant dopuszczony do Nowicjatu Świątyni Jerozolimskiej zobowiązany jest do uczestnictwa przed swoją Inwestyturą w przynajmniej jednym Konwencie właściwego dla siebie Wielkiego Przeoratu, aby dał się poznać Braciom i Siostrom.',
    },
    {
      numer: 6,
      tytul: 'Opieka podczas Konwentu',
      opis: 'Członkowie Komisji Kwalifikacyjnej podczas Konwentu powinni w szczególny sposób zaopiekować się Postulantem, aby podjąć decyzję co do rekomendacji Wielkiemu Przeorowi do dopuszczenia Postulanta do złożenia Przysięgi Nowicjusza Świątyni Jerozolimskiej.',
    },
    {
      numer: 7,
      tytul: 'Decyzja o dopuszczeniu do Przysięgi',
      opis: 'Decyzja Wielkiego Przeora o dopuszczeniu do złożenia Przysięgi Nowicjusza Świątyni Jerozolimskiej jest suwerenna i może zostać zmieniona jedynie Dekretem Wielkiego Mistrza.',
    },
    {
      numer: 8,
      tytul: 'Ranga Nowicjusza',
      opis: 'Postulant po złożeniu Przysięgi Nowicjusza Świątyni Jerozolimskiej otrzymuje rangę Nowicjusza Świątyni Jerozolimskiej.',
    },
    {
      numer: 9,
      tytul: 'Prawo Wielkiego Mistrza',
      opis: 'Wielki Mistrz ma prawo do włączenia się w proces decyzyjny na każdym etapie postępowania kwalifikacyjnego.',
    },
    {
      numer: 10,
      tytul: 'Prawo do munduru',
      opis: 'Nowicjusz dopuszczony do Inwestytury ma prawo do munduru zakonnego.',
    },
  ];

  const obowiazki = [
    'Życie w zgodzie z Ewangelią i nauczaniem Kościoła Katolickiego.',
    'Codzienne czytanie i rozważanie fragmentu Pisma Świętego, zwłaszcza Ewangelii.',
    'Zaleca się odmówienie przynajmniej jednej części Brewiarza dla świeckich.',
    'Każdego 12 dnia miesiąca należy odmówić w intencji Ordo Equitum Christi Templique Hierosolymitani Litanię do Świętego Michała Archanioła (12 dzień miesiąca był dawniej poświęcony św. Michałowi Archaniołowi).',
    'W każdą trzecią środę miesiąca sprawowana jest Eucharystia o nawrócenie wrogów Kościoła przez wstawiennictwo św. Maksymiliana Kolbe. Każdy templariusz zobowiązany jest tego dnia do szczególnej modlitwy (zgodnej z sumieniem) w tej intencji.',
    'Uczestniczenie przynajmniej jeden raz w roku w Konwencie lub innym zapowiedzianym spotkaniu.',
    'Uiszczanie corocznej oblacji w wysokości nie niższej niż 100 euro.',
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
            Dołącz do Zakonu
          </div>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-white mb-6">
            ZOSTAŃ TEMPLARIUSZEM
          </h1>
          <p className="text-xl text-white/90">
            Dołącz do Ordo Equitum Christi Templique Hierosolymitani i kontynuuj tradycję 
            rycerzy chrześcijańskich w służbie wiary i społeczeństwa.
          </p>
        </div>
      </section>

      {/* Kto może zostać templariuszem */}
      <section className="py-20 bg-white">
        <div className="max-w-[95rem] mx-auto px-2 sm:px-4 lg:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-templar-red text-white text-sm font-semibold mb-4">
                WYMAGANIA
              </div>
              <h2 className="font-heading text-4xl md:text-5xl text-templar-black mb-6">
                Kto może zostać templariuszem?
              </h2>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-templar-red mb-8">
              <p className="text-lg text-gray-700 mb-6">
                Członkiem OECTH może zostać katolik, mężczyzna albo kobieta, osoba świecka, 
                spełniająca wymagania przewidziane Statutem Generalnym oraz innymi przepisami.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Users className="w-6 h-6 text-templar-red mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-heading text-xl text-templar-black mb-2">
                      Rodzaje członkostwa OECTH
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Rycerze i Damy Świątyni Jerozolimskiej</li>
                      <li>• Kapelani Świątyni Jerozolimskiej</li>
                      <li>• Giermkowie</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
              <p className="text-gray-700 mb-4">
                <strong className="text-templar-black">Członkowie OECTH nie mogą należeć</strong> do organizacji, 
                stowarzyszeń czy partii, których działalność przeciwna jest Bogu i doktrynie oraz 
                nauczaniu Kościoła Rzymsko-Katolickiego.
              </p>
              <p className="text-gray-700">
                <strong className="text-templar-black">OECTH nie wymaga legitymizacji</strong> szlacheckiego pochodzenia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Jak zostać templariuszem - krok po kroczku */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[95rem] mx-auto px-2 sm:px-4 lg:px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-templar-red text-white text-sm font-semibold mb-4">
              PROCEDURA
            </div>
            <h2 className="font-heading text-4xl md:text-5xl text-templar-black mb-4">
              Jak zostać templariuszem – krok po kroczku
            </h2>
          </div>

          <div className="max-w-5xl mx-auto space-y-6">
            {kroki.map((krok, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border-l-4 border-templar-red hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-templar-red rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {krok.numer}
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-heading text-xl text-templar-black mb-2">
                      {krok.tytul}
                    </h3>
                    <p className="text-gray-700">{krok.opis}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aplikacja kandydacka */}
      <section className="py-20 bg-white">
        <div className="max-w-[95rem] mx-auto px-2 sm:px-4 lg:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-templar-red text-white text-sm font-semibold mb-4">
                APLIKACJA
              </div>
              <h2 className="font-heading text-4xl md:text-5xl text-templar-black mb-6">
                Aplikacja kandydacka
              </h2>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-lg border border-gray-200 shadow-lg">
              <div className="flex items-start space-x-4 mb-6">
                <Mail className="w-8 h-8 text-templar-red flex-shrink-0" />
                <div>
                  <h3 className="font-heading text-2xl text-templar-black mb-4">
                    Jak otrzymać aplikację?
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Aplikację kandydacką można otrzymać wyłącznie e-mailem po skierowaniu takiej prośby na adres:
                  </p>
                  <a
                    href="mailto:templumchristi@gmail.com"
                    className="inline-block px-6 py-3 bg-templar-red hover:bg-templar-red-light text-white font-semibold rounded transition-colors"
                  >
                    templumchristi@gmail.com
                  </a>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="font-heading text-xl text-templar-black mb-4 flex items-center space-x-2">
                  <FileText className="w-6 h-6 text-templar-red" />
                  <span>Prośba powinna zawierać:</span>
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-templar-red mt-1 flex-shrink-0" />
                    <span>imię i nazwisko Kandydata</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-templar-red mt-1 flex-shrink-0" />
                    <span>datę urodzenia i miejsce zamieszkania</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-templar-red mt-1 flex-shrink-0" />
                    <span>stan cywilny</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-templar-red mt-1 flex-shrink-0" />
                    <span>krótką charakterystykę Kandydata</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Obowiązki Templariusza */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[95rem] mx-auto px-2 sm:px-4 lg:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-templar-red text-white text-sm font-semibold mb-4">
                OBOWIĄZKI
              </div>
              <h2 className="font-heading text-4xl md:text-5xl text-templar-black mb-6">
                Obowiązki Templariusza
              </h2>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="space-y-4">
                {obowiazki.map((obowiazek, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Shield className="w-6 h-6 text-templar-red mt-1 flex-shrink-0" />
                    <p className="text-gray-700 text-lg">{obowiazek}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ZostanTemplariuszem;
