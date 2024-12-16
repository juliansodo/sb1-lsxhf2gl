import React from 'react';

export default function StatusSection() {
  return (
    <section className="py-24 bg-gray-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8">
          Estado de las <span className="gradient-text">APIs</span>
        </h2>

        <div className="max-w-4xl mx-auto h-[600px] rounded-lg overflow-hidden">
          {/* <iframe
            src="https://uptime.statuscake.com/?TestID=xlRSRsRGR0"
            className="w-full h-full border-0"
            title="Estado de las APIs"
          /> */}
          <img src="https://i.imgur.com/LgNKbjO.png" alt="" />
        </div>
      </div>
    </section>
  );
}
