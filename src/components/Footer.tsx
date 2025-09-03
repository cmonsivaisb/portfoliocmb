import React from 'react';
import { personalInfo } from '../data/portfolioData';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-dark-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Logo/Name */}
          <div className="mb-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              Carlos Monsiváis
            </h3>
            <p className="text-gray-400 mt-2">
              FullStack Developer
            </p>
          </div>

          {/* Contact Info */}
          <div className="mb-6">
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-lg"
            >
              {personalInfo.email}
            </a>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">
                © {currentYear} {personalInfo.name}. Todos los derechos reservados.
              </p>
              <p className="text-gray-400 text-sm">
                Desarrollado con ♥️ en React & TypeScript
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;