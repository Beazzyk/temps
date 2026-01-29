const KsiazkaDlaWieznia = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative min-h-[30vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-templar-burgundy to-templar-red" />
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white">
            KSIĄŻKA DLA WIĘŹNIA
          </h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8 text-gray-800">
            <p>
              <strong>Wielki Przeorat Polski Templariuszy OMCTH</strong> z radością informuje o prowadzonej bezterminowo akcji <strong>KSIĄŻKA DLA WIĘŹNIA</strong>.
            </p>

            <p>
              Zbieramy niepotrzebne i niejednokrotnie zalegające strychy książki i przekazujemy je do bibliotek w zakładach karnych i poprawczych.
            </p>

            <p>
              Mile widziane książki o każdej tematyce, zarówno beletrystyka, jak i opracowania historyczne, podręczniki, encyklopedie, książki techniczne i inne. To, co nam jest zbędne może odmienić czyjeś życie.
            </p>

            <p>
              Akcją z ramienia Wielkiego Przeoratu zawiaduje <strong>Wielki Bibliotekarz Krzysztof Kurkiewicz, KTJ</strong>.
            </p>

            <p className="font-bold">Książki można wysyłać pocztą pod adres:</p>
            <div className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden shadow-sm">
              <div className="bg-templar-red/10 px-5 py-3 border-b border-gray-200">
                <h4 className="font-heading font-bold text-templar-black">Adres do wysyłki książek</h4>
              </div>
              <div className="p-5 font-semibold text-gray-900 leading-relaxed">
                <p>Krzysztof Kurkiewicz, KTJ</p>
                <p>ul. Sportowa 31</p>
                <p>83-032 PSZCZÓŁKI</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 my-10">
              <img src="/kdw1.jpg" alt="Książka dla Więźnia" className="w-full rounded-lg shadow-lg" />
              <img src="/kdw2.jpg" alt="Książka dla Więźnia" className="w-full rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KsiazkaDlaWieznia;
