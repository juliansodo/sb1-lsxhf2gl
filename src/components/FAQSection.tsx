import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: '¿Cómo puedo comenzar a utilizar las APIs?',
    answer: 'Para comenzar, necesitas registrarte en reMarkets y obtener tus credenciales de acceso. Luego podrás acceder a nuestra documentación y ejemplos de código.',
  },
  {
    question: '¿Qué ambiente debo usar para desarrollo?',
    answer: 'Recomendamos comenzar con el ambiente de reMarkets (simulación) para desarrollo y pruebas antes de pasar a producción.',
  },
  {
    question: '¿Las APIs tienen costo?',
    answer: 'El acceso a las APIs está incluido en tu membresía de Primary. Contacta a nuestro equipo comercial para más detalles.',
  },
  {
    question: '¿Qué soporte técnico ofrecen?',
    answer: 'Ofrecemos soporte técnico por email y a través de nuestro portal de desarrolladores. También realizamos webinars periódicos.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div>
      <h2 className="text-4xl font-bold text-center mb-16">
        Preguntas <span className="gradient-text">Frecuentes</span>
      </h2>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-gray-800/50 rounded-lg overflow-hidden"
          >
            <button
              className="w-full px-6 py-4 flex items-center justify-between text-left"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="font-semibold">{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-primary-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-primary-400" />
              )}
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4 text-gray-400">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}