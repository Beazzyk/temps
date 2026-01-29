const LAUREACI_PL = [
  'Klaudiusz Balcerzak, Radny Sejmiku Województwa Lubuskiego (KH)',
  'Paweł Bezak, Kustosz Muzeum Niepodległości w Warszawie (KH)',
  'Jerzy Będkowski, Strażnik Honoru i Tradycji Katowickiego Bractwa Kurkowego (KNZ)',
  'Wiel. Ks. Janusz Bialucha MIC, Wiceprzełożony Domu Zakonnego Zgromadzenia Księży Marianów w Licheniu Starym (KH)',
  'Jacek Bieczek, Konsul Honorowy Republiki Chile w Katowicach (KH, KB, KM, KPP)',
  'Jarosław Bierecki, Radny Sejmiku Województwa Pomorskiego (KH)',
  'Jan Biesek (KH)',
  'Kaw. Alexander Blümm KTJ (KH)',
  'Barbara Borys-Damięcka, Senator Rzeczypospolitej Polskiej (KH)',
  'kaw. Jürgen Konrad Boulanger KTJ (KH)',
  'Wiel. Ks. Marek Brożyna SAC (KPD)',
  'Przew. Ks. dr Ireneusz Stanisław Bruski, Kanonik Lidzbarskiej Kapituły Kolegiackiej, Sędzia Metropolitalnego Sądu Archidiecezji Warmińskiej (KB, KPP, KM, KPD, KNZ, BKZ, SKZ)',
  'sierż. szt. SW Mariusz Brzykcy (KH)',
  'Artur Bula, II Wiceprzewodniczący Rady Miasta Mysłowice (KM)',
  'Grzegorz Bula (KM)',
  'mjr Dariusz Chądziński, Szef Sekcji Wychowawczej 10 Brygady Logistycznej Wojska Polskiego w Opolu (KH)',
  'Jan Chorostkowski, Konsul Honorowy Republiki Bułgarii we Wrocławiu (KH, KB)',
  'Marian Cieśla (KH)',
  'Detektyw Jerrod Crockett, Pierwszy Wiceprezydent – Szef Bezpieczeństwa Międzynarodowego Zjednoczonej Organizacji Międzynarodowych Sił (UFIO) (KH)',
  'Krzysztof Czajkowski (KH)',
  'Kaw. Marek Władysław Czarnecki KTJ (KH, KB)',
  'Czciciele Świętego Andrzej Boboli przy Parafii Bazyliki Ścięcia Świętego Jana Chrzciciela w Chojnicach',
  'Kaw. Bartłomiej Jan Czech-Kosiński OESSH (KM)',
  'Kaw. Sebastian Czogała KTJ (KM)',
  'Dorota Czudowska, Senator Rzeczypospolitej Polskiej (KH)',
  'Maurycy Daliga (KM)',
  'Tadeusz Daszek (KH, KNZ, KPD)',
  'dr Tomasz Stanisław Dąbrowski (KH, KB)',
  'Kaw. Norbert Deska KTJ (KH)',
  'Maciej Dęboróg-Bylczyński (KM)',
  'Danuta Dobraczyńska (KH)',
  'Kaw. Zbigniew Dobraczyński KOTJ (KH, KPD)',
  'Dama Beata Drzazga OSIC (KH, KB)',
  'Jan Wiesław Duda, Poseł na Sejm Rzeczypospolitej Polskiej (KH)',
  'Milan Dušenka, Komandor Komandorii Słowackiej Odznaki Świętego Floriana (KPP)',
  'Emil Dyrcz, Prezydent Polonijnego Klubu Aktywności Sportowych – Strzelectwo Sportowe PAKA-s Wiedeń (KB)',
  'Kaw. Zbigniew Dziembowski KOTJ, Precentor Generalny Zakonu Rycerskiego Świątyni Jerozolimskiej (KH, KB, KNZ, KM, KPD, BKZ, SKZ, ZKZ)',
  'Leszek Dziub, Prezes Delegatury Regionalnej Izby Gospodarczej w Bytomiu (KH)',
  'Przew. Ks. Dariusz Ferdynus, Proboszcz Parafii Chrystusa Króla w Lubanowie (KH)',
  'Przew. Ks. Prałat Kanonik Andrzej Fijałkowski, Kapelan Jego Świątobliwości (KH)',
  'Kaw. Bartosz Firlej KTJ, Preceptor Dolnego Śląska Senior  (KH)',
  'Kaw. Rafał Firlej KTJ (KH)',
  'Artur Galant (KB)',
  'Anna Gawin (KH)',
  'Kaw. Edward Gąszczyk KTJ (KH)',
  'ppłk Grzegorz Gdula, Dowódca 34 Śląskiego Dywizjonu Rakietowego Obrony Powietrznej (KH)',
  'Krzysztof Giza (KH)',
  'Przemysław Gizowski (KH)',
  'Bogusław Głód (KH)',
  'nadkom. Artur Gniadek, Prezes Ochotniczej Straży Pożarnej w Gliniance (KH)',
  'Łukasz Goik, Dyrektor Opery Śląskiej (KH)',
  'prof. dr hab. Mateusz Antoni Goliński, Kierownik Zakładu Historii Polski i Powszechnej do XV w. Uniwersytetu Wrocławskiego, Członek Komitetu Nauk Historycznych Polskiej Akademii Nauk (KH)',
  'Kaw. Andrzej Cyprian Golis KOTJ, Kapitan Regimentu Świątyni Jerozolimskiej, Hetman Bractwa Kurkowego w Toszku (KH, KM, KPD, KPP, KNZ)',
  'dr Jan Golis (KH)',
  'Waldemar Adam Gołaś, Wiceprezes Zarządu Głównego Polskiego Czerwonego Krzyża (KH, KM, KNZ, KPP, KPD, BKZ)',
  'Jerzy Grochowski (KH)',
  'Kaw. Jacek Gromek OSIC, OSAB, Komandor Kapituły Odznaki Św. Floriana Mazovia (KH, KB)',
  'Robert Grotnik (KH)',
  'Andrzej Gruszka (KNZ)',
  'Ewa Grzegorzak-Łoposzko, Katowickie Bractwo Kurkowe (KH)',
  'dr Tomasz Grzeszkowiak (KH, KNZ, KPD, KPP, KM)',
  'Kaw. Marian Habram KGOTJ, Komandor Górnego Śląska (KH, KM)',
  'Kaw. Ryszard Habram KTJ (KH, KM)',
  'dr Tomasz Heryszek, Prezes Zarządu Węglokoks SA (KPP)',
  'Mateusz Horniak, Sołtys Zubrzycy Dolnej (KH)',
  'Tomasz Zdzisław Iwanowski (KM)',
  'Kaw. Paweł Jachym KOTJ (KH)',
  'Tomasz Jamróz-Piłsudski (KB)',
  'Artur Janaszek (KH)',
  'st. sierż. Damian Janaszek (KH, KM)',
  'Zbigniew Janczak (KB)',
  'Leszek Adam Jasińczyk-Michałowski (KH)',
  'Sebastian Jasiński (KPP)',
  'kmdr Henryk Leopold Kalinowski, Wiceprezes Zarządu Głównego Związku Kombatantów RP i Byłych Więźniów Politycznych (KH)',
  'Dariusz Kałamajski (KH, KB)',
  'Kaw. Krzysztof Grzegorz Kaszub KTJ, Legat na Dolnym Śląsku (KB)',
  'Szymon Katan (KH)',
  'dr n. med. Elias Taleb Khoury (KH)',
  'Kaw. Krystian Kiełbasa OSCP, Radny Sejmiku Województwa Śląskiego, Kanclerz Bractwa Kurkowego w Toszku (KH, KB, KPP, KM, BKZ)',
  'Małgorzata Kierzkowska (KH)',
  'Piotr Kitta, Konsul Honorowy Republiki Czarnogóry w Bydgoszczy (KB)',
  'mł. insp. Zbigniew Klimus (KH)',
  'Krzysztof Knas, Redaktor Naczelny Magazynu „Chorzów / Miasto Kultury" (KH)',
  'Kaw. Piotr Kociołek KOTJ, Herold Zakonu Rycerskiego Świątyni Jerozolimskiej (KH)',
  'Kaw. Stanisław Kocur KGCTJ, Wielki Marszałek Wielkiego Przeoratu Polski OMCTH (KH)',
  'Wojciech Komorek NTJ (KB)',
  'Tadeusz Kopeć, Senator Rzeczypospolitej Polskiej (KH, KB)',
  'Kaw. Krzysztof Korgul KOTJ, Legat w Anglii i Walii (KH, KB)',
  'ppor. Eryk Patryk Kowalczyk, Prezes Okręgu Warmińsko-Mazurskiego Związku Oficerów Rezerwy Rzeczypospolitej Polskiej im. Marszałka Józefa Piłsudskiego (KH)',
  'Witold Stanisław Kowalski PTJ (KH)',
  'Paweł Koza (KH, KM)',
  'Marcin Kroplewski (KH)',
  'Michał Król, Radny Sejmiku Województwa Łódzkiego (KH)',
  'Marcin Krzywdziński NTJ (KH, KM, KPD, KNZ)',
  'Dama Daniela Kubacka OSIC (KPP)',
  'Przew. Ks. Piotr Kubicki SAC, KOTJ, Kapelan Preceptorii Pomorza Zachodniego (KH)',
  'Anna Kubowicz, Strzeleckie Bractwo Kurkowe Grodu Jelcz-Laskowice (KH)',
  'Kaw. Przemysław Zbigniew Kuch KOTJ, Regimentarz Zakonu Rycerskiego Świątyni Jerozolimskiej (KB)',
  'asp. Michał Kuligowski (KH, KB, KPD, KNZ, KPP, KM, BKZ)',
  'Bibianna Kupka (KH)',
  'dr n. med. Tomasz Kupka (KH)',
  'Kaw. Krzysztof Kurkiewicz KCTJ, Wielki Radca, Preceptor Pomorza (KH)',
  'Katarzyna Kurpiewska (KH)',
  'Wiel. Ks. Adrian Kurzal, Wikariusz Parafii Najświętszej Maryi Panny Wspomożenia Wiernych w Gliwicach-Sośnicy (KNZ)',
  'Kaw. Krzysztof Kurzeja KGCTJ, Wielki Mistrz Zakonu, Wielki Przeor Polski OMCTH  (KH, KB, KPD, KNZ, KPP, KM, BKZ, SKZ, ZKZ)',
  'Dama Natasza Kurzeja DGCTJ, Wielki Kanclerz Wielkiego Przeoratu Polski OMCTH  (KH, KB, KPD, KNZ, KPP, KM, BKZ, SKZ, ZKZ)',
  'Wiktoria Konstancja Kurzeja (KB)',
  'Kaw. Władysław Kurzeja KTJ (KH, KB, KM, KPD, KNZ, BKZ)',
  'Kaw. Adam Henryk Kwarciak KTJ (KH)',
  'Jolanta Kwiatkowska (KH, KB)',
  'Kaw. Paweł Kwiatkowski KCTJ, Miecznik Generalny Zakonu Rycerskiego Świątyni Jerozolimskiej (KH, KB, KPD, KNZ,KM)',
  'dr hab. inż. Krzysztof Labisz, profesor Politechniki Śląskiej (KH)',
  'prof. dr hab. Ryszard Antoni Legutko, Poseł do Parlamentu Europejskiego, Współprzewodniczący Europejskich Konserwatystów i Reformatorów (KH)',
  'Kaw. Tobias Leister KOTJ, Marszałek Wielkiego Przeoratu Niemiec (KM)',
  'Wiel. Ks. Marek Leszczyna, Wikariusz Parafii Św. Wojciecha Biskupa i Męczennika w Mikołowie (KH)',
  'Kaw. Dariusz Lewandowski OSIC, Łódzki i Świętokrzyski Brat Kurkowy (KH)',
  'Kaw. Marek Lewicki KTJ (KH, KB, KM)',
  'Paweł Miłosz Lipnicki (KH, KPD)',
  'Kaw. Hubert Litwinionek KTJ (KH)',
  'Fabio Miguel Loutfi Pereira, Prezes Maronickiej Fundacji Misyjnej we Wrocławiu (KH)',
  'Kaw. Mieczysław Jan Lubryka, OSPPA, Kurkowe Bractwo Strzeleckie w Żorach (KH)',
  'Kaw. Andžej Lukaševič KOTJ, Legatus natus, Preceptor Litwy (KH, KB, KM)',
  'Tomasz Łuczaj (KM, KPP, KNZ, KH, KPD, BKZ)',
  'Kaw. Bogusław Łuczyk KOTJ, Komendant Straży Miejskiej w Mikołowie (KM)',
  'Stanisław Łuniewski, Konsul Honorowy Republiki Bośni i Hercegowiny w Białymstoku (KB)',
  'Antoni Daniel Maciej (KH)',
  'Paweł Majewski, Prezes Zarządu ENEA SA (KPP)',
  'Adrianna Maria Makarewicz (KH)',
  'Dariusz Konstanty Makarewicz (KH, KPD, KNZ)',
  'Kaw. Dariusz Makowski KTJ (KH)',
  'Mariusz Malewicz (KH, KM)',
  'Kaw. Dariusz Henryk Malicki OSAB (KH)',
  'Kaw. Maciej Malski KCTJ, Komandor Małopolski (KB)',
  'Piotr Mazur, Strażnik Pergaminu Katowickiego Bractwa Kurkowego (KNZ)',
  'Kaw. Wolfgang Meidenstein KTJ (KH)',
  'Męska Maryjna Wspólnota Modlitewna w Chojnicach (KH)',
  'mł. insp. Policji Tomasz Michalczak KOTJ (KB, KH)',
  'dr Janusz Michałek, Prezes Zarządu KSSE SA (KPP)',
  'Kaw. Jacek Mikołajczyk OSIC, Strzeleckie Bractwo Kurkowe Grodu Jelcz-Laskowice (KH, KPP)',
  'Jan Miloch (KH)',
  'Zygmunt Możdżeń, Strażnik Broni Katowickiego Bractwa Kurkowego (KNZ)',
  'Lucyna Mucha (KH, KPD, KM)',
  'Marek Myśliwiec, Wiceprezes Regionalnej Izby Gospodarczej w Katowicach (KH)',
  'Maria Napierała, Dyrektor Przedszkola z Oddziałami Integracyjnymi nr 2 im. Czesława Janczarskiego w Międzychodzie (KH)',
  'Wacław Napierała, Prezes Zarządu Izby Rzemiosła i Przedsiębiorców w Gorzowie Wielkopolskim (KH)',
  'Katarzyna Napiórkowska (KH)',
  'Kaw. Lando Neumann KOTJ, Wice Wielki Przeor Niemiec (KPP)',
  'Grzegorz Nowak, Wiceprzewodniczący Rady Miasta Bytom (KH)',
  'Kaw. Piotr Nowak KOTJ (KH, KB, KM, KPD, KPP, KNZ)',
  'dr hab. Tomasz Nowak, Zastępca Dyrektora Instytutu Muzykologii Uniwersytetu Warszawskiego (KH)',
  'Kaw. Przemysław Nowosad KTJ (KH, KM)',
  'prof. dr hab. n. med Anita Olejek, Kierownik Katedry Położnictwa i Ginekologii Śląskiego Uniwersytetu Medycznego, Śląski Wojewódzki Konsultant Ginekologii i Położnictwa (KH)',
  'Dama Katarzyna Oleksy (KH)',
  'Kaw. Norbert Oleksy NTJ (KH, KNZ, KPD, KPP, KM)',
  'Kaw. Artur Jan Olichwier KTJ, Komandor Wyborów (KH, KM)',
  'Tadeusz Olszowski (KH)',
  'Kaw. Andrzej Ortmann KOTJ (KH, KB, KPP, KM, KNZ, BKZ, SKZ)',
  'Jarosław Ortmann (KH, KB, KM, KNZ, KPD)',
  'Zdzisława Ortmann (KH)',
  'Tomasz Otremba (KH)',
  'dr n. med. Adam Ożóg (KH)',
  'Mirosław P… (nazwisko znane Kapitule) (KH, KNZ)',
  'Jacek Pajor (KH)',
  'Marek Palka, Prezes Zarządu Huty Łabędy  (KB)',
  'Parafia Św. Jana Ewangelisty w Szczecinie – Księża Pallotyni (KH)',
  'Parafia Św. Stanisława Biskupa i Męczennika w Czeladzi (KH)',
  'Piotr Patoń, Radny Miasta Bytom (KNZ)',
  'Kaw. Aleksander Marek Peterko KCTJ, Wielki Radca Wielkiego Przeoratu Polski (KB)',
  'Dama Edyta Peterko DTJ (KH)',
  'Phoenix Distribution Ltd Sp. z o. o. w Poznaniu (KH)',
  'Andrzej Pietrachowicz (KH)',
  'Wiel. Ks. Sławomir Pietraszko, Wikariusz Parafii Św. Stanisława Biskupa i Męczennika w Andrychowie, Wikariusz Parafii Jezusa Chrystusa Odkupiciela w Czechowicach-Dziedzicach, Wikariusz Parafii Wniebowzięcia Najświętszej Maryi Panny w Oświęcimiu (KH, KPD, KM, KNZ, KPP, BKZ, SKZ, ZKZ)',
  'Andrzej Pilot (KH)',
  'Katarzyna Pilot (KH)',
  'Katarzyna Sylwia Piotrowska, Skarbnik Żeńskiego Kurkowego Towarzystwa Strzeleckiego w Głogowie (KH, KB)',
  'Kaw. Maciej Piotrowski, OSPPA, Skarbnik – Strażnik Głogowskiego Towarzystwa Strzeleckiego „Bractwo Kurkowe" (KH, KM, KPD)',
  'dr n. med. Piotr Jakub Pniewski, Wicekomandor-Kanclerz Kapituły Odznaki Św. Floriana Mazovia (KH)',
  'prof. dr hab. inż. Krystian Probierz, Senator Rzeczypospolitej Polskiej (KH)',
  'Jolanta Przedpełska (KH, KB)',
  'Zbigniew Przedpełski, Radny Sejmiku Województwa Śląskiego (KH, KB)',
  'Kaw. Tomasz Radziewicz KCTJ, Legat OECTH na Mazowszu (KH, KB, KPD, KNZ, KPP, KM, BKZ)',
  'Kaw. Werner Rind KGCTJ, Wielki Przeor Generalny, Wielki Przeor Niemiec OMCTH (KH)',
  'Dama Małgorzata Bogumiła Rojek-Romańska DTJ (KB)',
  'Przewl. Ks. kpt. Piotr Paweł Rokita, Proboszcz Parafii Wojskowej pw. Zmartwychwstania Pańskiego w Brzegu (KH)',
  'Kaw. Dariusz Zbigniew Romański KOTJ, Prymiceriusz Radiostacji Świątyni Jerozolimskiej (KB, KM)',
  'Tomasz Rożniatowski (KH)',
  'Dama Beata Bogumiła Rupental DCTJ, Wielka Radczyni Wielkiego Przeoratu Polski (KM, KPD)',
  'Kaw. Robert Marian Rupental KOTJ (KPD, KM)',
  'Kaw. Robert Jarosław Rzepiński KOTJ, Komandor Wyborów, p. o. Legata na Pomorzu (KB)',
  'Krzysztof Wiktor S… (nazwisko znane Kapitule) (KB, KH)',
  'phm. Dariusz Schuppik, Komendant Hufca Miasta Zabrze Związku Harcerstwa Polskiego (KH, KB, KNZ, KM)',
  'Piotr Sienicki (KH)',
  'Witold Sito (KH)',
  'Stanisław Skoczylas, Wiceprezes Zarządu Huty Łabędy (KB)',
  'Kazimierz Smoliński, Poseł na Sejm Rzeczypospolitej Polskiej, Wiceprzewodniczący Komisji Śledczej ds. wyłudzeń VAT (KH)',
  'Adrian Smyczyński (KH)',
  'Przemysław Smyk (KH)',
  'Kaw. Stanisław Stańczuk OSBQ, Wspólnota Świętego Floriana w Kuczynie (KH)',
  'Kaw. Jan Stadnicki OSAB, OSCI (KPP)',
  'Kaw. Arkadiusz Stefaniak-Guzik KTJ (KH, KB, KPD, KNZ, KPP, KM)',
  'dr n. med. Mirosław Stempniewski (KH, KB)',
  'Stanisław Stolorz, Przewodniczący Federacji Związków Zawodowych Kolejarzy (KH)',
  'Kaw. Samuel Stróż (KH)',
  'Jacek Studziński (KH)',
  'Leon Suski (KH)',
  'Kaw. Artur Sypniewski KCTJ, Wielki Chorąży Zakonu Rycerskiego Świątyni Jerozolimskiej (KH, KB, KPD, KPP, KM)',
  'Sebastian Szaleniec, Starosta Powiatu Będzińskiego (KH)',
  'Kaw. Jarosław Szczęsny KTJ, Radny Sejmiku Województwa Śląskiego (KH, KM)',
  'Kaw. Krzysztof Szega KOTJ, Legat w Niemczech (KH, KM, KPD, KPP, KNZ, BKZ, SKZ)',
  'Mirosław Szemla, Wiceprezes Zarządu Wojewódzkiego Polskiego Stronnictwa Ludowego (PSL) Województwa Śląskiego (KB, KM)',
  'Szkoła Podstawowa w Silnie (KH)',
  'Kaw. Marek Szłoiński KTJ (KM)',
  'Kaw. Marek Szymanek KTJ (KH, KB, KPD, KM)',
  'dr hab. Andrzej Szymański, Profesor Uniwersytetu Opolskiego (KH)',
  'Andrzej Śmieszkoł (KH)',
  'Patryk Śniegoń KTJ (KH, KPD)',
  'Sylwester Śpiewak, Przewodniczący Zarządu NSZZ Solidarność \'80 Rzeczypospolitej Polskiej (KM)',
  'Bogusław Świtek „Venator", Król Kurkowy Tarnowski A.D. MMXX (KB)',
  'Łucja Świtek (KPD)',
  'Sławomir Świtek (KH, KM, KPD, KPP, KNZ, BKZ, SKZ, ZKZ)',
  'Dorota Tobiszowska, Senator Rzeczypospolitej Polskiej (KB)',
  'Kaw. Bogumił Tycz OSBQ (KPP)',
  'dr Marcin Tyslik, Konsul Honorowy Republiki Federalnej Niemiec w Gliwicach (KB)',
  'Kamil Urbaniak (KH)',
  'Krystyna Usarz (KH)',
  'Vilniaus Arkivyskupijos Katechetikos Centras (KH)',
  'Kacper Zbigniew Wawrzynkiewicz (KH)',
  'Jadwiga Westfal (KH, KM)',
  'Kaw. Günther Wichelhaus KGCTJ, Wielki Przeor Niemiec (KM)',
  'Kaw. Jacek Wicher OSS, Członek Zarządu Okręgu Śląskiego Zjednoczenia Kurkowych Bractw Strzeleckich Rzeczypospolitej Polskiej (KH)',
  'Paweł Wiśniewicz (KH)',
  'Krzysztof Witkowski FTJ, właściciel Muzeum Monet i Medali Świętego Jana Pawła II w Częstochowie (KH, KB)',
  'Kaw. Zbigniew Wolfram „Niepodległy", OSIC, OSPPA, Król Kurkowy Krakowski A.D. MMXVIII (KB)',
  'Dama Hanna Wolniak DOTJ, Legat ad casum (KH, KB, KM, KPD)',
  'Kaw. Leszek Stanisław Wolniak KOTJ, Wielki Radca Senior Wielkiego Przeoratu Polski OECTH, Legat ad casum (KH, KB, KM, KPD)',
  'Laura Woźnicka (KM)',
  'Kaw. dr Dariusz Woźnicki OSS, OSIC, Dyrektor Instytutu Kultury Rycerskiej w Tarnowskich Górach (KB, KH, KPD, KPP, KNZ, KM, BKZ)',
  'Kaw. Grzegorz Zalewski KOTJ, Starszy Chorąży Zakonu Rycerskiego Świątyni Jerozolimskiej (KH, KB, KPD, KNZ, KPP, KM, BKZ, SKZ)',
  'st. mat Łukasz Zatorski (KH)',
  'Zespół Szkół Specjalnych w Chojnicach (KH, KPD, KPP, KNZ)',
  'Przew. Piotr Zawada SAC, KOTJ, Kapelan OECTH (KB, KM)',
  'Marcin Zawistowski (KH)',
  'Zespół Szkół Spożywczych w Chojnicach (KM)',
  'Maciej Tomasz Zieleniow, podporucznik Związku Strzeleckiego „Strzelec" Rzeczypospolitej Polskiej, Szef Informacji Oddziału Gniezno (KH)',
];

import { Calendar, User } from '../../components/icons';

const SerceDlaSyrii = () => {
  return (
    <div className="pt-20">
      {/* Hero – tylko tytuł */}
      <section className="relative min-h-[30vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-templar-burgundy to-templar-red" />
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white">
            Krzyż PRO SYRIA / Cross PRO SYRIA – Laureaci / Laureates
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8 text-gray-800">
            {/* Data i autor na białym tle */}
            <div className="flex flex-wrap gap-6 sm:gap-10 py-4 border-b border-gray-200">
              <div className="flex items-center gap-3 text-gray-700">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-templar-red/10 text-templar-red" aria-hidden>
                  <Calendar className="w-5 h-5" />
                </span>
                <span className="font-semibold">8 czerwca 2017</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-templar-red/10 text-templar-red" aria-hidden>
                  <User className="w-5 h-5" />
                </span>
                <span className="font-semibold">Krzysztof Kurzeja KGCTJ</span>
              </div>
            </div>

            <h2 className="font-heading text-3xl text-templar-black font-bold">Krzyż Zasługi PRO SYRIA</h2>

            <p>
              Program <strong>SERCE DLA SYRII</strong> ma na celu pomoc ofiarom wojny w Syrii, zwłaszcza prześladowanym przez terrorystów chrześcijanom oraz sierotom, pozostającym pod opieką Patriarchatu Antiochii i Jerozolimy.
            </p>

            <p>Miesięczny koszt utrzymania 1 osoby w Syrii to około 140 zł.</p>

            <p>Honorowym Patronem Programu jest Regionalna Izba Gospodarcza w Katowicach.</p>

            <p className="font-semibold text-templar-red">KAŻDY DATEK JEST WAŻNY!</p>

            <p>
              <strong>Krzyże PRO SYRIA</strong> przyznawane są każdej osobie lub instytucji, która wspomoże Program Serce dla Syrii datkiem w wysokości przynajmniej 100 euro (ok. 490 zł). Istnieje też możliwość zadeklarowania kwoty wpłaty 5 x 20 euro w ratach miesięcznych.
            </p>

            <p>
              Krzyże wręczane są wraz ze stosownym dyplomem z błogosławieństwem Wielce Błogosławionego Patriarchy Jerozolimskiego. Istnieje też możliwość otrzymania <strong>Krzyży PRO SYRIA</strong> oraz dyplomu korespondencyjnie.
            </p>

            <p>Darczyńcy będą polecani Panu Bogu podczas comiesięcznej Eucharystii Wielkiego Przeoratu Polski OMCTH.</p>

            {/* Image */}
            <div className="my-12">
              <img src="/syria.jpg" alt="Pro Syria" className="w-full max-w-2xl mx-auto rounded-lg shadow-lg" />
            </div>

            <p className="text-sm text-gray-600 font-bold">PRO SYRIA KRZYŻE WSZYSTKIE 2021 03 04</p>

            <p><strong>FUNDACJA TEMPLARIUSZY</strong></p>
            <p><strong>KRS 0000656217</strong></p>

            <p>Tytuł wpłaty (min. 100 euro lub równowartość w PLN):</p>

            <h3 className="font-heading text-xl text-templar-black pt-4 font-bold">Krzyże Honorowe PRO SYRIA:</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>„SERCE" – <strong>Krzyż Honorowy PRO SYRIA</strong></li>
              <li>„POKÓJ" – <strong>Krzyż Pokoju i Dobroci PRO SYRIA</strong> (dla inwalidów i niepełnosprawnych – ofiar wojny domowej)</li>
              <li>„DZIECI" – <strong>Krzyż Nadziei i Zaufania PRO SYRIA</strong> (dla dzieci i sierot – ofiar wojny domowej)</li>
              <li>„ZGODA" – <strong>Krzyż Pokuty i Przebaczenia PRO SYRIA</strong> (na odbudowę zdewastowanych przez islamistów świątyń)</li>
            </ul>

            <h3 className="font-heading text-xl text-templar-black pt-4 font-bold">Krzyż Celowy PRO SYRIA:</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>„MALULA" – <strong>Krzyż Maluli</strong> (na rzecz odbudowy Maluli, jedynej chrześcijańskiej miejscowości, w której używa się języka aramejskiego, ojczystego języka Jezusa Chrystusa)</li>
            </ul>

            <h3 className="font-heading text-xl text-templar-black pt-4 font-bold">Krzyże Zasługi PRO SYRIA</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>„BKZ" – <strong>Brązowy Krzyż Zasługi PRO SYRIA</strong> – Brązowy Krzyż Zasługi PRO SYRIA nadawany jest Laureatom przynajmniej pięciu Krzyży Honorowych lub Krzyży Celowych PRO SYRIA po dokonaniu dodatkowego wsparcia Programu Serce dla Syrii  datkiem w wysokości przynajmniej 200 euro lub równoważnym.</li>
              <li>„SKZ" – <strong>Srebrny Krzyż Zasługi PRO SYRIA</strong> – Srebrny Krzyż Zasługi PRO SYRIA nadawany jest Laureatom Brązowego Krzyża Zasługi PRO SYRIA po dokonaniu dodatkowego wsparcia Programu Serce dla Syrii datkiem w wysokości przynajmniej 400 euro lub równoważnym.</li>
              <li>„ZKZ" – <strong>Złoty Krzyż Zasługi PRO SYRIA</strong> – Złoty Krzyż Zasługi PRO SYRIA nadawany jest Laureatom Srebrnego Krzyża Zasługi PRO SYRIA po dokonaniu dodatkowego wsparcia Programu Serce dla Syrii datkiem w wysokości przynajmniej 600 euro lub równoważnym.</li>
            </ul>

            <div className="bg-gray-50 rounded-xl border border-gray-200 my-8 overflow-hidden shadow-sm">
              <div className="bg-templar-red/10 px-5 py-3 border-b border-gray-200">
                <h4 className="font-heading font-bold text-templar-black">Konto bankowe</h4>
              </div>
              <div className="p-5 space-y-4">
                <div>
                  <p className="text-xs uppercase tracking-wide text-gray-500 mb-0.5">Bank</p>
                  <p className="font-bold text-gray-900">Nest Bank SA</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-gray-500 mb-0.5">Konto w PLN</p>
                  <p className="font-bold text-gray-900 font-mono tracking-wide">45 1870 1045 2078 1071 6215 0001</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-gray-500 mb-0.5">Konto w euro</p>
                  <p className="font-bold text-gray-900 font-mono tracking-wide">88 1870 1045 2078 1071 6215 0003</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-gray-500 mb-0.5">Wpłaty z zagranicy / foreign transfers</p>
                  <p className="font-bold text-gray-900 font-mono tracking-wide">PL 88 1870 1045 2078 1071 6215 0003</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-gray-500 mb-0.5">SWIFT</p>
                  <p className="font-bold text-gray-900 font-mono">NESBPLPW</p>
                </div>
              </div>
            </div>

            {/* Scrollable list of laureates */}
            <div className="mt-12">
              <h3 className="font-heading text-xl text-templar-black mb-4 font-bold">
                Lista odznaczonych Krzyżami PRO SYRIA (alfabetyczna):
              </h3>
              <div className="relative">
                <div
                  className="border border-gray-200 rounded-lg overflow-hidden bg-gray-50/50 max-h-[420px] overflow-y-auto scroll-smooth pr-2"
                  style={{
                    scrollbarWidth: 'thin',
                    scrollbarColor: '#cbd5e0 #f1f5f9',
                  }}
                >
                  <ul className="py-3 px-4 space-y-2 list-none">
                    {LAUREACI_PL.map((line, i) => {
                      const commaIdx = line.indexOf(',');
                      const parenIdx = line.indexOf(' (');
                      const nameEnd = commaIdx !== -1 ? commaIdx : (parenIdx !== -1 ? parenIdx : line.length);
                      const name = line.slice(0, nameEnd).trim();
                      const rest = line.slice(nameEnd);
                      return (
                        <li key={i} className="text-gray-800 text-sm leading-snug py-0.5 border-b border-gray-100 last:border-0">
                          <strong>{name}</strong>{rest}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div
                  className="pointer-events-none absolute bottom-0 left-0 right-4 h-16 bg-gradient-to-t from-white to-transparent rounded-b-lg"
                  aria-hidden
                />
              </div>
              <p className="text-xs text-gray-500 mt-2">Przewiń listę, aby zobaczyć wszystkich odznaczonych.</p>
            </div>

            {/* Legenda */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h4 className="font-heading text-lg text-templar-black mb-4 font-bold">Legenda:</h4>
              <div className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
                <table className="w-full text-left text-sm">
                  <tbody className="divide-y divide-gray-200">
                    <tr><td className="py-2.5 px-4 font-bold text-templar-black w-20 align-top">KH</td><td className="py-2.5 px-4">Krzyż Honorowy PRO SYRIA</td></tr>
                    <tr><td className="py-2.5 px-4 font-bold text-templar-black align-top">KB</td><td className="py-2.5 px-4">Biały Krzyż Honorowy PRO SYRIA</td></tr>
                    <tr><td className="py-2.5 px-4 font-bold text-templar-black align-top">KPD</td><td className="py-2.5 px-4">Krzyż Pokoju i Dobroci PRO SYRIA</td></tr>
                    <tr><td className="py-2.5 px-4 font-bold text-templar-black align-top">KNZ</td><td className="py-2.5 px-4">Krzyż Nadziei i Zaufania PRO SYRIA</td></tr>
                    <tr><td className="py-2.5 px-4 font-bold text-templar-black align-top">KPP</td><td className="py-2.5 px-4">Krzyż Pokuty i Przebaczenia PRO SYRIA</td></tr>
                    <tr><td className="py-2.5 px-4 font-bold text-templar-black align-top">KM</td><td className="py-2.5 px-4">Krzyż Maluli</td></tr>
                    <tr><td className="py-2.5 px-4 font-bold text-templar-black align-top">BKZ</td><td className="py-2.5 px-4">Brązowy Krzyż Zasługi PRO SYRIA</td></tr>
                    <tr><td className="py-2.5 px-4 font-bold text-templar-black align-top">SKZ</td><td className="py-2.5 px-4">Srebrny Krzyż Zasługi PRO SYRIA</td></tr>
                    <tr><td className="py-2.5 px-4 font-bold text-templar-black align-top">ZKZ</td><td className="py-2.5 px-4">Złoty Krzyż Zasługi PRO SYRIA</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SerceDlaSyrii;
