import { useParams, Link } from 'react-router-dom';
import { MapPin, Users, Mail, Phone, ArrowLeft } from '../components/icons';

const OddzialDetail = () => {
  const { wojewodztwo } = useParams<{ wojewodztwo: string }>();

  const oddzialy: Record<string, {
    name: string;
    fullName: string;
    location: string;
    description: string;
    komandor: string;
    members: string;
    email: string;
    phone: string;
    address: string;
  }> = {
    mazowieckie: {
      name: 'Oddział Mazowiecki',
      fullName: 'KOMANDORIA MAZOWIECKA',
      location: 'Warszawa, Mazowieckie',
      description: 'Główny oddział w Polsce, siedziba Wielkiego Przeoratu. Odpowiedzialny za koordynację wszystkich oddziałów i reprezentację międzynarodową.',
      komandor: 'Br. Jan Kowalski',
      members: '65 rycerzy',
      email: 'mazowiecki@templariusze.pl',
      phone: '+48 22 123 45 67',
      address: 'ul. Świętokrzyska 15, 00-050 Warszawa',
    },
    malopolskie: {
      name: 'Oddział Małopolski',
      fullName: 'KOMANDORIA MAŁOPOLSKA',
      location: 'Kraków, Małopolskie',
      description: 'Jeden z najstarszych oddziałów, z bogatą historią sięgającą średniowiecza. Aktywnie zaangażowany w ochronę dziedzictwa kulturowego regionu.',
      komandor: 'Br. Piotr Nowak',
      members: '62 rycerzy',
      email: 'malopolski@templariusze.pl',
      phone: '+48 12 345 67 89',
      address: 'ul. Floriańska 15, 31-019 Kraków',
    },
    pomorskie: {
      name: 'Oddział Pomorski',
      fullName: 'KOMANDORIA POMORSKA',
      location: 'Gdańsk, Pomorskie',
      description: 'Oddział nadmorski, znany z działalności charytatywnej i pomocy społecznej dla społeczności rybackich. Organizuje coroczne pielgrzymki morskie.',
      komandor: 'Br. Marek Wiśniewski',
      members: '40 rycerzy',
      email: 'pomorski@templariusze.pl',
      phone: '+48 58 123 45 67',
      address: 'ul. Długi Targ 28, 80-828 Gdańsk',
    },
    slaskie: {
      name: 'Oddział Śląski',
      fullName: 'KOMANDORIA ŚLĄSKA',
      location: 'Wrocław, Dolnośląskie',
      description: 'Dynamicznie rozwijający się oddział, znany z organizacji konferencji historycznych i współpracy międzynarodowej z oddziałami niemieckimi.',
      komandor: 'Br. Tomasz Zieliński',
      members: '55 rycerzy',
      email: 'slaski@templariusze.pl',
      phone: '+48 71 123 45 67',
      address: 'Rynek 14, 50-101 Wrocław',
    },
    wielkopolskie: {
      name: 'Oddział Wielkopolski',
      fullName: 'KOMANDORIA WIELKOPOLSKA',
      location: 'Poznań, Wielkopolskie',
      description: 'Oddział z bogatą tradycją, aktywnie uczestniczący w życiu kulturalnym regionu. Organizuje wydarzenia historyczne i charytatywne.',
      komandor: 'Br. Andrzej Nowak',
      members: '48 rycerzy',
      email: 'wielkopolski@templariusze.pl',
      phone: '+48 61 123 45 67',
      address: 'Stary Rynek 1, 61-772 Poznań',
    },
    dolnoslaskie: {
      name: 'Oddział Dolnośląski',
      fullName: 'KOMANDORIA DOLNOŚLĄSKA',
      location: 'Wrocław, Dolnośląskie',
      description: 'Oddział znany z działalności edukacyjnej i kulturalnej. Współpracuje z lokalnymi instytucjami w zakresie ochrony dziedzictwa.',
      komandor: 'Br. Krzysztof Wiśniewski',
      members: '52 rycerzy',
      email: 'dolnoslaski@templariusze.pl',
      phone: '+48 71 234 56 78',
      address: 'Plac Solny 14, 50-062 Wrocław',
    },
  };

  const oddzial = wojewodztwo ? oddzialy[wojewodztwo] : null;

  if (!oddzial) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-4xl mb-4">Oddział nie znaleziony</h1>
          <Link to="/oddzialy" className="text-templar-red hover:text-templar-red-light">
            Powrót do listy oddziałów
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-templar-burgundy to-templar-red"></div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <Link
            to="/oddzialy"
            className="inline-flex items-center space-x-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Powrót do oddziałów</span>
          </Link>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-4">
            {oddzial.fullName}
          </h1>
          <p className="text-xl text-white/90">{oddzial.location}</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[95rem] mx-auto px-2 sm:px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Content */}
            <div>
              <h2 className="font-heading text-3xl md:text-4xl text-templar-black mb-6">
                {oddzial.name}
              </h2>
              <p className="text-lg text-gray-700 mb-8">{oddzial.description}</p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Users className="w-5 h-5 text-templar-red mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900">Komandor:</div>
                    <div className="text-gray-700">{oddzial.komandor}</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="w-5 h-5 text-templar-red mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900">Członkowie:</div>
                    <div className="text-gray-700">{oddzial.members}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Contact Info */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="font-heading text-2xl text-templar-black mb-6">Dane Kontaktowe</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-templar-red mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900">Adres:</div>
                    <div className="text-gray-700">{oddzial.address}</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-templar-red mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900">Telefon:</div>
                    <div className="text-gray-700">{oddzial.phone}</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-templar-red mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900">Email:</div>
                    <a href={`mailto:${oddzial.email}`} className="text-templar-red hover:text-templar-red-light">
                      {oddzial.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OddzialDetail;

