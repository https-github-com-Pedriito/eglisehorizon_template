import React from 'react';
import { Menu, X, } from 'lucide-react';
import logo from "../assets/logo_horizon.jpg";
export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="bg-white/90 backdrop-blur-sm shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <img src={logo} alt="Église Horizon" className="h-8 w-8 rounded-full" />
            <span className="ml-2 text-xl font-semibold text-orange-600">Église Horizon Senart</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" onClick={scrollToTop} className="nav-link">Accueil</a>
            <a href="#celebrations" className="nav-link">Célébrations</a>
            <a href="#inscriptions" className="nav-link">Inscriptions</a>
            <a href="#celebrations" className="nav-link">Événements</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-orange-500">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#" onClick={scrollToTop} className="block px-3 py-2 nav-link">Accueil</a>
            <a href="#celebrations" className="block px-3 py-2 nav-link">Célébrations</a>
            <a href="#inscriptions" className="block px-3 py-2 nav-link">Inscriptions</a>
            <a href="#celebrations" className="block px-3 py-2 nav-link">Événements</a>
            <a href="#contact" className="block px-3 py-2 nav-link">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}