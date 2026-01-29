import { useParams } from 'react-router-dom';

interface ProjektDetailProps {
  title: string;
  description?: string;
}

const ProjektDetail = ({ title, description }: ProjektDetailProps) => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-templar-burgundy to-templar-red"></div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="inline-block px-4 py-2 bg-templar-red text-white text-sm font-semibold mb-6">
            PROJEKT
          </div>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-white mb-6">
            {title}
          </h1>
          {description && (
            <p className="text-xl text-white/90">
              {description}
            </p>
          )}
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[95rem] mx-auto px-2 sm:px-4 lg:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 text-lg">
                Treść projektu zostanie wkrótce uzupełniona.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjektDetail;
