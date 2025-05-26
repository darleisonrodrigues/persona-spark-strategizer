import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  return <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">Minha Persona</span>
            </a>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="/" className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive('/') ? 'text-purple-600 bg-purple-50' : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'}`}>
                Início
              </a>
              <a href="/generator" className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive('/generator') ? 'text-purple-600 bg-purple-50' : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'}`}>
                Gerar Persona
              </a>
              <a href="/about" className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive('/about') ? 'text-purple-600 bg-purple-50' : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'}`}>Sobre</a>
            </div>
          </div>

          <div className="hidden md:block">
            <Button className="bg-gradient-primary hover:opacity-90 transition-opacity" onClick={() => window.location.href = '/generator'}>
              Gerar Persona Grátis
            </Button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-purple-600 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-purple-600 hover:bg-purple-50">
                Início
              </a>
              <a href="/generator" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-purple-600 hover:bg-purple-50">
                Gerar Persona
              </a>
              <a href="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-purple-600 hover:bg-purple-50">
                Sobre
              </a>
              <div className="pt-4">
                <Button className="w-full bg-gradient-primary hover:opacity-90 transition-opacity" onClick={() => window.location.href = '/generator'}>
                  Gerar Persona Grátis
                </Button>
              </div>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;