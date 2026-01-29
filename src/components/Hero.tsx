const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Top Text on Hero Background */}
      <div className="absolute top-16 left-0 right-0 z-30">
        <div className="max-w-[95rem] mx-auto px-2 sm:px-4 lg:px-6">
          <p className="text-white text-base md:text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl text-center font-heading tracking-wider drop-shadow-2xl font-bold leading-tight">
            <span className="text-templar-red-light" style={{ textShadow: '0 0 10px rgba(0,0,0,0.9), 0 0 5px rgba(255,255,255,0.5), 2px 2px 4px rgba(0,0,0,0.8)' }}>O</span>RDO{' '}
            <span className="text-templar-red-light" style={{ textShadow: '0 0 10px rgba(0,0,0,0.9), 0 0 5px rgba(255,255,255,0.5), 2px 2px 4px rgba(0,0,0,0.8)' }}>E</span>QUESTRIS{' '}
            <span className="text-templar-red-light" style={{ textShadow: '0 0 10px rgba(0,0,0,0.9), 0 0 5px rgba(255,255,255,0.5), 2px 2px 4px rgba(0,0,0,0.8)' }}>C</span>HRISTI{' '}
            <span className="text-templar-red-light" style={{ textShadow: '0 0 10px rgba(0,0,0,0.9), 0 0 5px rgba(255,255,255,0.5), 2px 2px 4px rgba(0,0,0,0.8)' }}>T</span>EMPLIQUE{' '}
            <span className="text-templar-red-light" style={{ textShadow: '0 0 10px rgba(0,0,0,0.9), 0 0 5px rgba(255,255,255,0.5), 2px 2px 4px rgba(0,0,0,0.8)' }}>H</span>IEROSOLYMITANI
          </p>
        </div>
      </div>

      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/temps1.jpeg"
            alt="Templar Knights"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-templar-burgundy to-templar-red opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Main Title */}
        <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-32 drop-shadow-2xl">
          Magnus Prioratus Poloniae
        </h1>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection('kim-jestesmy')}
            className="px-8 py-4 bg-templar-red hover:bg-templar-red-light text-white font-semibold text-lg rounded transition-all"
          >
            Dowiedz się więcej
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

