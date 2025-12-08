import { Link } from 'react-router-dom';
import { ArrowRight, Cross, Heart, Shield } from '../components/icons';

const Aktualnosci = () => {
  const articles = [
    {
      id: 1,
      category: 'Uroczystości',
      date: '05 Grudnia 2024',
      title: 'Uroczyste Pasowanie Nowych Rycerzy',
      excerpt: 'W historycznej katedrze w Krakowie odbyła się uroczysta ceremonia pasowania nowych rycerzy Zakonu. Pięciu kandydatów złożyło przysięgę wierności zasadom rycerskim i wartościom chrześcijańskim w obecności Wielkiego Mistrza i członków kapituły.',
      gradient: 'from-gray-800 to-black',
      icon: 'Cross',
    },
    {
      id: 2,
      category: 'Pomoc',
      date: '02 Grudnia 2024',
      title: 'Świąteczna Zbiórka Dla Potrzebujących',
      excerpt: 'Zakończono tegoroczną akcję charytatywną, która przyniosła pomoc dla ponad 700 rodzin w całej Polsce. Zebrano żywność i dary rzeczowe dla najbardziej potrzebujących, w tym również dla dzieci z rodzin w trudnej sytuacji materialnej.',
      gradient: 'from-templar-red/20 to-gray-800',
      icon: 'Heart',
    },
    {
      id: 3,
      category: 'Pielgrzymki',
      date: '01 Grudnia 2024',
      title: 'Pielgrzymka Do Ziemi Świętej',
      excerpt: 'Członkowie Wielkiego Przeoratu Polskiego odbyli duchową podróż do Jerozolimy, odwiedzając miejsca związane z historią templariuszy. Pielgrzymka była okazją do pogłębienia więzi duchowych i modlitwy w miejscach świętych.',
      gradient: 'from-blue-900 to-gray-800',
      icon: 'Cross',
    },
    {
      id: 4,
      category: 'Konferencje',
      date: '30 Listopada 2024',
      title: 'Konferencja Naukowa O Historii Templariuszy',
      excerpt: 'Zorganizowaliśmy międzynarodową konferencję poświęconą historii zakonu templariuszy w Polsce i Europie. Udział wzięli wybitni historycy i badacze, prezentując najnowsze odkrycia dotyczące działalności zakonu.',
      gradient: 'from-gray-700 to-gray-900',
      icon: 'Shield',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-templar-burgundy to-templar-red"></div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="inline-block px-4 py-2 bg-templar-red text-white text-sm font-semibold mb-6">
            AKTUALNOŚCI
          </div>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-white mb-6">
            NAJNOWSZE WIADOMOŚCI
          </h1>
          <p className="text-xl text-white/90">
            Bądź na bieżąco z wydarzeniami i działaniami Zakonu Templariuszy
          </p>
        </div>
      </section>

      {/* Articles List */}
      <section className="py-20 bg-white">
        <div className="max-w-[95rem] mx-auto px-2 sm:px-4 lg:px-6">
          <div className="space-y-8">
            {articles.map((article) => {
              const IconComponent = article.icon === 'Cross' ? Cross : article.icon === 'Heart' ? Heart : Shield;
              return (
                <article
                  key={article.id}
                  className="flex flex-col md:flex-row gap-6 pb-8 border-b border-gray-200 last:border-b-0"
                >
                  <div className="md:w-1/3">
                    <div className={`w-full h-64 bg-gradient-to-br ${article.gradient} rounded-lg flex items-center justify-center`}>
                      <IconComponent className={`w-16 h-16 ${article.icon === 'Cross' && article.gradient.includes('blue') ? 'text-white' : 'text-templar-red'} opacity-50`} />
                    </div>
                  </div>
                <div className="md:w-2/3">
                  <div className="inline-block px-3 py-1 bg-templar-red text-white text-xs font-semibold mb-3">
                    {article.category}
                  </div>
                  <div className="text-sm text-gray-500 mb-2">{article.date}</div>
                  <h3 className="font-heading text-2xl md:text-3xl text-templar-black mb-3">
                    {article.title}
                  </h3>
                  <p className="text-gray-700 mb-4">{article.excerpt}</p>
                  <Link
                    to={`/aktualnosci/${article.id}`}
                    className="text-templar-red hover:text-templar-red-light font-semibold flex items-center space-x-2 group"
                  >
                    <span>Czytaj więcej</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Aktualnosci;

