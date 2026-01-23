import React, { useMemo, useState, useEffect, useRef } from 'react';
import * as d3 from 'd3-hierarchy';

interface NodeData {
  id: string;
  name: string;
  image?: string;
  children?: NodeData[];
}

const NODE_WIDTH = 120;
const RIBBON_HEIGHT = 24;
const SHIELD_HEIGHT = 90;
const NODE_TOTAL_HEIGHT = RIBBON_HEIGHT + 6 + SHIELD_HEIGHT;

const HeraldicNode: React.FC<{ name: string; image: string; x: number; y: number }> = ({ name, image, x, y }) => {
  return (
    <div
      className="absolute flex flex-col items-center transition-all duration-300"
      style={{
        left: x - NODE_WIDTH / 2,
        top: y,
        width: NODE_WIDTH,
      }}
    >
      {/* Wstęga */}
      <div className="relative mb-1.5 w-full" style={{ height: RIBBON_HEIGHT }}>
        <div className="block relative z-10 h-full">
          <div className="bg-[#B91C1C] text-white text-[7px] md:text-[9px] font-bold h-full flex items-center justify-center px-2 text-center rounded-sm shadow-md border-y border-red-900 leading-tight uppercase overflow-hidden">
            {name}
          </div>
          <div className="absolute top-1/2 -left-1.5 -translate-y-1/2 w-2 h-3/4 bg-[#8b1515] -z-10" style={{ clipPath: 'polygon(100% 0, 0 50%, 100% 100%)' }}></div>
          <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-2 h-3/4 bg-[#8b1515] -z-10" style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }}></div>
        </div>
      </div>

      {/* Tarcza */}
      <div
        className="relative block"
        style={{ width: 62, height: SHIELD_HEIGHT }}
      >
        <div className="absolute inset-0 bg-white rounded-b-[1.5rem] shadow-md border border-gray-200 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-contain p-1"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
};

const HIERARCHY_DATA: NodeData = {
  id: 'master',
  name: 'Wielki Mistrz Zakonu',
  image: '/logo.png',
  children: [
    {
      id: 'preceptoria-litwy',
      name: 'Preceptoria sui iuris Litwy',
      image: '/logo.png',
    },
    {
      id: 'delegatura-anglia',
      name: 'Delegatura w Anglii i Walii',
      image: '/logo.png',
    },
    {
      id: 'priory',
      name: 'Wielki Przeorat Polski',
      image: '/logo.png',
      children: [
        {
          id: 'silesia_balliwat',
          name: 'Baliwat Śląska',
          image: '/logo.png',
          children: [
            { 
              id: 'lower_silesia', 
              name: 'Komandoria Dolnego Śląska', 
              image: '/logo.png',
              children: [
                { id: 'nysanowa', name: 'Preceptoria Nysanowa', image: '/logo.png' },
                { id: 'lubusz', name: 'Preceptoria Ziemi Lubuskiej', image: '/logo.png' },
                { id: 'west_pomerania', name: 'Preceptoria Pomorza Zachodniego', image: '/logo.png' }
              ]
            },
            { 
              id: 'upper_silesia', 
              name: 'Komandoria Górnego Śląska', 
              image: '/logo.png',
              children: [{ id: 'gliwice_u', name: 'Preceptoria Gliwicka', image: '/logo.png' }]
            },
            { 
              id: 'katowice', 
              name: 'Komandoria Katowicka', 
              image: '/logo.png'
            }
          ]
        },
        { id: 'silesia_auto', name: 'Autonomiczna Komandoria Śląska', image: '/logo.png' },
        { 
          id: 'malopolska', 
          name: 'Komandoria Małopolska', 
          image: '/logo.png',
          children: [{ id: 'krakow', name: 'Preceptoria Krakowska', image: '/logo.png' }]
        },
        { 
          id: 'pomerania', 
          name: 'Komandoria Pomorza', 
          image: '/logo.png',
          children: [
            { id: 'gdanska', name: 'Preceptoria Gdańska', image: '/logo.png' },
            { id: 'zulaw', name: 'Preceptoria Żuław Steblewskich', image: '/logo.png' }
          ]
        }
      ]
    }
  ]
};

const COLORS = {
  line: '#B91C1C',
  text: '#1E3A8A',
  ribbon: '#B91C1C',
};

const WielkiPrzeoratStruktura: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  const { nodes, links, bounds } = useMemo(() => {
    const root = d3.hierarchy<NodeData>(HIERARCHY_DATA);
    const tree = d3.tree<NodeData>().nodeSize([180, 180]);
    const layout = tree(root);
    const descendants = layout.descendants();

    // Sztywne wysokości poziomów (Tiers)
    const TIER_Y = {
      T1: 0,
      T2: 160,
      T3: 320,
      T4: 480,
      T5: 640
    };

    // Ręczne pozycjonowanie dla maksymalnej kontroli
    descendants.forEach(d => {
      const id = d.data.id;
      const name = d.data.name;

      // LINE 1
      if (id === 'master') { d.y = TIER_Y.T1; d.x = 0; }

      // LINE 2
      if (id === 'preceptoria-litwy') { d.y = TIER_Y.T2; d.x = -340; }
      if (id === 'delegatura-anglia') { d.y = TIER_Y.T2; d.x = -170; }
      if (id === 'priory') { d.y = TIER_Y.T2; d.x = 150; }

      // LINE 3 (Baliwat i Autonomiczna na jednej linii)
      if (id === 'silesia_balliwat') { d.y = TIER_Y.T3; d.x = -85; }
      if (id === 'silesia_auto') { d.y = TIER_Y.T3; d.x = 220; }

      // LINE 4 (Pozostałe Komandorie)
      if (name.includes('Komandoria') && id !== 'silesia_auto') {
        d.y = TIER_Y.T4;
        if (id === 'lower_silesia') d.x = -254;
        if (id === 'upper_silesia') d.x = -68;
        if (id === 'katowice') d.x = 102;
        if (id === 'malopolska') d.x = 355;
        if (id === 'pomerania') d.x = 575;
      }

      // LINE 5 (Preceptorie)
      if (name.includes('Preceptoria')) {
        d.y = TIER_Y.T5;
        // Pod Dolnym Śląskiem
        if (id === 'nysanowa') d.x = -440;
        if (id === 'lubusz') d.x = -254;
        if (id === 'west_pomerania') d.x = -68;
        // Pod Górnym Śląskiem
        if (id === 'gliwice_u') d.x = 102;
        // Pod Małopolską
        if (id === 'krakow') d.x = 355;
        // Pod Pomorzem
        if (id === 'gdanska') d.x = 490;
        if (id === 'zulaw') d.x = 660;
      }
    });

    const connections = layout.links();
    let minX = -800, maxX = 800, minY = 0, maxY = 800;
    descendants.forEach(d => {
      minX = Math.min(minX, d.x);
      maxX = Math.max(maxX, d.x);
      minY = Math.min(minY, d.y);
      maxY = Math.max(maxY, d.y);
    });

    return { 
      nodes: descendants, 
      links: connections, 
      bounds: { width: maxX - minX + 320, height: maxY - minY + 250, offset: (maxX + minX) / 2 }
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        setScale(Math.min(1, (containerWidth - 40) / bounds.width));
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [bounds.width]);

  const drawLink = (link: d3.HierarchyPointLink<NodeData>) => {
    const { source, target } = link;
    const startX = source.x;
    const startY = source.y + NODE_TOTAL_HEIGHT;
    const endX = target.x;
    const endY = target.y;

    // Połączenia od Mistrza (T1 -> T2)
    if (source.data.id === 'master') {
      // Preceptoria Litwy i Delegatura - proste linie
      if (target.data.id === 'preceptoria-litwy' || target.data.id === 'delegatura-anglia') {
        return <path key={target.data.id} d={`M ${startX} ${startY} V ${endY}`} fill="none" stroke={COLORS.line} strokeWidth="2" />;
      }
      // Wielki Przeorat Polski - tylko pionowa linia w dół
      if (target.data.id === 'priory') {
        return <path key={target.data.id} d={`M ${startX} ${startY} V ${endY}`} fill="none" stroke={COLORS.line} strokeWidth="2.5" />;
      }
    }

    // Magistrala pod Przeoratem (T2 -> T3 i T4)
    if (source.data.id === 'priory') {
      const railY = startY + 25; 
      return <path key={target.data.id} d={`M ${startX} ${startY} V ${railY} H ${endX} V ${endY}`} fill="none" stroke={COLORS.line} strokeWidth="2.2" />;
    }

    // Magistrala pod Baliwatem (T3 -> T4)
    if (source.data.id === 'silesia_balliwat') {
      const railY = startY + 25;
      return <path key={target.data.id} d={`M ${startX} ${startY} V ${railY} H ${endX} V ${endY}`} fill="none" stroke={COLORS.line} strokeWidth="2" />;
    }

    // Połączenia dla Komandorii prowadzących do Preceptorii (T4 -> T5)
    const midY = startY + (endY - startY) * 0.45;
    return (
      <path
        key={`${source.data.id}-${target.data.id}`}
        d={`M ${startX} ${startY} V ${midY} H ${endX} V ${endY}`}
        fill="none"
        stroke={COLORS.line}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    );
  };

  return (
    <div className="pt-20">
      {/* Hero Section z czerwonym tłem */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-templar-burgundy to-templar-red"></div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            WIELKI PRZEORAT POLSKI OECTH
          </h1>
          <p className="text-xl md:text-2xl text-white/90">
            STRUKTURA TERYTORIALNA
          </p>
        </div>
      </section>

      {/* Organizational Chart */}
      <div className="w-full bg-white flex flex-col items-center min-h-screen overflow-hidden py-12" ref={containerRef}>
        <div 
          className="relative transition-transform duration-500 origin-top mt-4"
          style={{ 
            width: bounds.width, 
            height: bounds.height,
            transform: `scale(${scale})`,
            marginBottom: `-${(1 - scale) * bounds.height}px`
          }}
        >
          <svg className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <g transform={`translate(${bounds.width / 2 - bounds.offset}, 20)`}>
              {links.map(drawLink)}
            </g>
          </svg>

          <div 
            className="absolute top-0 left-0"
            style={{ transform: `translate(${bounds.width / 2 - bounds.offset}px, 20px)` }}
          >
            {nodes.map((node) => (
              <HeraldicNode
                key={node.data.id}
                name={node.data.name}
                image={node.data.image || '/logo.png'}
                x={node.x}
                y={node.y}
              />
            ))}
          </div>
        </div>

        {/* Stopka łacińska */}
        <footer className="mt-12 pt-6 border-t border-gray-100 text-center px-4">
          <p className="text-gray-400 text-xs tracking-[0.5em] uppercase font-light">
            Ordo Equitum Christi Templique Hierosolymitani
          </p>
        </footer>
      </div>
    </div>
  );
};

export default WielkiPrzeoratStruktura;
