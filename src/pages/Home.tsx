import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Cross, Shield } from '../components/icons';

const Home = () => {
  return (
    <div className="pt-20">
      <Hero />

      {/* Co Robimy Section */}
      <section id="co-robimy" className="py-20 bg-gray-50">
        <div className="max-w-[95rem] mx-auto px-2 sm:px-4 lg:px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-templar-red text-white text-sm font-semibold mb-4">
              NASZA MISJA
            </div>
            <h2 className="font-heading text-5xl md:text-6xl text-templar-black">
              Co Robimy
            </h2>
            <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto">
              Nasza działalność opiera się na trzech głównych filarach, które definiują 
              naszą misję i wartości jako współczesnych templariuszy.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-templar-red/10 flex items-center justify-center rounded-lg mb-6">
                <Heart className="w-8 h-8 text-templar-red" />
              </div>
              <h3 className="font-heading text-2xl text-templar-black mb-4">
                Pomoc Charytatywna
              </h3>
              <p className="text-gray-700 mb-6">
                Wspieramy osoby potrzebujące, organizujemy zbiórki i akcje pomocy dla 
                najbardziej potrzebujących. Nasze działania obejmują pomoc materialną, 
                wsparcie duchowe oraz organizację wydarzeń charytatywnych.
              </p>
              <Link
                to="/projekty"
                className="text-templar-red hover:text-templar-red-light font-semibold flex items-center space-x-2 group"
              >
                <span>Dowiedz się więcej</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-templar-red/10 flex items-center justify-center rounded-lg mb-6">
                <Cross className="w-8 h-8 text-templar-red" />
              </div>
              <h3 className="font-heading text-2xl text-templar-black mb-4">
                Krzewienie Wiary
              </h3>
              <p className="text-gray-700 mb-6">
                Organizujemy pielgrzymki, rekolekcje i spotkania formacyjne dla członków 
                zakonu i sympatyków. Dbamy o rozwój duchowy i pogłębianie wiary chrześcijańskiej 
                w duchu tradycji templariuszy.
              </p>
              <Link
                to="/modlitwy"
                className="text-templar-red hover:text-templar-red-light font-semibold flex items-center space-x-2 group"
              >
                <span>Dowiedz się więcej</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-templar-red/10 flex items-center justify-center rounded-lg mb-6">
                <Shield className="w-8 h-8 text-templar-red" />
              </div>
              <h3 className="font-heading text-2xl text-templar-black mb-4">
                Ochrona Dziedzictwa
              </h3>
              <p className="text-gray-700 mb-6">
                Dbamy o zachowanie historycznego dziedzictwa, organizujemy konserwację 
                zabytków związanych z templariuszami oraz wspieramy badania historyczne. 
                Pielęgnujemy tradycję i symbolikę zakonu.
              </p>
              <Link
                to="/zakon/historia"
                className="text-templar-red hover:text-templar-red-light font-semibold flex items-center space-x-2 group"
              >
                <span>Dowiedz się więcej</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Kim Jesteśmy Section */}
      <section id="kim-jestesmy" className="py-20 bg-white">
        <div className="max-w-[95rem] mx-auto px-2 sm:px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="font-heading text-5xl md:text-6xl text-templar-black mb-6">
                Strażnicy Tradycji Templariuszy
              </h2>
              <div className="space-y-4 text-lg text-gray-700 font-body">
                <p>
                  Ordo Equestris Christi Templique Hierosolymitani to organizacja kontynuująca 
                  wielowiekową tradycję rycerską, której korzenie sięgają czasów średniowiecza. 
                  Jesteśmy strażnikami dziedzictwa i wartości, które przez wieki kształtowały 
                  tożsamość zakonu templariuszy.
                </p>
                <p>
                  Nasza misja opiera się na trzech fundamentalnych filarach: służbie Bogu, 
                  pomocy bliźnim oraz ochronie tradycji chrześcijańskich. Wspieramy potrzebujących, 
                  organizujemy działania charytatywne i pielęgnujemy wartości rycerskie, które 
                  od wieków są fundamentem naszej wspólnoty.
                </p>
                <p>
                  Jako współcześni templariusze, kontynuujemy dzieło naszych poprzedników, 
                  adaptując starożytne wartości do wyzwań współczesnego świata, zawsze w służbie 
                  wiary, honoru i miłosierdzia.
                </p>
              </div>

              {/* Statistics */}
              <div className="grid grid-cols-3 gap-6 mt-12">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-heading text-templar-red mb-2">900+</div>
                  <div className="text-sm text-gray-600">Lat Tradycji</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-heading text-templar-red mb-2">50+</div>
                  <div className="text-sm text-gray-600">Krajów</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-heading text-templar-red mb-2">1000+</div>
                  <div className="text-sm text-gray-600">Braci i Sióstr</div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-lg overflow-hidden shadow-2xl flex items-center justify-center">
                <div className="text-center p-8">
                  <Shield className="w-24 h-24 text-templar-red mx-auto mb-4 opacity-50" />
                  <div className="w-full h-32 bg-gradient-to-b from-templar-red/20 to-transparent"></div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-templar-red flex items-center justify-center shadow-xl">
                <Shield className="w-12 h-12 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aktualności Section */}
      <section id="aktualnosci" className="py-20 bg-white">
        <div className="max-w-[95rem] mx-auto px-2 sm:px-4 lg:px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-templar-red text-white text-sm font-semibold mb-4">
              AKTUALNOŚCI
            </div>
            <h2 className="font-heading text-5xl md:text-6xl text-templar-black">
              Najnowsze Wiadomości
            </h2>
          </div>

          <div className="space-y-8">
            {/* Article 1 */}
            <article className="flex flex-col md:flex-row gap-6 pb-8 border-b border-gray-200">
              <div className="md:w-1/3">
                <div className="w-full h-64 bg-gradient-to-br from-gray-800 to-black rounded-lg flex items-center justify-center">
                  <Cross className="w-16 h-16 text-templar-red opacity-50" />
                </div>
              </div>
              <div className="md:w-2/3">
                <div className="inline-block px-3 py-1 bg-templar-red text-white text-xs font-semibold mb-3">
                  Uroczystości
                </div>
                <div className="text-sm text-gray-500 mb-2">05 Grudnia 2024</div>
                <h3 className="font-heading text-2xl md:text-3xl text-templar-black mb-3 leading-tight">
                  Uroczyste Pasowanie<br />Nowych Rycerzy
                </h3>
                <p className="text-gray-700 mb-4">
                  W historycznej katedrze w Krakowie odbyła się uroczysta ceremonia pasowania 
                  nowych rycerzy Zakonu. Pięciu kandydatów złożyło przysięgę wierności zasadom 
                  rycerskim i wartościom chrześcijańskim w obecności Wielkiego Mistrza i członków kapituły.
                </p>
                <Link
                  to="/aktualnosci/1"
                  className="text-templar-red hover:text-templar-red-light font-semibold flex items-center space-x-2 group"
                >
                  <span>Czytaj więcej</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>

            {/* Article 2 */}
            <article className="flex flex-col md:flex-row gap-6 pb-8 border-b border-gray-200">
              <div className="md:w-1/3">
                <div className="w-full h-64 bg-gradient-to-br from-templar-red/20 to-gray-800 rounded-lg flex items-center justify-center">
                  <Heart className="w-16 h-16 text-templar-red opacity-50" />
                </div>
              </div>
              <div className="md:w-2/3">
                <div className="inline-block px-3 py-1 bg-templar-red text-white text-xs font-semibold mb-3">
                  Pomoc
                </div>
                <div className="text-sm text-gray-500 mb-2">02 Grudnia 2024</div>
                <h3 className="font-heading text-2xl md:text-3xl text-templar-black mb-3 leading-tight">
                  Świąteczna Zbiórka<br />Dla Potrzebujących
                </h3>
                <p className="text-gray-700 mb-4">
                  Zakończono tegoroczną akcję charytatywną, która przyniosła pomoc dla ponad 
                  700 rodzin w całej Polsce. Zebrano żywność i dary rzeczowe dla najbardziej 
                  potrzebujących, w tym również dla dzieci z rodzin w trudnej sytuacji materialnej.
                </p>
                <Link
                  to="/aktualnosci/2"
                  className="text-templar-red hover:text-templar-red-light font-semibold flex items-center space-x-2 group"
                >
                  <span>Czytaj więcej</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>

            {/* Article 3 */}
            <article className="flex flex-col md:flex-row gap-6 pb-8 border-b border-gray-200">
              <div className="md:w-1/3">
                <div className="w-full h-64 bg-gradient-to-br from-blue-900 to-gray-800 rounded-lg flex items-center justify-center">
                  <Cross className="w-16 h-16 text-white opacity-50" />
                </div>
              </div>
              <div className="md:w-2/3">
                <div className="inline-block px-3 py-1 bg-templar-red text-white text-xs font-semibold mb-3">
                  Pielgrzymki
                </div>
                <div className="text-sm text-gray-500 mb-2">01 Grudnia 2024</div>
                <h3 className="font-heading text-2xl md:text-3xl text-templar-black mb-3 leading-tight">
                  Pielgrzymka<br />Do Ziemi Świętej
                </h3>
                <p className="text-gray-700 mb-4">
                  Członkowie Wielkiego Przeoratu Polskiego odbyli duchową podróż do Jerozolimy, 
                  odwiedzając miejsca związane z historią templariuszy. Pielgrzymka była okazją 
                  do pogłębienia więzi duchowych i modlitwy w miejscach świętych.
                </p>
                <Link
                  to="/aktualnosci/3"
                  className="text-templar-red hover:text-templar-red-light font-semibold flex items-center space-x-2 group"
                >
                  <span>Czytaj więcej</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>

            {/* Article 4 */}
            <article className="flex flex-col md:flex-row gap-6 pb-8">
              <div className="md:w-1/3">
                <div className="w-full h-64 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg flex items-center justify-center">
                  <Shield className="w-16 h-16 text-templar-red opacity-50" />
                </div>
              </div>
              <div className="md:w-2/3">
                <div className="inline-block px-3 py-1 bg-templar-red text-white text-xs font-semibold mb-3">
                  Konferencje
                </div>
                <div className="text-sm text-gray-500 mb-2">30 Listopada 2024</div>
                <h3 className="font-heading text-2xl md:text-3xl text-templar-black mb-3 leading-tight">
                  Konferencja Naukowa<br />O Historii Templariuszy
                </h3>
                <p className="text-gray-700 mb-4">
                  Zorganizowaliśmy międzynarodową konferencję poświęconą historii zakonu 
                  templariuszy w Polsce i Europie. Udział wzięli wybitni historycy i badacze, 
                  prezentując najnowsze odkrycia dotyczące działalności zakonu.
                </p>
                <Link
                  to="/aktualnosci/4"
                  className="text-templar-red hover:text-templar-red-light font-semibold flex items-center space-x-2 group"
                >
                  <span>Czytaj więcej</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/aktualnosci"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gray-800 hover:bg-gray-900 text-white font-semibold rounded transition-colors"
            >
              <span>Zobacz Wszystkie Aktualności</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        {/* First layer - Red gradient at the bottom */}
        <div className="absolute inset-0 bg-gradient-to-r from-templar-black to-templar-red"></div>
        
        {/* Second layer - Image with 10% opacity */}
        <div className="absolute inset-0 opacity-10">
          <img
            src="/downcta.png"
            alt="Templar background"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8 flex justify-center">
            <div className="w-24 h-24 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border-4 border-white/30">
              <Shield className="w-12 h-12 text-white" />
            </div>
          </div>
          
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Zostań Częścią Tradycji
          </h2>
          
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Dołącz do grona rycerzy, którzy kontynuują dziedzictwo templariuszy. 
            Służ wartościom chrześcijańskim i pomagaj potrzebującym.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/kontakt"
              className="px-8 py-4 bg-white hover:bg-gray-100 text-templar-red font-semibold text-lg rounded transition-colors"
            >
              Skontaktuj się z Nami
            </Link>
            <Link
              to="/wielki-przeorat"
              className="px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold text-lg rounded transition-colors"
            >
              Dowiedz się Więcej
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

