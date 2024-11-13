import React from 'react';
import { Calendar } from 'lucide-react';

export default function Events() {
  return (
    <>
      <section id="celebrations" className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-orange-800">Nos Célébrations</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Calendar className="h-6 w-6 text-orange-500" />
                  <h3 className="text-xl font-semibold ml-2 text-orange-700">Horaires des Célébrations</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Rejoignez-nous chaque dimanche pour nos célébrations hebdomadaires.
                </p>
                <div className="mb-4">
                  <p className="font-semibold text-orange-700">Horaires du dimanche:</p>
                  <p>9h30 - Première célébration</p>
                  <p>11h30 - Deuxième célébration</p>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Calendar className="h-6 w-6 text-orange-500" />
                  <h3 className="text-xl font-semibold ml-2 text-orange-700">Événements Spéciaux</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Découvrez nos événements spéciaux et célébrations particulières.
                </p>
                <div className="mb-6">
                  <p className="font-semibold text-orange-700">Prochains événements:</p>
                  <ul className="list-disc list-inside space-y-2 mt-2">
                    <li>Concert de louange - 15 avril</li>
                    <li>Retraite spirituelle - 22-24 avril</li>
                    <li>Fête communautaire - 1er mai</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="inscriptions" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-orange-800">Inscris-toi pour dimanche prochain</h2>
          <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <p className="text-gray-600 mb-6 text-center">
                Choisissez votre horaire préféré pour la célébration de dimanche prochain
              </p>
              <iframe 
                src="https://www.billetweb.fr/eglise-horizon-celebration-du-17-nov-2024"
                className="weezevent-container"
                frameBorder="0"
                scrolling="auto"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}