import { ChevronDown } from './icons';

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
      <div className="absolute top-8 left-0 right-0 z-30">
        <div className="max-w-[95rem] mx-auto px-2 sm:px-4 lg:px-6">
          <p className="text-white text-base md:text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl text-center font-heading tracking-wider drop-shadow-2xl font-semibold leading-tight">
            <span className="text-templar-red">O</span>RDO{' '}
            <span className="text-templar-red">E</span>QUESTRIS{' '}
            <span className="text-templar-red">C</span>HRISTI{' '}
            <span className="text-templar-red">T</span>EMPLIQUE{' '}
            <span className="text-templar-red">H</span>IEROSOLYMITANI
          </p>
        </div>
      </div>

      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/hero.jpg"
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
        <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-12 drop-shadow-2xl">
          Magnus Prioratus Poloniae
        </h1>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button
            onClick={() => scrollToSection('kim-jestesmy')}
            className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold text-lg rounded hover:bg-white/10 transition-all"
          >
            Dowiedz się więcej
          </button>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => scrollToSection('kim-jestesmy')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
};

export default Hero;

