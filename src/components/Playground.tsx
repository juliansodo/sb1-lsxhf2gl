import React, { useState } from 'react';
import { GithubIcon } from 'lucide-react';

export default function Playground() {
  const [activeTab, setActiveTab] = useState('instruments');

  return (
    <section className="py-24 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          Zona de <span className="gradient-text">Pruebas</span>
        </h2>

        {/* Authentication Section */}
        <div className="mb-12 text-center">
          <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 mx-auto transition-colors">
            <GithubIcon className="w-5 h-5" />
            Iniciar sesión con reMarkets
          </button>
        </div>

        {/* Split View */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* API Testing Panel */}
          <div className="bg-gray-800/50 rounded-lg p-6">
            <div className="flex space-x-2 mb-6">
              <button
                className={`playground-tab ${
                  activeTab === 'instruments' ? 'active' : ''
                }`}
                onClick={() => setActiveTab('instruments')}
              >
                Instrumentos
              </button>
              <button
                className={`playground-tab ${
                  activeTab === 'marketdata' ? 'active' : ''
                }`}
                onClick={() => setActiveTab('marketdata')}
              >
                Market Data
              </button>
              <button
                className={`playground-tab ${
                  activeTab === 'orders' ? 'active' : ''
                }`}
                onClick={() => setActiveTab('orders')}
              >
                Órdenes
              </button>
            </div>

            <div className="code-window">
              {activeTab === 'instruments' && (
                <pre>{`GET /api/v1/instruments
Authorization: Bearer {token}

{
  "instruments": [
    {
      "symbol": "DODic23",
      "marketId": "ROFX",
      "type": "Future"
    }
  ]
}`}</pre>
              )}
              {/* Add other tab content similarly */}
            </div>
          </div>

          {/* reMarkets iframe */}
          <div className="bg-gray-800/50 rounded-lg overflow-hidden h-[400px]">
            {/* <iframe
              src="https://remarkets.matriz.com.ar/"
              className="w-full h-full border-0"
              title="Plataforma reMarkets"
            /> */}
            <img src="https://i.imgur.com/hBrtOce.png" alt="" height="auto" />
          </div>
        </div>
      </div>
    </section>
  );
}
