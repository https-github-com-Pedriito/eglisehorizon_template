import React from 'react';

export default function Hero() {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2673&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500/70 via-orange-400/50 to-white/30"></div>
      </div>
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Bienvenue à l'Église Horizon
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 drop-shadow">
            Un lieu de paix, de prière et de communion
          </p>
          <a
            href="#inscriptions"
            className="btn-primary text-lg px-8 py-3"
          >
            S'inscrire aux célébrations
          </a>
        </div>
      </div>
    </div>
  );
}