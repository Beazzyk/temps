import { Link } from 'react-router-dom';
import { Heart, ArrowRight } from '../components/icons';

const Projekty = () => {
  const projekty = [
    {
      slug: 'serce-dla-syrii',
      title: 'Serce dla Syrii',
      description: 'Projekt pomocy humanitarnej dla mieszkańców Syrii',
    },
    {
      slug: 'kosciol-sw-heleny-w-turcji',
      title: 'Kościół Św. Heleny w Turcji',
      description: 'Projekt odbudowy i wsparcia kościoła',
    },
    {
      slug: 'pomoc-dla-libanu',
      title: 'Pomoc dla Libanu',
      description: 'Działania pomocowe dla mieszkańców Libanu',
    },
    {
      slug: 'roza-zywego-rozanca',
      title: 'Róża Żywego Różańca',
      description: 'Wspólnota modlitewna różańcowa',
    },
    {
      slug: 'matka-boska-strzegomska',
      title: 'Matka Boska Strzegomska zwana „Fundatorką"',
      description: 'Projekt związany z kultem Matki Bożej',
    },
    {
      slug: 'ksiazka-dla-wieznia',
      title: 'Książka dla Więźnia',
      description: 'Akcja przekazywania książek więźniom',
    },
    {
      slug: 'benefactor-templi',
      title: 'Benefactor Templi',
      description: 'Program dla dobroczyńców Zakonu',
    },
    {
      slug: 'familiare-templi',
      title: 'Familiare Templi',
      description: 'Wspólnota rodzin związanych z Zakonem',
    },
    {
      slug: 'dobrodziej-roku-dobry-rycerz',
      title: 'Dobrodziej Roku - Dobry Rycerz',
      description: 'Nagroda dla wybitnych dobroczyńców',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-templar-burgundy to-templar-red"></div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="inline-block px-4 py-2 bg-templar-red text-white text-sm font-semibold mb-6">
            PROJEKTY
          </div>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-white mb-6">
            NASZE PROJEKTY
          </h1>
          <p className="text-xl text-white/90">
            Poznaj wszystkie inicjatywy i projekty realizowane przez Zakon Templariuszy
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-[95rem] mx-auto px-2 sm:px-4 lg:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projekty.map((projekt) => (
              <Link
                key={projekt.slug}
                to={`/projekty/${projekt.slug}`}
                className="bg-white p-8 rounded-lg border border-gray-200 shadow-lg hover:shadow-xl transition-all hover:border-templar-red group"
              >
                <div className="w-16 h-16 bg-templar-red/10 flex items-center justify-center rounded-lg mb-6 group-hover:bg-templar-red/20 transition-colors">
                  <Heart className="w-8 h-8 text-templar-red" />
                </div>
                <h3 className="font-heading text-2xl text-templar-black mb-4 group-hover:text-templar-red transition-colors">
                  {projekt.title}
                </h3>
                <p className="text-gray-700 mb-6">
                  {projekt.description}
                </p>
                <div className="text-templar-red font-semibold flex items-center space-x-2 group-hover:space-x-3 transition-all">
                  <span>Dowiedz się więcej</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projekty;
