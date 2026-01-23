import { Link } from 'react-router-dom';

const WielkiPrzeoratUmocowanie = () => {
  return (
    <div className="pt-20">
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-templar-burgundy to-templar-red"></div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            UMOCOWANIE
          </h1>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* STATUT */}
            <div className="mb-16 text-center max-w-4xl mx-auto">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-templar-black mb-3">STATUT</h2>
              <h3 className="font-heading text-3xl md:text-4xl font-bold text-templar-black mb-3">WIELKIEGO PRZEORATU POLSKI</h3>
              <h4 className="font-heading text-2xl md:text-3xl font-bold text-templar-black mb-4">ZAKONU RYCERZY CHRYSTUSA I ŚWIĄTYNI JEROZOLIMSKIEJ</h4>
              <p className="text-lg text-gray-700 font-semibold mb-2">(ORDO MILITIAE CHRISTI TEMPLI HIEROSOLYMITANI)</p>
              <p className="text-lg text-gray-700 mb-6">Cała treść w języku angielskim oraz polskie tłumaczenie w zakładce</p>
              
              {/* Odnośnik do statutu */}
              <Link 
                to="/wielki-przeorat/statut-generalny"
                className="inline-block mt-4 p-6 bg-gray-50 border-2 border-templar-red/30 rounded-lg hover:border-templar-red hover:bg-gray-100 transition-all w-full max-w-md"
              >
                <p className="text-templar-red font-semibold text-lg mb-2">„STATUT"</p>
                <p className="text-gray-600 text-sm">Kliknij, aby zobaczyć pełną treść statutu →</p>
              </Link>
            </div>

            {/* BŁOGOSŁAWIEŃSTWO ORATORIUM */}
            <div className="mb-16">
              {/* Część z obrazkiem - lewa strona tekst, prawa strona obrazek */}
              <div className="flex flex-col lg:flex-row gap-8 items-start mb-8">
                <div className="flex-1 space-y-4">
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-templar-black mb-4">BŁOGOSŁAWIEŃSTWO ORATORIUM ZAŚNIĘCIA NAJŚWIĘTRAEJ BOGURODZICY ORDO MILITIAE CHRISTI TEMPLI HIEROSOLYITANI W</h2>
                  <p className="text-gray-700 font-semibold">oratorium</p>
                  <p className="text-gray-700 font-semibold">Melchicko-Grecko-Katolicki</p>
                  <p className="text-gray-700 font-semibold">PATRIARCHAT</p>
                  <p className="text-gray-700">Antiochii i całego Wschodu</p>
                  <p className="text-gray-700 mt-4">L.Dz. nr 145/2020                                                                                              Raboueh, 31 października 2020</p>
                </div>
                
                <div className="flex-1 lg:max-w-md self-start">
                  <img src="/temp1.jpg" alt="Błogosławieństwo Oratorium" className="w-full h-auto rounded-lg shadow-lg" />
                </div>
              </div>

              {/* Reszta tekstu na pełnej szerokości */}
              <div className="space-y-4">
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-templar-black mb-3">BŁOGOSŁAWIEŃSTWO ORATORIUM</h3>
                <h4 className="font-heading text-xl md:text-2xl font-bold text-templar-black mb-4">ZAŚNIĘCIA NAJŚWIĘTSZEJ BOGURODZICY W KATOWICACH</h4>
                
                  <p className="text-lg text-gray-700 leading-relaxed">W Imię Ojca, i Syna, i Ducha Świętego. Amen.</p>
                  
                  <p className="text-lg text-gray-700 leading-relaxed">Święty Pawle, Wielki Nawrócony i Apostole Narodów, który zobaczyłeś Zmartwychwstałego Pana</p>
                  
                  <p className="text-lg text-gray-700 leading-relaxed">i stałeś się jak On sam. Pomimo swojej posiadanej wielkiej wiedzy, zaufałeś w zupełności wiedzy otrzymanej od Ducha i nauczałeś z obfitości swojego serca.</p>
                
                <p className="text-lg text-gray-700 leading-relaxed">Oświeć współczesnych Rycerzy i Damy Ordo Militiae Christi Templi Hierosolymitani,</p>
                  
                <p className="text-lg text-gray-700 leading-relaxed">którzy głoszą Chrystusa innym.</p>
                  
                <p className="text-lg text-gray-700 leading-relaxed">Niech zdają sobie sprawę, że ich czyny mówią głośniej, niż jakiekolwiek słowa, których mogą użyć.</p>
                  
                <p className="text-lg text-gray-700 leading-relaxed">Naucz ich zdawać sobie sprawę z tego, że mają talent do niesienia Boga bliźniemu</p>
                  
                <p className="text-lg text-gray-700 leading-relaxed">i polegania przede wszystkim na podszeptach Ducha.</p>
                  
                <p className="text-lg text-gray-700 leading-relaxed">Niech to Błogosławieństwo spłynie na Oratorium Zaśnięcia Najświętszej Bogurodzicy</p>
                  
                <p className="text-lg text-gray-700 leading-relaxed">Ordo Militiae Christi Templi Hierosolymitani w Katowicach i na wszystkich Sodalistów Zakonu.</p>
                  
                <p className="text-lg text-gray-700 leading-relaxed">Niechaj gromadzą Relikwie Świętych i Błogosławionych Kościoła</p>
                  
                <p className="text-lg text-gray-700 leading-relaxed">i niech podążają z tymi Relikwiami w procesjach, aby świadczyć o prawdzie Świętych Obcowania.</p>
                  
                <p className="text-lg text-gray-700 leading-relaxed">Przez Chrystusa, Pana naszego. Amen.</p>
                  
                <p className="text-lg text-gray-700 leading-relaxed">Z moim Apostolskim Błogosławieństwem</p>
                
                <p className="text-gray-700 font-semibold mt-4">+ YOUSSEF</p>
                
                <p className="text-gray-700">(Pieczęć Patriarchatu)</p>
                
                <p className="text-gray-700">(podpis odręczny)</p>
                
                <p className="text-gray-700 mt-4">Patriarcha Antiochii i całego Wschodu</p>
                
                <p className="text-gray-700">Kościoła Melchicko-Grcko-Katolickiego</p>
              </div>
            </div>

            {/* ZAŚWIADCZENIE */}
            <div className="mb-16">
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="flex-1 space-y-4">
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-templar-black mb-4">ZAŚWIADCZENIE ZGODNE Z INSTRUKCJĄ WSPÓLNĄ EPISKOPATU POLSKI I RZĄDU RZECZYPOSPOLITEJ POLSKIEJ</h2>
                  <p className="text-gray-700 font-semibold">Melchicko-Grecko-Katolicki</p>
                  <p className="text-gray-700 font-semibold">PATRIARCHAT</p>
                  <p className="text-gray-700">Antiochii i całego Wschodu</p>
                  <p className="text-gray-700 mt-4">Raboueh, 4 września 2020</p>
                  
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-templar-black mt-6 mb-4">WYJAŚNIENIE PRAWNO-KANONICZNE</h3>
                  
                  <p className="text-lg text-gray-700 leading-relaxed">Wielki Przeorat Polski Ordo Militiae Christi Templi Hierosolymitani (OMCTH) został powołany zgodnie z Kanonem 573 CCEO (Kodeksu Kanonów Kościołów Wschodnich) i 12 grudnia Roku Pańskiego 2018 został mu nadany Autonomiczny Statut Generalny przez Wielce Błogosławionego Patriarchę Józefa Absi, Melchicko-Grecko-Katolickiego Patriarchę Antiochii i całego Wschodu .</p>
                  
                  <p className="text-lg text-gray-700 leading-relaxed">Wielki Przeorat Polski OMCTH jest kościelną osoba prawną i jest upoważniony do bycia za takową uznanym przez Rząd RP zgodnie z art. 4 Konkordatu pomiędzy Stolicą Apostolską i Rzecząpospolitą Polską.</p>
                  
                  <p className="text-lg text-gray-700 leading-relaxed">Proszę o okazanie każdej możliwej pomocy w pozytywnym załatwieniu formalności przed polskimi władzami.</p>
                  
                  <p className="text-gray-700 font-semibold mt-4">Kwestionariusz zawierający podstawowe dane identyfikacyjne instytucji kościelnej</p>
                  
                  <p className="text-gray-700">Nazwa instytucji kościelnej (pełna nazwa):</p>
                  
                  <p className="text-gray-700">Wielki Przeorat Polski Zakonu Rycerskiego Świątyni Jerozolimskiej</p>
                  
                  <p className="text-gray-700">Siedziba:</p>
                  
                  <p className="text-gray-700">Templariuszy 1, 40-608 Katowice</p>
                  
                  <p className="text-gray-700">Charakter instytucji kościelnej personalny lub terytorialny:</p>
                  
                  <p className="text-gray-700">Personalny</p>
                  
                  <p className="text-gray-700">Reprezentacja instytucji kościelnej:</p>
                  
                  <p className="text-gray-700">Wielki Przeor Polski Krzysztof Paweł Kurzeja (PESEL 73122704079)</p>
                  
                  <p className="text-gray-700 mt-4">(Pieczęć Okrągła Patriarchatu)</p>
                  
                  <p className="text-gray-700">Ojciec dr Rami Wakim</p>
                  
                  <p className="text-gray-700">/ podpis/</p>
                  
                  <p className="text-gray-700">Szef Kancelarii</p>
                  
                  <p className="text-gray-700">Patriarchatu Melchicko-Grecko-Katolickiego</p>
                </div>
                
                <div className="flex-1 lg:max-w-md self-start">
                  <img src="/temp2.jpg" alt="Zaświadczenie" className="w-full h-auto rounded-lg shadow-lg" />
                </div>
              </div>
            </div>

            {/* LIST UWIERZYTELNIAJĄCY */}
            <div className="mb-16">
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="flex-1 space-y-4">
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-templar-black mb-4">LIST UWIERZYTELNIAJĄCY PATRIARCHY ANTIOCHII I CAŁEGO WSCHODU, ALEKSANDRII I JEROZOLIMY</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">My, Grzegorz III, Patriarcha Antiochii i całego Wschodu, Aleksandrii i Jerozolimy, oświadczamy, że Wielki Przeorat Polski Ordo Militiae Christi Templi Hierosolymitani (OMCTH) jest znany i zatwierdzony przez Patriarchat i jest członkiem Międzynarodowej Federacji Ordo Militiae Christi Templi Hierosolymitani z siedzibą w Kolonii (Niemcy), która jest ochraniana i zatwierdzona przez nas.</p>
                  
                  <p className="text-lg text-gray-700 leading-relaxed">Order pomaga dziełom dobroczynnym Patriarchatu w krajach Bliskiego Wschodu.</p>
                  
                  <p className="text-lg text-gray-700 leading-relaxed">Polecamy gorąco wspieranie tego Przeoratu w Polsce, we wszystkich jego działaniach w Polsce i poza Polską.</p>
                  
                  <p className="text-gray-700">(podpis)</p>
                  
                  <p className="text-gray-700 font-semibold mt-4">+ Gregorios III</p>
                  
                  <p className="text-gray-700">Patriarcha Antiochii i całego Wschodu</p>
                  
                  <p className="text-gray-700">Aleksandrii i Jerozolimy</p>
                  
                  <p className="text-gray-700">(pieczęć okrągła, w otoku Patriarcat Grec-Melkite-Catholique)</p>
                </div>
                
                <div className="flex-1 lg:max-w-md self-start">
                  <img src="/temp3.jpg" alt="List uwiarytelniający" className="w-full h-auto rounded-lg shadow-lg" />
                </div>
              </div>
            </div>

            {/* OŚWIADCZENIE WIKARIUSZA */}
            <div className="mb-16">
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="flex-1 space-y-4">
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-templar-black mb-4">OŚWIADCZENIE WIKARIUSZA PATRIARCHALNEGO JEROZOLIMY</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">Chrześcijańska i rycerska Wspólnota ORDO MILITIAE CHRISTI TEMPLI HIEROSOLYMITANI (OMCTH) z siedziba Głównej Komendantury w Kolonii, a Prałatury Generalnej w Barcelonie pozostaje od 22 września 1990 roku pod Duchowym Protektoratem Grecko-Melchicko-Katolickiego Patriarchatu. Jej duchową siedzibą jest Jerozolima.</p>
                  
                  <p className="text-lg text-gray-700 leading-relaxed">Sodaliści są aktywnymi chrześcijanami, zaangażowanymi w modlitwę oraz uczynki miłości i miłosierdzia. Z zapałem angażują się w pomoc socjalną, charytatywną i medyczną dla Ziemi Świętej.</p>
                  
                  <p className="text-lg text-gray-700 leading-relaxed">Tylko osoby z pozytywną opinią swojego proboszcza mogą starać się o przystąpienie do OMCTH.</p>
                  
                  <p className="text-lg text-gray-700 leading-relaxed">Niemiecki Przeorat OMCTH z siedzibą w Kolonii jest powszechną organizacją dobroczynną, zarejestrowaną w Niemczech. Jej międzynarodowe projekty pomocowe w Ziemi Świętej realizowane są również przez jej Przeoraty w Europie.</p>
                  
                  <p className="text-lg text-gray-700 leading-relaxed">Sodaliści żyją według wspólnej Reguły, Karty i Statutów. Członkowie tajnych stowarzyszeń, lóż i sekt nie mogą wstąpić w szeregi Wspólnoty.</p>
                  
                  <p className="text-gray-700">Jerozolima, 4 lutego 2010.</p>
                  
                  <p className="text-gray-700">(podpis)</p>
                  
                  <p className="text-gray-700">Archimandryta o. Józef Saghbini</p>
                  
                  <p className="text-gray-700">Generalny Wikariusz Patriarchalny</p>
                  
                  <p className="text-gray-700">Jerozolima</p>
                </div>
                
                <div className="flex-1 lg:max-w-md self-start">
                  <img src="/temp4.jpg" alt="Oświadczenie Wikariusza" className="w-full h-auto rounded-lg shadow-lg" />
                </div>
              </div>
            </div>

            {/* DEKRET O AFILIACJI */}
            <div className="mb-16">
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="flex-1 space-y-4">
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-templar-black mb-4">DEKRET O AFILIACJI WLK.PRZEORATU POLSKI DO OMCTH</h2>
                  <p className="text-gray-700">Kolonia, 1 października 2013</p>
                  
                  <p className="text-gray-700">Dekret Nr 21/013 Dot.: Przystąpienie Wielkiego Przeoratu Polski do Międzynarodowej Unii OMCTH</p>
                  
                  <p className="text-gray-700">Drogi Bracie Wielki Przeorze Krzysztofie Kurzeja,</p>
                  
                  <p className="text-gray-700">Drodzy Bracia i Rycerze w Polsce,</p>
                  
                  <p className="text-lg text-gray-700 leading-relaxed">Niniejszym potwierdzam Wasze przystąpienie do Patriarchalnego Zakonu/Orderu Rycerzy Chrystusa i Świątyni Jerozolimskiej OMCTH ze wszystkimi prawami i obowiązkami od dnia 1 października Anno Domini 2013. Wasza oficjalna nazwa to: ORDO MILITIAE CHRISTI TEMPLI HIEROSOLYMITANI – Wielki Przeorat Templariuszy w Polsce.</p>
                  
                  <p className="text-lg text-gray-700 leading-relaxed">Posiadacie opiekę naszego Protektora Duchowego, Wielce Błogosławionego Patriarchy Gregoriosa III Lahama, Patriarchy Antiochii i całego Wschodu, Aleksandrii i Jerozolimy w pełnej jedności z Papieżem w Rzymie.</p>
                  
                  <p className="text-lg text-gray-700 leading-relaxed">Naszym nowym Protektorem Królewskim jest J.C.W. Książę Asfa-Wossen Asserate.</p>
                  
                  <p className="text-lg text-gray-700 leading-relaxed">Naszą duchową siedzibą jest Jerozolima (Brama Jaffy). Sekretariat koordynujący wszystkie Przeoraty mieści się w Kolonii (Koeln), Sauerbruchstrasse 21, D-50767 Koeln (Niemcy).</p>
                  
                  <p className="text-lg text-gray-700 leading-relaxed">Nasza nazwa OMCTH jest chroniona międzynarodowym prawem patentowym.</p>
                  
                  <p className="text-lg text-gray-700 leading-relaxed">Serdecznie witam w naszej Unii Rycerzy Chrystusa i Świątyni!</p>
                  
                  <p className="text-gray-700">Non nobis Domine, non nobis…</p>
                  
                  <p className="text-gray-700">Bratersko (podpis)</p>
                  
                  <p className="text-gray-700 font-semibold mt-4">+ Br. Werner Rind, EMC</p>
                  
                  <p className="text-gray-700">Wielki Komandor Generalny OMCTH</p>
                </div>
                
                <div className="flex-1 lg:max-w-md self-start">
                  <img src="/temp5.jpg" alt="Dekret o afiliacji" className="w-full h-auto rounded-lg shadow-lg" />
                </div>
              </div>
            </div>

            {/* PATRIARCHA MAXIMOS V */}
            <div className="mb-16">
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="flex-1 space-y-4">
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-templar-black mb-4">PATRIARCHA MAXIMOS V PROTEKTOREM DUCHOWYM</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">Skan dokumentu, potwierdzającego objęcie „dziś i w przyszłości" Duchowego Protektoratu nad OMCTH, wtedy jeszcze pod nazwą OSMTH.</p>
                  
                  <p className="text-lg text-gray-700 leading-relaxed">Pod tekstem drukowanym widać własnoręczny dopisek Wielce Błogosławionego Patriarchy Maksyma V:</p>
                  
                  <p className="text-gray-700 font-semibold">„Approved</p>
                  
                  <p className="text-gray-700 font-semibold">+ Maximos V</p>
                  
                  <p className="text-gray-700 font-semibold">Patriarch"</p>
                </div>
                
                <div className="flex-1 lg:max-w-md self-start">
                  <img src="/temp6.jpg" alt="Patriarcha Maximos V" className="w-full h-auto rounded-lg shadow-lg" />
                </div>
              </div>
            </div>

            {/* BŁOGOSŁAWIEŃSTWO PRYMASA POLSKI - Glemp */}
            <div className="mb-16">
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="flex-1 space-y-4">
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-templar-black mb-4">BŁOGOSŁAWIEŃSTWO PRYMASA POLSKI</h2>
                  <p className="text-gray-700">Jego Eminencja Jóżef kardynał Glemp,</p>
                  
                  <p className="text-gray-700">Prymas Polski,</p>
                  
                  <p className="text-gray-700">Kustosz Relikwii Świętego Wojciecha</p>
                  
                  <p className="text-gray-700">udzielił templariuszom z serca płynącego błogosławieństwa.</p>
                </div>
                
                <div className="flex-1 lg:max-w-md self-start">
                  <img src="/temp7.jpg" alt="Błogosławieństwo Prymasa Glemp" className="w-full h-auto rounded-lg shadow-lg" />
                </div>
              </div>
            </div>

            {/* BŁOGOSŁAWIEŃSTWO PRYMASA POLSKI - Polak */}
            <div className="mb-16">
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="flex-1 space-y-4">
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-templar-black mb-4">BŁOGOSŁAWIEŃSTWO PRYMASA POLSKI</h2>
                  <p className="text-gray-700">Jego Eminencja</p>
                  
                  <p className="text-gray-700">Najdostojniejszy Ksiądz Arcybiskup Wojciech Polak,</p>
                  
                  <p className="text-gray-700">Metropolita Gnieźnieński,</p>
                  
                  <p className="text-gray-700">Prymas Polski.</p>
                </div>
                
                <div className="flex-1 lg:max-w-md self-start">
                  <img src="/temp8.jpg" alt="Błogosławieństwo Prymasa Polak" className="w-full h-auto rounded-lg shadow-lg" />
                </div>
              </div>
            </div>

            {/* BŁOGOSŁAWIEŃSTWO PRZEWODNICZĄCEGO EPISKOPATU */}
            <div className="mb-16">
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="flex-1 space-y-4">
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-templar-black mb-4">BŁOGOSŁAWIEŃSTWO PRZEWODNICZĄCEGO EPISKOPATU POLSKI</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">Damom i Kawalerom Zakonu Rycerzy Chrystusa i Świątyni Jerozolimskiej życzę,</p>
                  
                  <p className="text-lg text-gray-700 leading-relaxed">by nawiedzanie wspólnot parafialnych z relikwiami</p>
                  
                  <p className="text-lg text-gray-700 leading-relaxed">bł. Jana Pawła II i bł. Jerzego Popiełuszki</p>
                  
                  <p className="text-lg text-gray-700 leading-relaxed">owocowało głęboką więzią z Chrystusem i otwierało serce na każdego człowieka.</p>
                  
                  <p className="text-lg text-gray-700 leading-relaxed">Wzywając obfitości łasko Bożych i polecając dobremu Bogu w modlitwie,</p>
                  
                  <p className="text-lg text-gray-700 leading-relaxed">udzielam z serca pasterskiego błogosławieństwa</p>
                  
                  <p className="text-gray-700 font-semibold mt-4">+ Stanisław Gądecki</p>
                  
                  <p className="text-gray-700">Arcybiskup Metropolita Poznański</p>
                </div>
                
                <div className="flex-1 lg:max-w-md self-start">
                  <img src="/temp9.jpg" alt="Błogosławieństwo Przewodniczącego Episkopatu" className="w-full h-auto rounded-lg shadow-lg" />
                </div>
              </div>
            </div>

            {/* BŁOGOSŁAWIEŃSTWO KARDYNAŁA NYCZA */}
            <div className="mb-16">
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="flex-1 space-y-4">
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-templar-black mb-4">BŁOGOSŁAWIEŃSTWO J.Em. Kardynała Kazimierza Nycza</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">Błogosławieństwo Jego Eminencji Kazimierza kardynała Nycza, Arcybiskupa Metropolity Warszawskiego dla Wielkiego Przeoratu Polski Templariuszy (OMCTH).</p>
                  
                  <p className="text-lg text-gray-700 leading-relaxed">Jego Eminencja Kazimierz kardynał Nycz jest również Ordynariuszem dla wiernych Obrządków Wschodnich nie posiadających własnej administracji kościelnej w Polsce, jednym z tych obrządków jest właśnie Obrządek Melchicko-Katolicki, którego głową jest nasz Protektor Duchowy W.B. Patriarcha Grzegorz III.</p>
                </div>
                
                <div className="flex-1 lg:max-w-md self-start">
                  <img src="/temp10.jpg" alt="Błogosławieństwo Kardynała Nycza" className="w-full h-auto rounded-lg shadow-lg" />
                </div>
              </div>
            </div>

            {/* BŁOGOSŁAWIEŃSTWO PATRIARCHY JEROZOLIMY */}
            <div className="mb-16">
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="flex-1 space-y-4">
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-templar-black mb-4">BŁOGOSŁAWIEŃSTWO PATRIARCHY JEROZOLIMY</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">13 grudnia 2012 roku, kiedy Templariusze szczególnie uroczyście wspominają bł. Jerzego Popiełuszkę, prezbitera i męczennika, którego obrali za swojego Patrona jako współczesnego Rycerza Chrystusowego, Wielce Błogosławiony Arcybiskup Fouad Twal, Patriarcha Jerozolimski, podpisał specjalne błogosławieństwo dla Rycerzy Chrystusa i Świątyni Jerozolimskiej.</p>
                </div>
                
                <div className="flex-1 lg:max-w-md self-start">
                  <img src="/temp11.jpg" alt="Błogosławieństwo Patriarchy Jerozolimy" className="w-full h-auto rounded-lg shadow-lg" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default WielkiPrzeoratUmocowanie;
