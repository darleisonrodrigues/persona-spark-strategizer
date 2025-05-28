import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  return <nav className="bg-gradient-glass backdrop-blur-xl border-b border-white/20 sticky top-0 z-50 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold bg-gradient-elegant bg-clip-text animate-gradient-shift bg-[length:200%_200%] text-slate-950">
                Minha Persona
              </span>
            </a>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <a href="/" className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg ${isActive('/') ? 'text-white bg-gradient-noir shadow-lg' : 'text-gray-200 hover:text-white hover:bg-gradient-noir/80 hover:shadow-md'}`}>
                Início
              </a>
              <a href="/generator" className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg ${isActive('/generator') ? 'text-white bg-gradient-noir shadow-lg' : 'text-gray-200 hover:text-white hover:bg-gradient-noir/80 hover:shadow-md'}`}>
                Gerar Persona
              </a>
              <a href="/about" className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg ${isActive('/about') ? 'text-white bg-gradient-noir shadow-lg' : 'text-gray-200 hover:text-white hover:bg-gradient-noir/80 hover:shadow-md'}`}>
                Sobre
              </a>
            </div>
          </div>

          <div className="hidden md:block">
            <Button onClick={() => window.location.href = '/generator'} className="bg-gradient-elegant hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold hover:bg-gradient-noir text-slate-50">
              Gerar Persona Grátis
            </Button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-200 hover:text-white focus:outline-none transition-colors">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && <div className="md:hidden bg-black/90 backdrop-blur-sm rounded-lg mt-2 mb-4 shadow-xl">
            <div className="px-4 pt-4 pb-6 space-y-3">
              <a href="/" className="block px-4 py-3 rounded-lg text-base font-semibold text-gray-200 hover:text-white hover:bg-gradient-noir transition-all hover:scale-105">
                Início
              </a>
              <a href="/generator" className="block px-4 py-3 rounded-lg text-base font-semibold text-gray-200 hover:text-white hover:bg-gradient-noir transition-all hover:scale-105">
                Gerar Persona
              </a>
              <a href="/about" className="block px-4 py-3 rounded-lg text-base font-semibold text-gray-200 hover:text-white hover:bg-gradient-noir transition-all hover:scale-105">
                Sobre
              </a>
              <div className="pt-4">
                <Button className="w-full bg-gradient-elegant hover:scale-105 transition-all duration-300 shadow-lg text-white font-semibold hover:bg-gradient-noir" onClick={() => window.location.href = '/generator'}>
                  Gerar Persona Grátis
                </Button>
              </div>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;