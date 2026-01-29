const BenefactorTempli = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative min-h-[30vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-templar-burgundy to-templar-red" />
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white">
            Benefactor Templi
          </h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8 text-gray-800">
            <p>
              Tytuł <strong>Benefactor Templi</strong> wraz z możliwością używania znaku towarowego Benefactor Templi na swoich dokumentach i wyrobach może otrzymać osoba fizyczna lub prawna, która w szczególny sposób przyczyniła się do rozwoju Zakonu Templariuszy, bądź znacząco wsparła któryś z jego projektów – <strong>Świetlica</strong> i <strong>Projekt Aquila</strong>.
            </p>

            <div className="my-8">
              <img src="/bt.jpg" alt="Benefactor Templi" className="w-full max-w-2xl mx-auto rounded-lg shadow-lg" />
            </div>

            <p>
              Tytuł certyfikowany jest stosownym dyplomem oraz repliką średniowiecznego miecza z wygrawerowaną nazwą nagrodzonego Dobrodzieja.
            </p>

            <p>
              Ponadto corocznie Kapituła może przyznać jeden tytuł honorowy.
            </p>

            <h3 className="font-heading text-xl text-templar-black font-bold pt-4">
              Tytuły Benefactor Templi 2008 otrzymały:
            </h3>
            <ul className="space-y-3 list-none pl-0">
              <li>
                <strong>AMC Alfa Metalcraft Corporation Sp. z o. o.</strong> w Warszawie –{' '}
                <a href="https://www.pl.amc.info" target="_blank" rel="noopener noreferrer" className="text-templar-red hover:text-templar-red-light font-semibold underline">
                  www.pl.amc.info
                </a>
              </li>
              <li>
                <strong>FM Group Artur Trawiński</strong> w Poznaniu –{' '}
                <a href="https://www.fmgroup.com" target="_blank" rel="noopener noreferrer" className="text-templar-red hover:text-templar-red-light font-semibold underline">
                  www.fmgroup.com
                </a>
              </li>
              <li>
                <strong>NetworkMAGAZYN</strong> –{' '}
                <a href="https://www.networkmagazyn.pl" target="_blank" rel="noopener noreferrer" className="text-templar-red hover:text-templar-red-light font-semibold underline">
                  www.networkmagazyn.pl
                </a>
              </li>
              <li>
                <strong>Kondor Sp. z o. o.</strong> w Katowicach –{' '}
                <a href="https://www.agencjakondor.pl" target="_blank" rel="noopener noreferrer" className="text-templar-red hover:text-templar-red-light font-semibold underline">
                  www.agencjakondor.pl
                </a>
              </li>
            </ul>

            <p className="font-bold pt-4">Tytuł honorowy otrzymała:</p>
            <p>
              <strong>Regionalna Izba Gospodarcza w Katowicach</strong> –{' '}
              <a href="https://www.rig.katowice.pl" target="_blank" rel="noopener noreferrer" className="text-templar-red hover:text-templar-red-light font-semibold underline">
                www.rig.katowice.pl
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BenefactorTempli;
