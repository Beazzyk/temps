import { Calendar, User } from '../../components/icons';

const PRZELEWY = [
  { data: '12.08.2020', euro: '5450 euro', pln: '24.081 złotych' },
  { data: '25.08.2020', euro: '2500 euro', pln: '10.995 złotych' },
  { data: '01.10.2020', euro: '2300 euro', pln: '10.200 złotych' },
  { data: '18.11.2020', euro: '1650 euro', pln: '7.392 złote' },
  { data: '27.01.2021.', euro: '3000 euro', pln: '13.650 złotych' },
  { data: '21.04.2021', euro: '2050 euro', pln: '9.358 złotych' },
  { data: '09.06.2021', euro: '1470 euro', pln: '6.894 złote' },
  { data: '03.08.2021', euro: '1620 euro', pln: '7.355 złotych' },
  { data: '19.01.2022', euro: '3000 euro', pln: '13.830 złotych' },
  { data: '07.03.2022', euro: '1750 euro', pln: '8.750 złotych' },
  { data: '10.05.2022', euro: '2500 euro', pln: '11.835 złotych' },
  { data: '29.07.2022', euro: '1100 euro', pln: '5.201 złotych' },
];

const PomocDlaLibanu = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative min-h-[30vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-templar-burgundy to-templar-red" />
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
            SERCE DLA LIBANU / SERCE DLA SYRII – już przekazano ponad 129.000 PLN
          </h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8 text-gray-800">
            {/* Data i autor na białym tle */}
            <div className="flex flex-wrap gap-6 sm:gap-10 py-4 border-b border-gray-200">
              <div className="flex items-center gap-3 text-gray-700">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-templar-red/10 text-templar-red" aria-hidden>
                  <Calendar className="w-5 h-5" />
                </span>
                <span className="font-semibold">6 sierpnia 2020</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-templar-red/10 text-templar-red" aria-hidden>
                  <User className="w-5 h-5" />
                </span>
                <span className="font-semibold">Krzysztof Kurzeja KGCTJ</span>
              </div>
            </div>

            <p>
              <strong>Zakon Rycerski Templariuszy OMCTH</strong> ogłasza zbiórkę środków pieniężnych na rzecz poszkodowanych podczas tragedii, która nastąpiła <strong>4 sierpnia 2020 roku</strong>, według danych na 11 sierpnia: 157 zabitych i ponad 5000 rannych oraz ponad 300000, w tym grupa kilkudziesięciu tysięcy syryjskich uchodźców wojennych bez dachu nad głową. Apel Patriarchy Antiochii i Jerozolimy, Protektora Templariuszy OMCTH załączony.
            </p>

            <p>
              W Bejrucie ponad 300 000 osób pozostaje bez dachu nad głową, prawie połowa miasta została zrujnowana albo poważnie uszkodzona.
            </p>

            <h3 className="font-heading text-xl text-templar-black font-bold pt-4">
              ŚRODKI PRZEKAZANE NA RZECZ POMOCY DLA LIBAŃSKICH I SYRYJSKICH CHRZEŚCIJAN:
            </h3>

            <div className="overflow-x-auto rounded-xl border border-gray-200 bg-gray-50/50">
              <table className="w-full text-sm min-w-[320px]">
                <thead>
                  <tr className="border-b border-gray-200 bg-templar-red/5">
                    <th className="py-3 px-4 text-left font-bold text-templar-black">Data</th>
                    <th className="py-3 px-4 text-left font-bold text-templar-black">Kwota (euro)</th>
                    <th className="py-3 px-4 text-left font-bold text-templar-black">Kwota (PLN)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {PRZELEWY.map((row, i) => (
                    <tr key={i}>
                      <td className="py-2.5 px-4 font-bold">{row.data}</td>
                      <td className="py-2.5 px-4">{row.euro}</td>
                      <td className="py-2.5 px-4">{row.pln}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="py-3 px-4 border-t border-gray-200 font-bold text-templar-black">
                Suma 129.841 złotych
              </p>
            </div>

            <p>
              Wpłaty tytułem <strong>LIBAN</strong> albo <strong>SERCE</strong> można dokonać na konta Fundacji Templariuszy:
            </p>

            <p><strong>FUNDACJA TEMPLARIUSZY</strong></p>
            <p><strong>KRS 0000656217</strong></p>

            <div className="bg-gray-50 rounded-xl border border-gray-200 my-8 overflow-hidden shadow-sm">
              <div className="bg-templar-red/10 px-5 py-3 border-b border-gray-200">
                <h4 className="font-heading font-bold text-templar-black">Konto bankowe</h4>
              </div>
              <div className="p-5 space-y-4">
                <div>
                  <p className="text-xs uppercase tracking-wide text-gray-500 mb-0.5">Bank</p>
                  <p className="font-bold text-gray-900">PEKAO SA</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-gray-500 mb-0.5">Konto w PLN</p>
                  <p className="font-bold text-gray-900 font-mono tracking-wide">60 1950 0001 2006 0012 1610 0002</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-gray-500 mb-0.5">Konto w euro</p>
                  <p className="font-bold text-gray-900 font-mono tracking-wide">33 1950 0001 2006 0012 1610 0003</p>
                </div>
              </div>
            </div>

            <p>
              albo na zbiórkę publiczną prowadzoną za zgodą Fundacji Templariuszy przez br. Romana Wilkoszewskiego KTJ (
              <a
                href="https://pomagam.pl/omcth"
                target="_blank"
                rel="noopener noreferrer"
                className="text-templar-red hover:text-templar-red-light font-semibold underline"
              >
                https://pomagam.pl/omcth
              </a>
              )
            </p>

            <p className="font-semibold">Z szacunkiem i podziękowaniem za wielkie serce</p>

            <p><strong>Krzysztof Kurzeja KGCTJ</strong></p>
            <p>Wikariusz Generalny – Wielki Przeor Polski Templariuszy OMCTH</p>
            <p>Prezes Zarządu Fundacji Templariuszy w Gliwicach</p>

            <div className="grid sm:grid-cols-2 gap-6 my-12">
              <img src="/liban.jpg" alt="Pomoc dla Libanu" className="w-full rounded-lg shadow-lg" />
              <img src="/liban2.jpg" alt="Pomoc dla Libanu" className="w-full rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PomocDlaLibanu;
