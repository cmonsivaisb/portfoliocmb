import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { experience } from '../data/portfolioData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Experience: React.FC = () => {
  const ref = useScrollAnimation();

  return (
    <section
      id="experience"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-dark-800"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experiencia Profesional
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-500 mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-600 via-accent-500 to-primary-600 hidden sm:block"></div>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={exp.id} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-3 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 bg-primary-600 rounded-full border-4 border-white dark:border-dark-800 shadow-lg hidden sm:block"></div>
                
                {/* Content Card */}
                <div className={`ml-8 sm:ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-1/2 md:pr-8' : 'md:ml-1/2 md:pl-8'} md:w-1/2`}>
                  <div className="bg-white dark:bg-dark-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 mb-2">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-medium">{exp.period}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {exp.position}
                    </h3>
                    
                    <div className="flex items-center gap-2 mb-4">
                      <Briefcase className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                      <p className="text-lg font-semibold text-accent-600 dark:text-accent-400">
                        {exp.company}
                      </p>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Tecnologías utilizadas:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs font-medium rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Projects */}
                    {exp.projects.length > 0 && (
                      <div>
                        <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                          Proyectos destacados:
                        </h4>
                        <div className="space-y-1">
                          {exp.projects.map((project, projectIndex) => (
                            <p key={projectIndex} className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
                              <span className="w-1.5 h-1.5 bg-accent-500 rounded-full flex-shrink-0"></span>
                              {project}
                            </p>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;