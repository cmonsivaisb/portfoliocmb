import React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import { education, certifications } from '../data/portfolioData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About: React.FC = () => {
  const ref = useScrollAnimation();

  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-dark-900"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Sobre Mí
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Personal Info */}
          <div className="space-y-8">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Ingeniero en Sistemas Computacionales
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Soy un desarrollador FullStack especializado en crear soluciones tecnológicas 
                que transformen ideas en productos digitales exitosos. Mi experiencia abarca 
                desde el desarrollo de sistemas ERP hasta aplicaciones de salud complejas.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                He trabajado con equipos multidisciplinarios en empresas de diferentes 
                tamaños, siempre enfocándome en la calidad del código, la experiencia 
                del usuario y la innovación tecnológica.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Mi objetivo es seguir creciendo como desarrollador mientras contribuyo 
                al éxito de proyectos que generen impacto positivo en los usuarios y 
                las organizaciones.
              </p>
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="space-y-8">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <GraduationCap className="w-7 h-7 text-primary-600 dark:text-primary-400" />
                Educación
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 dark:bg-dark-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {edu.degree}
                    </h4>
                    <p className="text-primary-600 dark:text-primary-400 font-medium mb-1">
                      {edu.institution}
                    </p>
                    <div className="flex flex-col sm:flex-row sm:justify-between text-sm text-gray-500 dark:text-gray-400">
                      <span>{edu.period}</span>
                      <span>{edu.location}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <Award className="w-7 h-7 text-primary-600 dark:text-primary-400" />
                Certificaciones
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 p-6 rounded-lg border border-primary-200 dark:border-primary-800 hover:shadow-md transition-shadow duration-300"
                  >
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {cert.name}
                    </h4>
                    <p className="text-primary-600 dark:text-primary-400 font-medium mb-1">
                      {cert.issuer}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      ID de Certificación: {cert.id}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;