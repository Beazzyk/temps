import { Calendar, User } from '../../components/icons';

const KosciolSwHelenyWTurcji = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative min-h-[30vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-templar-burgundy to-templar-red" />
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white">
            Kościół Św. Heleny w Turcji
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
                <span className="font-semibold">20 lutego 2021</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-templar-red/10 text-templar-red" aria-hidden>
                  <User className="w-5 h-5" />
                </span>
                <span className="font-semibold">Krzysztof Glyżewski KTJ</span>
              </div>
            </div>

            <h2 className="font-heading text-3xl text-templar-black font-bold">
              Pomoc dla kościoła św. Heleny w Izmirze, w Turcji
            </h2>

            <p>
              W grudniu 2020 i styczniu 2021 <strong>Wspólnota Templariuszy OMCTH</strong> prowadziła zbiórkę na rzecz odbudowy kościoła św. Heleny w tureckim Izmirze.
            </p>

            <p>
              Kościół ten został poważnie uszkodzony w wyniku silnego trzęsienia ziemi, które miało miejsce <strong>31 października 2020 r.</strong> Parafia katolicka w tym mieście jest młodą wspólnotą, która niestety, jak wszyscy chrześcijanie w Turcji, musi żyć w ukryciu wśród społeczności muzułmańskiej.
            </p>

            <p>
              Jako Templariusze OMCTH zebraliśmy za pośrednictwem serwisu <strong>katolikwspiera.pl</strong> (aktualnie <strong>udasie.pl</strong>) łącznie <strong>14.349 zł</strong>.
            </p>

            <p>
              Kwota ta została przekazana w całości tejże parafii w dniu <strong>19 lutego 2021 r.</strong>, co potwierdził w oficjalnym piśmie <strong>ks. Dariusz Białkowski</strong>, proboszcz parafii.
            </p>

            <div className="my-12">
              <img src="/helena.png" alt="Kościół św. Heleny w Izmirze" className="w-full max-w-2xl mx-auto rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KosciolSwHelenyWTurcji;
