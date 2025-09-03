// helpers para rutas de assets en GitHub Pages
const asset = (p: string) => new URL(`../${p}`, import.meta.url).href;
export const personalInfo = {
  name: 'Carlos Iván Monsiváis Bravo',
  title: 'FullStack Developer',
  experience: '+6 años de experiencia',
  email: 'monsivaiscarlos545@gmail.com',
  location: 'Saltillo, Coahuila, México',
  bio: 'FullStack Developer especializado en desarrollo web, ecommerce, ERP y sistemas de salud. Experto en crear soluciones tecnológicas que impulsan el crecimiento empresarial.',
  profileImage: asset('images/carlos-profile.jpg'),
  cvPath: asset('assets/cv-carlos-monsivais.pdf')
};

export const experience = [
  {
    id: 1,
    company: 'GRUPO PROMASS',
    position: 'Fullstack Developer',
    period: 'Oct 2023 – Jun 2025',
    description: 'Script de actualización automática de bases de datos Go. Gestión de tickets de equipo en Zendesk. Desarrollo de EHR/EMR en PHP.',
    technologies: ['Go', 'PHP', 'Zendesk', 'MySQL', 'JavaScript'],
    projects: ['saludalamano.com.mx/servicioshb/', 'asistenciasconcredito.com.mx']
  },
  {
    id: 2,
    company: 'NTTDATA',
    position: 'Magento Developer',
    period: 'Nov 2022 – Jul 2023',
    description: 'Desarrollo de tienda personalizada en Magento. Diseño de PSD a constructor HTML.',
    technologies: ['Magento', 'PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
    projects: ['telefonica.com.pe']
  },
  {
    id: 3,
    company: 'DGK',
    position: 'FullStack Developer',
    period: 'May 2021 – May 2022',
    description: 'Desarrollo de plugin personalizado de WordPress. Diseño de PSD a constructor de WordPress.',
    technologies: ['WordPress', 'PHP', 'JavaScript', 'MySQL', 'HTML', 'CSS'],
    projects: []
  },
  {
    id: 4,
    company: 'SCORE Expertos en Deportes',
    position: 'FullStack/Ecommerce Developer',
    period: 'Jul 2020 – Ene 2021',
    description: 'Migración de conectores de Magento y comercio electrónico de terceros a Odoo. Configuración de ramas Odoo.sh.',
    technologies: ['Odoo', 'Python', 'Magento', 'JavaScript', 'XML'],
    projects: ['score.com.mx', 'wodpro.com.mx']
  },
  {
    id: 5,
    company: 'Sititec Digital Interactive',
    position: 'FullStack Developer',
    period: 'Mar 2018 – May 2020',
    description: 'Diseño de Vistas y Controladores para aplicaciones web con AngularJS. Creación de API REST con PHP y NodeJS.',
    technologies: ['AngularJS', 'PHP', 'NodeJS', 'MySQL', 'AWS', 'JavaScript'],
    projects: ['charristics.com', 'promocionalesapi.com', 'tucsa.com.mx']
  }
];

export const projects = [
  {
    id: 1,
    title: 'EMWA',
    description: 'Catálogo en línea con navegación intuitiva y búsqueda de productos optimizada para la experiencia del usuario.',
    image: asset('images/emwa-project.png'),
    url: 'https://emwa.com.mx',
    technologies: ['WordPress', 'PHP', 'JavaScript', 'CSS'],
    category: 'Catálogo Web',
    features: ['Catálogo dinámico', 'Optimización SEO', 'Navegación intuitiva']
  },
  {
    id: 2,
    title: 'DeseGo',
    description: 'Ecommerce de equipo médico con carrito integrado y pasarela de pagos segura para transacciones confiables.',
    image: asset('images/desego-project.png'),
    url: 'https://desego.com',
    technologies: ['WooCommerce', 'PHP', 'JavaScript', 'Stripe'],
    category: 'Ecommerce',
    features: ['Carrito de compras', 'Pasarela de pagos', 'Catálogo médico']
  },
  {
    id: 3,
    title: 'Papelería Fenix',
    description: 'Sitio de papelería a domicilio con formulario de pedidos ágil y catálogo sencillo pero funcional.',
    image: asset('images/papeleria-project.png'),
    url: 'https://papeleriaselfenix.com',
    technologies: ['WordPress', 'Contact Form 7', 'PHP', 'JavaScript'],
    category: 'Sitio Corporativo',
    features: ['Formulario de pedidos', 'Catálogo sencillo', 'Entregas a domicilio']
  },
  {
    id: 4,
    title: 'Tucsa',
    description: 'Página corporativa de transportes con diseño adaptable y comunicación clara de servicios empresariales.',
    image: asset('images/tucsa-project.png'),
    url: 'https://tucsamx.com',
    technologies: ['WordPress', 'PHP', 'JavaScript', 'Responsive Design'],
    category: 'Sitio Corporativo',
    features: ['Diseño responsivo', 'Secciones de servicios', 'Comunicación clara']
  },
  {
    id: 5,
    title: 'Score Expertos en Deportes',
    description: 'Ecommerce de artículos deportivos con experiencia de compra moderna y sección de ofertas destacadas.',
    image: asset('images/score-project.png'),
    url: 'https://score.com.mx',
    technologies: ['Odoo', 'Python', 'JavaScript', 'XML'],
    category: 'Ecommerce',
    features: ['Ecommerce completo', 'Sección de ofertas', 'Diseño moderno']
  }
];

export const skills = {
  programming: ['Java', 'C#', 'Python', 'PHP', 'JavaScript'],
  frontend: ['HTML', 'CSS (SASS)', 'AngularJS', 'React', 'Responsive Design'],
  backend: ['PHP', 'NodeJS', 'API REST', 'Python', 'Go'],
  databases: ['SQL', 'MySQL', 'PostgreSQL'],
  cms: ['WordPress', 'Magento', 'Odoo'],
  tools: ['GitHub', 'GitKraken', 'AWS', 'GoDaddy', 'Zendesk'],
  other: ['SEO', 'Kanban', 'Agile', 'Microsoft Office']
};

export const education = [
  {
    institution: 'Universidad Autónoma de Coahuila',
    degree: 'Licenciatura en Ingeniería en Sistemas Computacionales',
    period: '2013-2017',
    location: 'Saltillo, Coahuila'
  },
  {
    institution: 'C.B.T.A #21',
    degree: 'Técnico en Computación',
    period: '2010-2013',
    location: 'Parras de la Fuente, Coahuila'
  }
];

export const certifications = [
  {
    name: 'Microsoft MTA 361 Software Development Fundamentals',
    id: '12147360',
    issuer: 'Microsoft'
  }
];
