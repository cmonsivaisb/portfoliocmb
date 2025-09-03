import React from 'react';
import { ArrowDown, Download } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { useSmoothScroll } from '../hooks/useSmoothScroll';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Hero: React.FC = () => {
  const { scrollToSection } = useSmoothScroll();
  const ref = useScrollAnimation();

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = personalInfo.cvPath;
    link.download = 'cv-carlos-monsivais.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="hero"
      ref={ref as React.RefObject<HTMLElement>}
      className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-dark-900 dark:to-dark-800"
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="text-center lg:text-left space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              {personalInfo.name.split(' ').slice(0, 2).join(' ')}
              <br />
              <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text dark:text-white text-gray-900">
                {personalInfo.name.split(' ').slice(-2).join(' ')}
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 font-medium">
              {personalInfo.title}
            </p>
            <p className="text-lg text-primary-600 dark:text-primary-400 font-semibold">
              {personalInfo.experience}
            </p>
          </div>

          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0">
            {personalInfo.bio}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              onClick={handleDownloadCV}
              className="group inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-medium"
            >
              <Download className="w-5 h-5 group-hover:animate-bounce-subtle" />
              Descargar CV
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center gap-2 border-2 border-primary-600 text-primary-600 dark:text-primary-400 dark:border-primary-400 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-400 dark:hover:text-dark-900 px-8 py-3 rounded-lg transition-all duration-300 font-medium"
            >
              Contactar
            </button>
          </div>

          <div className="text-center lg:text-left">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
              {personalInfo.location}
            </p>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200 font-medium"
            >
              {personalInfo.email}
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary-600 to-accent-500 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            <img
              src={personalInfo.profileImage}
              alt={personalInfo.name}
              className="relative w-80 h-80 sm:w-96 sm:h-96 object-cover rounded-full shadow-2xl ring-8 ring-white dark:ring-dark-800 transition-transform duration-300 group-hover:scale-105"
              loading="eager"
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 dark:text-gray-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 animate-bounce-subtle"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="w-6 h-6" />
      </button>
    </section>
  );
};

export default Hero;
