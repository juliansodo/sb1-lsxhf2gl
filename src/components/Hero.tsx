import React, { useState, useEffect } from 'react';
import { Search, ArrowRight, Loader2, Sparkles } from 'lucide-react';

export default function Hero() {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [suggestion, setSuggestion] = useState<string | null>(null);
  const [optionClicked, setOptionClicked] = useState<string | null>(null);

  useEffect(() => {
    generateSuggestion(optionClicked);
  }, [optionClicked]);
  const generateSuggestion = async (value) => {
    if (!query.trim() || !value) return;

    setIsLoading(true);
    setSuggestion(null);

    // Simulamos una respuesta de IA
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const suggestions = {
      trading:
        'Para desarrollar una aplicación de trading, te recomendamos utilizar nuestra API de Trading que proporciona market data en tiempo real y ruteo de órdenes. Combínala con la API de Riesgo para gestionar posiciones y garantías.',
      backoffice:
        'Para soluciones de back office, nuestra API Esco Bolsa es ideal. Te permite gestionar cuentas, movimientos y consultar tenencias. Si necesitas funcionalidades para FCI, considera también Esco Fondos.',
      riesgo:
        'Para sistemas de gestión de riesgo, utiliza nuestra API de Riesgo que te permite monitorear posiciones y garantías en tiempo real. Complementa con la API de BackOffice para una visión completa.',
    };

    const response = Object.entries(suggestions).reduce(
      (closest, [key, value]) => {
        if (query.toLowerCase().includes(key)) return value;
        return closest;
      },
      'Basado en tu consulta, te sugerimos comenzar con nuestra API de Trading para acceder a market data en tiempo real. Debes definir qué tipo de instrumentos necesitás, y comenzar el proceso de integración. Si tenés dudas podés contactar con el equipo de Soporte. Revisá las herramientas disponibles presionando acá.'
    );

    setSuggestion(response);
    setIsLoading(false);
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden animated-background">
      {/* Animated Particles */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-30">
          <svg className="h-full w-full" id="demo">
            <circle
              cx="25%"
              cy="30%"
              r="3"
              className="animate-pulse-slow fill-primary-400"
            />
            <circle
              cx="75%"
              cy="70%"
              r="3"
              className="animate-pulse-slow fill-primary-400"
            />
            <circle
              cx="85%"
              cy="30%"
              r="3"
              className="animate-pulse-slow fill-primary-400"
            />
            <circle
              cx="15%"
              cy="70%"
              r="3"
              className="animate-pulse-slow fill-primary-400"
            />
            <line
              x1="25%"
              y1="30%"
              x2="75%"
              y2="70%"
              stroke="currentColor"
              strokeWidth="1"
              className="opacity-20"
            />
            <line
              x1="85%"
              y1="30%"
              x2="15%"
              y2="70%"
              stroke="currentColor"
              strokeWidth="1"
              className="opacity-20"
            />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="animate-float">
          <h1 className="text-5xl md:text-7xl font-bold text-center mb-6">
            Impulsá el
            <span className="gradient-text block">Mercado de Capitales</span>a
            través de nuestra tecnología
          </h1>

          <p className="text-xl text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Accedé a potentes APIs para integrarte con las soluciones de trading
            y back-office de Primary
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="¿Qué te gustaría desarrollar?"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full py-4 pl-12 pr-4 rounded-full bg-primary-900/50 border border-primary-800 focus:border-primary-400 focus:ring-1 focus:ring-primary-400 outline-none transition-all"
              onKeyDown={(e) => {
                if (e.key === 'Enter') generateSuggestion();
              }}
            />
            <button
              onClick={generateSuggestion}
              disabled={isLoading}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-full  flex items-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Analizando
                </>
              ) : (
                <>
                  Inspirarme
                  <Sparkles size={16} />
                </>
              )}
            </button>
          </div>
          <div className="text-center">
            <small>
              Las respuestas están basadas en inteligencia artificial. Puede
              contener errores.{' '}
            </small>
            <div>
              <h5 className=" my-2">─ o ─</h5>
              <div className="flex flex-row gap-2">
                <div
                  className="bg-primary-900/90 border border-primary-800 rounded-full backdrop-blur-sm cursor-pointer hover:bg-primary-800 text-xs p-2"
                  onClick={async () => {
                    await setQuery(
                      'Quiero crear un panel de precios en tiempo real'
                    );
                    setOptionClicked(
                      'Quiero crear un panel de precios en tiempo real'
                    );
                  }}
                >
                  Quiero crear un panel de precios en tiempo real
                </div>
                <div
                  className="bg-primary-900/90 border border-primary-800 rounded-full backdrop-blur-sm cursor-pointer hover:bg-primary-800  p-2 text-xs "
                  onClick={async () => {
                    await setQuery(
                      'Quiero consultar los boletos en esco bolsa a traves de api'
                    );
                    setOptionClicked(
                      'Quiero consultar los boletos en esco bolsa a traves de api'
                    );
                  }}
                >
                  Quiero consultar los boletos en esco bolsa a traves de api
                </div>
                <div
                  className="bg-primary-900/90 border border-primary-800 rounded-full backdrop-blur-sm cursor-pointer hover:bg-primary-800 p-2 text-xs  "
                  onClick={async () => {
                    await setQuery('Mandar órdenes por FIX');
                    setOptionClicked('Mandar órdenes por FIX');
                  }}
                >
                  Mandar órdenes por FIX
                </div>
              </div>
            </div>
          </div>
          {/* Suggestion Animation */}
          <div
            className={`mt-8 transition-all duration-500 ${
              suggestion
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 -translate-y-4'
            }`}
          >
            {suggestion && (
              <div className="bg-primary-900/90 border border-primary-800 rounded-lg p-6 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-3 text-primary-400">
                  Sugerencia de APIs
                </h3>
                <p className="text-gray-300 leading-relaxed">{suggestion}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
