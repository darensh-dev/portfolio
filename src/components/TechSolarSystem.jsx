import { useState } from 'react';
import { 
  Code, 
  Server, 
  Cloud, 
  Database, 
  Settings, 
  Palette,
  ChevronRight,
  X
} from 'lucide-react';
import HoloCard from '@/components/HoloCard';

const TechSolarSystem = () => {
  const [activeSystem, setActiveSystem] = useState(null);

  const systems = {
    frontend: {
      title: 'Sistema Frontend',
      color: 'from-blue-400 to-cyan-500',
      icon: <Code className="w-8 h-8" />,
      description: 'Interfaces de usuario y experiencias interactivas',
      planets: [
        { name: 'React', icon: '⚛️', distance: '160px', angle: '0deg', color: '#61DAFB' },
        { name: 'Vue.js', icon: '🟢', distance: '160px', angle: '60deg', color: '#4FC08D' },
        { name: 'Angular', icon: '🔺', distance: '160px', angle: '120deg', color: '#DD0031' },
        { name: 'TypeScript', icon: '📘', distance: '200px', angle: '30deg', color: '#3178C6' },
        { name: 'Tailwind', icon: '🎨', distance: '200px', angle: '90deg', color: '#06B6D4' },
        { name: 'React Native', icon: '📱', distance: '200px', angle: '150deg', color: '#61DAFB' },
        { name: 'PWA', icon: '⚡', distance: '240px', angle: '0deg', color: '#5A0FC8' },
        { name: 'GraphQL', icon: '🔗', distance: '240px', angle: '180deg', color: '#E10098' }
      ]
    },
    backend: {
      title: 'Sistema Backend',
      color: 'from-green-400 to-emerald-500',
      icon: <Server className="w-8 h-8" />,
      description: 'Lógica de negocio y APIs robustas',
      planets: [
        { name: 'Python', icon: '🐍', distance: '160px', angle: '0deg', color: '#3776AB' },
        { name: 'Django', icon: '🎸', distance: '160px', angle: '72deg', color: '#092E20' },
        { name: 'FastAPI', icon: '⚡', distance: '160px', angle: '144deg', color: '#009688' },
        { name: 'Flask', icon: '🌶️', distance: '200px', angle: '36deg', color: '#000000' },
        { name: 'Node.js', icon: '🟢', distance: '200px', angle: '108deg', color: '#339933' },
        { name: 'GraphQL', icon: '🔗', distance: '200px', angle: '180deg', color: '#E10098' },
        { name: 'Microservicios', icon: '🔗', distance: '240px', angle: '0deg', color: '#FF6B6B' },
        { name: 'API Rest', icon: '🔄', distance: '240px', angle: '120deg', color: '#4ECDC4' },
        { name: 'OpenAI API', icon: '🤖', distance: '240px', angle: '240deg', color: '#10A37F' }
      ]
    },
    devops: {
      title: 'Nebula DevOps',
      color: 'from-purple-400 to-violet-500',
      icon: <Cloud className="w-8 h-8" />,
      description: 'Infraestructura y despliegue automatizado',
      planets: [
        { name: 'Docker', icon: '🐳', distance: '160px', angle: '0deg', color: '#2496ED' },
        { name: 'AWS', icon: '☁️', distance: '160px', angle: '90deg', color: '#FF9900' },
        { name: 'GCP', icon: '☁️', distance: '160px', angle: '180deg', color: '#4285F4' },
        { name: 'Azure', icon: '☁️', distance: '160px', angle: '270deg', color: '#0078D4' },
        { name: 'Terraform', icon: '🏗️', distance: '200px', angle: '45deg', color: '#623CE4' },
        { name: 'CI/CD', icon: '🔄', distance: '200px', angle: '135deg', color: '#2088FF' },
        { name: 'Kubernetes', icon: '⚙️', distance: '240px', angle: '0deg', color: '#326CE5' }
      ]
    },
    database: {
      title: 'Centro de Datos',
      color: 'from-amber-400 to-orange-500',
      icon: <Database className="w-8 h-8" />,
      description: 'Almacenamiento y gestión de información',
      planets: [
        { name: 'PostgreSQL', icon: '🐘', distance: '160px', angle: '0deg', color: '#336791' },
        { name: 'MySQL', icon: '🗄️', distance: '160px', angle: '90deg', color: '#4479A1' },
        { name: 'MongoDB', icon: '🍃', distance: '160px', angle: '180deg', color: '#47A248' },
        { name: 'Redis', icon: '🔴', distance: '200px', angle: '60deg', color: '#DC382D' },
        { name: 'DynamoDB', icon: '⚡', distance: '200px', angle: '120deg', color: '#FF9900' },
        { name: 'OpenSearch', icon: '🔍', distance: '240px', angle: '0deg', color: '#005EB8' }
      ]
    }
  };

  const closeSystem = () => setActiveSystem(null);

  if (activeSystem) {
    const system = systems[activeSystem];
    return (
      <HoloCard className="p-8 relative">
        <button 
          onClick={closeSystem}
          className="absolute top-4 right-4 p-2 rounded-full bg-red-500/20 hover:bg-red-500/40 transition-all z-10"
        >
          <X className="w-5 h-5 text-red-400" />
        </button>
        
        <div className="text-center mb-8">
          <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r ${system.color} bg-opacity-20 border border-gray-600`}>
            {system.icon}
            <h3 className="text-2xl font-display font-bold text-white">
              {system.title}
            </h3>
          </div>
          <p className="text-gray-300 mt-2">{system.description}</p>
        </div>
        
        {/* Sistema Solar Interactivo */}
        <div className="relative min-h-[500px] flex items-center justify-center overflow-hidden">
          {/* Sol Central */}
          <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${system.color} flex items-center justify-center shadow-2xl animate-pulse z-10`}>
            <div className="text-center text-white">
              {system.icon}
              <div className="text-xs font-bold mt-1">Core</div>
            </div>
          </div>

          {/* Planetas Orbitando */}
          {system.planets.map((planet, index) => (
            <div
              key={planet.name}
              className="absolute w-16 h-16 rounded-full flex flex-col items-center justify-center text-white shadow-lg hover:scale-110 transition-transform cursor-pointer border-2 border-white/20 backdrop-blur-sm"
              style={{
                background: `linear-gradient(135deg, ${planet.color}88, ${planet.color}CC)`,
                transform: `rotate(${planet.angle}) translate(${planet.distance}) rotate(-${planet.angle})`,
                animation: `orbit${index} ${15 + index * 2}s linear infinite`
              }}
            >
              <span className="text-lg">{planet.icon}</span>
              <span className="text-[10px] font-bold text-center leading-tight mt-1">
                {planet.name}
              </span>
            </div>
          ))}

          {/* Órbitas visibles */}
          {['160px', '200px', '240px'].map((radius, i) => (
            <div
              key={radius}
              className="absolute border border-gray-700/30 rounded-full"
              style={{
                width: `calc(${radius} * 2)`,
                height: `calc(${radius} * 2)`,
                opacity: 0.3
              }}
            />
          ))}
        </div>

        {/* Animaciones CSS */}
        <style jsx>{`
          ${system.planets.map((_, index) => `
            @keyframes orbit${index} {
              from { transform: rotate(${system.planets[index].angle}) translate(${system.planets[index].distance}) rotate(-${system.planets[index].angle}); }
              to { transform: rotate(calc(${system.planets[index].angle} + 360deg)) translate(${system.planets[index].distance}) rotate(calc(-${system.planets[index].angle} - 360deg)); }
            }
          `).join('')}
        `}</style>
      </HoloCard>
    );
  }

  // Vista de Sistemas Principales
  return (
    <HoloCard className="p-8">
      <h3 className="text-2xl font-display font-bold mb-8 text-center" style={{ color: 'var(--text-primary)' }}>
        Sistemas Tecnológicos Galácticos
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(systems).map(([key, system]) => (
          <div
            key={key}
            onClick={() => setActiveSystem(key)}
            className={`group p-6 rounded-xl bg-gradient-to-br ${system.color} bg-opacity-20 border border-gray-600 hover:border-gray-400 transition-all cursor-pointer transform hover:scale-105 hover:shadow-2xl`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                {/* <div className={`p-3 rounded-full bg-gradient-to-br ${system.color} shadow-lg`}>
                  {system.icon}
                </div> */}
                <div>
                  <h4 className="text-xl font-bold text-white">{system.title}</h4>
                  {/* <p className="text-gray-300 text-sm">{system.description}</p> */}
                </div>
              </div>
              <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
            </div>
            
            <div className="flex flex-wrap gap-2 mt-4">
              {system.planets.slice(0, 6).map((planet) => (
                <span 
                  key={planet.name}
                  className="inline-flex items-center gap-1 px-2 py-1 bg-black/30 rounded-full text-xs text-gray-200"
                >
                  <span>{planet.icon}</span>
                  {planet.name}
                </span>
              ))}
              {system.planets.length > 6 && (
                <span className="px-2 py-1 bg-black/30 rounded-full text-xs text-gray-400">
                  +{system.planets.length - 6} más
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Soft Skills como Satélites de Comunicación */}
      <div className="mt-8 pt-8 border-t border-gray-700">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Settings className="w-6 h-6 text-blue-400" />
          <h4 className="text-xl font-bold text-center" style={{ color: 'var(--text-accent)' }}>
            Protocolos de Comando Galáctico
          </h4>
          <Settings className="w-6 h-6 text-blue-400" />
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            '🎯 Liderazgo Técnico', 
            '🔧 Resolución de Problemas', 
            '👥 Trabajo en Equipo', 
            '📡 Comunicación', 
            '⚡ Gestión Ágil', 
            '🌟 Adaptabilidad'
          ].map((skill) => (
            <div key={skill} className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 hover:border-blue-400/60 transition-all hover:scale-105">
              <span className="text-sm font-medium text-blue-100">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </HoloCard>
  );
};

export default TechSolarSystem;