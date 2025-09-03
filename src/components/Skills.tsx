import React from 'react';
import { Code, Database, Globe, Settings, GitBranch, Cloud } from 'lucide-react';
import { skills } from '../data/portfolioData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Skills: React.FC = () => {
  const ref = useScrollAnimation();

  const skillCategories = [
    {
      title: 'Programación',
      icon: <Code className="w-6 h-6" />,
      skills: skills.programming,
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Frontend',
      icon: <Globe className="w-6 h-6" />,
      skills: skills.frontend,
      gradient: 'from-green-500 to-blue-500'
    },
    {
      title: 'Backend',
      icon: <Settings className="w-6 h-6" />,
      skills: skills.backend,
      gradient: 'from-orange-500 to-red-500'
    },
    {
      title: 'Bases de Datos',
      icon: <Database className="w-6 h-6" />,
      skills: skills.databases,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'CMS/ERP',
      icon: <GitBranch className="w-6 h-6" />,
      skills: skills.cms,
      gradient: 'from-teal-500 to-green-500'
    },
    {
      title: 'Herramientas & Cloud',
      icon: <Cloud className="w-6 h-6" />,
      skills: [...skills.tools, ...skills.other],
      gradient: 'from-indigo-500 to-blue-500'
    }
  ];

  return (
    <section
      id="skills"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-dark-800"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Habilidades Técnicas
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Un conjunto diverso de tecnologías y herramientas que domino para crear 
            soluciones web completas y robustas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="group bg-white dark:bg-dark-900 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${category.gradient} p-6 text-white`}>
                <div className="flex items-center gap-3">
                  {category.icon}
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
              </div>

              {/* Skills List */}
              <div className="p-6">
                <div className="grid grid-cols-1 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="group/skill flex items-center justify-between p-3 bg-gray-50 dark:bg-dark-800 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-200 cursor-default"
                    >
                      <span className="text-gray-700 dark:text-gray-300 group-hover/skill:text-primary-700 dark:group-hover/skill:text-primary-300 font-medium transition-colors duration-200">
                        {skill}
                      </span>
                    
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-600 to-accent-500 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Siempre Aprendiendo
            </h3>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              La tecnología evoluciona constantemente. 
              Siempre estoy explorando nuevas herramientas y metodologías para 
              mantenerme a la vanguardia del desarrollo web.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;