import React from 'react';
import { Code2, Database, BarChart3, LineChart, ShieldCheck, Building2 } from 'lucide-react';

const primaryAPIs = [
  {
    title: 'Esco Bolsa',
    description: 'Integración para back office bursátil con métodos para administrar cuentas, movimientos y consultar tenencias de los comitentes.',
    icon: Building2,
  },
  {
    title: 'Esco Fondos',
    description: 'Integración para back office de fondos con métodos para realizar un ciclo completo de operación de fondos comunes de inversión.',
    icon: Database,
  },
  {
    title: 'MatrizOMS',
    description: 'Plataforma de administración y envío de órdenes a mercados con gestión de riesgo.',
    icon: BarChart3,
  },
];

const matbaRofexAPIs = [
  {
    title: 'API de Trading',
    description: 'Market data histórica y en tiempo real + Ruteo de ofertas al mercado.',
    icon: LineChart,
  },
  {
    title: 'API de BackOffice',
    description: 'Consulta de parámetros disponibles para operar, operaciones, posiciones, cancelaciones, márgenes y garantías.',
    icon: Code2,
  },
  {
    title: 'API de Riesgo',
    description: 'Consulta e impacto en tiempo real de posiciones, saldos monetarios y garantías integradas.',
    icon: ShieldCheck,
  },
];

export default function APISection() {
  return (
    <div>
      <h2 className="text-4xl font-bold text-center mb-16">
        Explora Nuestras <span className="gradient-text">APIs</span>
      </h2>

      <div className="space-y-16">
        {/* Primary APIs */}
        <div>
          <h3 className="text-2xl font-semibold mb-8">APIs de Productos Primary</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {primaryAPIs.map((api) => (
              <div key={api.title} className="api-card">
                <api.icon className="w-8 h-8 text-blue-400 mb-4" />
                <h4 className="text-xl font-semibold mb-2">{api.title}</h4>
                <p className="text-gray-400">{api.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Matba Rofex APIs */}
        <div>
          <h3 className="text-2xl font-semibold mb-8">APIs de Matba Rofex</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {matbaRofexAPIs.map((api) => (
              <div key={api.title} className="api-card">
                <api.icon className="w-8 h-8 text-purple-400 mb-4" />
                <h4 className="text-xl font-semibold mb-2">{api.title}</h4>
                <p className="text-gray-400">{api.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}