import React from 'react';
import { FileText, Github, PlaySquare, BookOpen, Terminal, MonitorPlay, FileCheck, FileCode } from 'lucide-react';

const tools = [
  {
    title: 'Documentación',
    description: 'Accede a nuestra documentación completa en formato PDF',
    icon: FileText,
    link: '#',
  },
  {
    title: 'Postman Collection',
    description: 'Repositorio de Postman y su webinar explicativo',
    icon: Terminal,
    link: '#',
  },
  {
    title: 'Ejemplos de Conectores',
    description: 'Ejemplos de conectores REST/WS en nuestro Github',
    icon: Github,
    link: '#',
  },
  {
    title: 'Buenas Prácticas',
    description: 'Guía de buenas prácticas para el consumo de APIs',
    icon: BookOpen,
    link: '#',
  },
  {
    title: 'APIDoc y Cliente WebSocket',
    description: 'Herramientas para probar las APIs',
    icon: FileCode,
    link: '#',
  },
  {
    title: 'Plataformas de Trading',
    description: 'Matriz, E-trader y Talaris de reMarkets',
    icon: MonitorPlay,
    link: '#',
  },
  {
    title: 'Guías de Implementación',
    description: 'MarketData y MarketData + Order Routing',
    icon: PlaySquare,
    link: '#',
  },
  {
    title: 'Guía de Homologación',
    description: 'Proceso de homologación y buenas prácticas',
    icon: FileCheck,
    link: '#',
  },
];

export default function ToolsSection() {
  return (
    <div>
      <h2 className="text-4xl font-bold text-center mb-16">
        Herramientas de <span className="gradient-text">Integración</span>
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {tools.map((tool) => (
          <a
            key={tool.title}
            href={tool.link}
            className="api-card group hover:scale-105 transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <tool.icon className="w-8 h-8 text-primary-400 mb-4 group-hover:text-primary-300 transition-colors" />
            <h4 className="text-xl font-semibold mb-2">{tool.title}</h4>
            <p className="text-gray-400">{tool.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
}