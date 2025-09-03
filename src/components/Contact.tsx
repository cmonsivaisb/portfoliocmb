import React from 'react';
import { Mail, MapPin, Phone, Send, Download, Github, Linkedin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact: React.FC = () => {
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
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-dark-900"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Contacto
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            ¿Tienes un proyecto en mente? Me encantaría saber más sobre él. 
            Contáctame directamente y conversemos sobre cómo puedo ayudarte.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Información de Contacto
              </h3>
              <div className="space-y-6">
                {/* Email */}
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="group flex items-center gap-4 p-4 bg-gray-50 dark:bg-dark-800 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="p-3 bg-primary-600 text-white rounded-lg group-hover:bg-primary-700 transition-colors duration-200">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Email
                    </p>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                      {personalInfo.email}
                    </p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-dark-800 rounded-lg">
                  <div className="p-3 bg-accent-600 text-white rounded-lg">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Ubicación
                    </p>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">
                      {personalInfo.location}
                    </p>
                  </div>
                </div>

                {/* Phone - Optional */}
                <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-dark-800 rounded-lg">
                  <div className="p-3 bg-green-600 text-white rounded-lg">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Disponibilidad
                    </p>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">
                      Lunes a Viernes, 9:00 - 18:00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CV Download */}
            <div className="bg-gradient-to-r from-primary-600 to-accent-500 rounded-lg p-6 text-white">
              <h4 className="text-xl font-bold mb-3">
                Descarga mi CV
              </h4>
              <p className="mb-4 opacity-90">
                Obtén una versión completa de mi experiencia profesional y habilidades.
              </p>
              <button
                onClick={handleDownloadCV}
                className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-6 py-3 rounded-lg transition-all duration-300 font-medium transform hover:-translate-y-1"
              >
                <Download className="w-5 h-5" />
                Descargar CV
              </button>
            </div>
          </div>

          {/* Contact Form / Direct Contact */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Contáctame Directamente
              </h3>
              
              {/* Direct Email CTA */}
              <div className="bg-gray-50 dark:bg-dark-800 rounded-lg p-8 text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    ¡Conversemos!
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    La forma más rápida de comenzar es enviarme un email directamente.
                  </p>
                </div>
                
                <a
                  href={`mailto:${personalInfo.email}?subject=Consulta%20sobre%20servicios%20de%20desarrollo&body=Hola%20Carlos,%0D%0A%0D%0ATengo%20interés%20en%20tus%20servicios%20de%20desarrollo.%20Me%20gustaría%20conversar%20sobre:%0D%0A%0D%0A-%20%0D%0A-%20%0D%0A%0D%0ASaludos`}
                  className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg transition-all duration-300 font-medium transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
                >
                  <Mail className="w-5 h-5" />
                  Enviar Email
                </a>
              </div>
              
              {/* Social Links */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Conecta conmigo
                </h4>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/cmonsivaisb/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-100 dark:bg-dark-800 text-gray-600 dark:text-gray-300 hover:bg-gray-800 hover:text-white rounded-lg transition-all duration-300 transform hover:-translate-y-1"
                    aria-label="GitHub"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/carlos-monsivais-041358102/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white rounded-lg transition-all duration-300 transform hover:-translate-y-1"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;