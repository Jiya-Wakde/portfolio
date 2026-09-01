import { SkillCategory } from '../types';

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'PROGRAMMING',
    description: 'Core languages for software development, system logic, and computational problem solving.',
    skills: [
      { name: 'Python', relatedProjects: ['neural-vision-eda', 'python-sysmonitor', 'ai-code-reviewer-cli', 'eda-cleaner-tool'] },
      { name: 'C', relatedProjects: ['bare-metal-c-scheduler'] },
      { name: 'C++', relatedProjects: ['algo-visualizer-cpp', 'autonomous-rover-v1'] },
      { name: 'JavaScript', relatedProjects: ['e-voting-system', 'campus-event-hub'] },
      { name: 'Dart', relatedProjects: ['campus-event-hub'] }
    ]
  },
  {
    title: 'WEB DEVELOPMENT',
    description: 'Modern frontend and backend technologies for full-stack, responsive web applications.',
    skills: [
      { name: 'HTML & CSS', relatedProjects: ['e-voting-system', 'campus-event-hub'] },
      { name: 'React.js', relatedProjects: ['e-voting-system', 'campus-event-hub', 'esp32-telemetry-hub'] },
      { name: 'Node.js', relatedProjects: ['e-voting-system'] },
      { name: 'Flask', relatedProjects: ['neural-vision-eda'] },
      { name: 'Bootstrap', relatedProjects: ['campus-event-hub'] }
    ]
  },
  {
    title: 'MOBILE DEVELOPMENT',
    description: 'Cross-platform mobile applications with expressive user interfaces.',
    skills: [
      { name: 'Flutter', relatedProjects: ['campus-event-hub'] }
    ]
  },
  {
    title: 'AI & DATA',
    description: 'Data analysis workflows, intelligent model pipelines, and prompt engineering.',
    skills: [
      { name: 'Machine Learning', relatedProjects: ['neural-vision-eda'] },
      { name: 'Data Science', relatedProjects: ['eda-cleaner-tool', 'neural-vision-eda'] },
      { name: 'Generative AI', relatedProjects: ['ai-code-reviewer-cli'] },
      { name: 'Prompt Engineering', relatedProjects: ['ai-code-reviewer-cli'] },
      { name: 'Exploratory Data Analysis', relatedProjects: ['eda-cleaner-tool', 'neural-vision-eda'] }
    ]
  },
  {
    title: 'DATABASES',
    description: 'Structured relational storage and document databases for persistent application state.',
    skills: [
      { name: 'MySQL', relatedProjects: ['e-voting-system', 'campus-event-hub'] },
      { name: 'MongoDB', relatedProjects: ['e-voting-system'] }
    ]
  },
  {
    title: 'CORE CONCEPTS',
    description: 'Theoretical fundamentals anchoring robust software architecture and problem-solving.',
    skills: [
      { name: 'Data Structures & Algorithms', relatedProjects: ['algo-visualizer-cpp'] },
      { name: 'Object-Oriented Programming', relatedProjects: ['autonomous-rover-v1', 'e-voting-system'] },
      { name: 'Database Management Systems (DBMS)', relatedProjects: ['e-voting-system'] }
    ]
  },
  {
    title: 'TOOLS & PLATFORMS',
    description: 'Version control, cloud backends, and API development environments.',
    skills: [
      { name: 'Git & GitHub', relatedProjects: ['e-voting-system', 'algo-visualizer-cpp'] },
      { name: 'Firebase', relatedProjects: ['campus-event-hub'] },
      { name: 'Postman', relatedProjects: ['e-voting-system'] }
    ]
  },
  {
    title: 'HARDWARE & SENSORS',
    description: 'Hands-on microcontroller exploration, sensor interfacing, and breadboard circuitry.',
    skills: [
      { name: 'ESP32 Microcontroller', relatedProjects: ['esp32-telemetry-hub'] },
      { name: 'TDS Sensor', relatedProjects: ['esp32-telemetry-hub'] },
      { name: 'Turbidity Sensor', relatedProjects: ['esp32-telemetry-hub'] },
      { name: 'Sensor Interfacing & Circuits', relatedProjects: ['esp32-telemetry-hub'] }
    ]
  }
];
