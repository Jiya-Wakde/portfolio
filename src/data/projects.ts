import { Project } from '../types';

// Sleek generative SVG data URIs for project covers
const createSvgCover = (title: string, tag: string, color: string = '#B7FF00') => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500">
    <rect width="800" height="500" fill="#0E0E0E"/>
    <path d="M0 0h800v500H0z" fill="none" stroke="#1F1F1F" stroke-width="2"/>
    <g opacity="0.15">
      <line x1="0" y1="100" x2="800" y2="100" stroke="#FFFFFF" stroke-dasharray="4,4"/>
      <line x1="0" y1="250" x2="800" y2="250" stroke="#FFFFFF" stroke-dasharray="4,4"/>
      <line x1="0" y1="400" x2="800" y2="400" stroke="#FFFFFF" stroke-dasharray="4,4"/>
      <line x1="200" y1="0" x2="200" y2="500" stroke="#FFFFFF" stroke-dasharray="4,4"/>
      <line x1="400" y1="0" x2="400" y2="500" stroke="#FFFFFF" stroke-dasharray="4,4"/>
      <line x1="600" y1="0" x2="600" y2="500" stroke="#FFFFFF" stroke-dasharray="4,4"/>
    </g>
    <circle cx="650" cy="120" r="180" fill="${color}" opacity="0.06"/>
    <rect x="50" y="50" width="140" height="32" rx="4" fill="#181818" stroke="#333333"/>
    <text x="70" y="71" font-family="monospace" font-size="12" fill="${color}" font-weight="bold">${tag}</text>
    
    <text x="50" y="270" font-family="sans-serif" font-size="42" font-weight="800" fill="#F2F2EE" letter-spacing="-1">${title}</text>
    
    <rect x="50" y="420" width="700" height="1" fill="#262626"/>
    <text x="50" y="450" font-family="monospace" font-size="13" fill="#666666">// ENGINEER IN PROGRESS — JIYA WAKDE ARCHIVE</text>
    <text x="720" y="450" font-family="monospace" font-size="13" fill="${color}" text-anchor="end">SYS.VER.26</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

export const PROJECTS: Project[] = [
  {
    id: 'voice-ppt-controller',
    number: '01',
    title: 'VOICE-BASED PPT CONTROLLER',
    tagline: 'Control presentations using voice commands.',
    description:
      'A voice-controlled presentation tool designed to make navigating slides more natural and hands-free.',
    longDescription:
      'A Python-based project exploring voice interaction and automation for presentation control.',
    category: 'PYTHON',
    technologies: ['Python'],
    image: createSvgCover('VOICE-BASED PPT CONTROLLER', 'PYTHON', '#B7FF00'),
    github: '',
    liveDemo: '',
    status: 'COMPLETED',
    featured: true
  },

  {
    id: 'water-quality-analyzer',
    number: '02',
    title: 'WATER QUALITY ANALYZER',
    tagline: 'ESP32-based water quality monitoring system.',
    description:
      'A sensor-based project using an ESP32 to measure water quality parameters through TDS and turbidity sensing.',
    longDescription:
      'An ESP32 hardware project exploring sensor interfacing and real-world environmental monitoring.',
    category: 'EMBEDDED',
    technologies: ['ESP32', 'TDS Sensor', 'Turbidity Sensor'],
    image: createSvgCover('WATER QUALITY ANALYZER', 'EMBEDDED', '#00F0FF'),
    github: '',
    liveDemo: '',
    status: 'COMPLETED',
    featured: true
  },

  {
    id: 'orrery-web-app',
    number: '03',
    title: 'ORRERY WEB APP',
    tagline: 'An interactive web experience exploring the solar system.',
    description:
      'An interactive web project built around visualizing and exploring planetary systems.',
    longDescription:
      'A web-based project focused on creating an engaging interactive experience around astronomy and planetary systems.',
    category: 'WEB',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    image: createSvgCover('ORRERY WEB APP', 'WEB', '#ff0066ff'),
    github: 'https://github.com/Jiya-Wakde/Orrery-WebApp',
    liveDemo: '',
    status: 'COMPLETED',
    featured: true
  },

  {
    id: 'smart-exhaust',
    number: '04',
    title: 'SMART EXHAUST',
    tagline: 'An automated exhaust system built around sensor input.',
    description:
      'A hardware project exploring automated control using sensors and a microcontroller.',
    longDescription:
      'A practical hardware project focused on sensor-based automation.',
    category: 'EMBEDDED',
    technologies: ['ESP32', 'Sensors'],
    image: '',
    github: '',
    liveDemo: '',
    status: 'COMPLETED',
    featured: false
  },

  {
    id: 'college-club-registration',
    number: '05',
    title: 'COLLEGE CLUB REGISTRATION',
    tagline: 'A web platform for college club registrations.',
    description:
      'A college-focused registration website designed to simplify student club registrations.',
    longDescription:
      'A web development project focused on creating a clean and accessible registration experience for college clubs.',
    category: 'WEB',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    image: '',
    github: 'https://github.com/Jiya-Wakde/MegaMorph',
    liveDemo: '',
    status: 'COMPLETED',
    featured: false
  },

  {
    id: 'todo-list',
    number: '06',
    title: 'TO-DO LIST',
    tagline: 'A simple task management web application.',
    description:
      'A lightweight project for creating, organizing and tracking everyday tasks.',
    longDescription:
      'A small web development project focused on building a clean and practical task management experience.',
    category: 'WEB',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    image: '',
    github: 'https://github.com/Jiya-Wakde/ToDo-List',
    liveDemo: '',
    status: 'COMPLETED',
    featured: false
  },
  {
    id: 'song-downloader',
    number: '07',
    title: 'SONG DOWNLOADER',
    tagline: 'Automating music downloads through the web.',
    description:
      'A web automation project built to streamline the process of finding and downloading songs.',
    longDescription:
      'A small automation project exploring browser interaction, web workflows and programmatic task automation.',
    category: 'WEB AUTOMATION',
    technologies: ['Python', 'Web Automation'],
    image: '',
    github: '',
    liveDemo: '',
    status: 'COMPLETED',
    featured: false
  },

  {
    id: 'price-tracker',
    number: '08',
    title: 'PRICE TRACKER',
    tagline: 'Tracking product prices through web scraping.',
    description:
      'A web scraping project that collects product pricing information and tracks changes over time.',
    longDescription:
      'A practical automation project exploring web scraping, data extraction and automated price monitoring.',
    category: 'WEB SCRAPING',
    technologies: ['Python', 'Web Scraping'],
    image: '',
    github: '',
    liveDemo: '',
    status: 'COMPLETED',
    featured: false
  },
];