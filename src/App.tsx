import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Events from './components/Events';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    // Weezevent Script Integration
    const script = document.createElement('script');
    script.src = 'https://www.weezevent.com/js/widget/min/widget.min.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Events />
        <Contact />
      </main>
      <footer className="gradient-bg text-black py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>© 2024 Église Horizon. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;