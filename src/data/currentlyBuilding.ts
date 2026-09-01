import { CurrentlyBuildingItem } from '../types';

export const CURRENTLY_BUILDING: CurrentlyBuildingItem[] = [
  {
    type: 'SOFTWARE',
    title: 'E-VOTING SYSTEM',
    description:
      'Building a full-stack digital voting platform focused on a clean, secure and reliable voting experience.',
    status: 'ACTIVE DEVELOPMENT',
    tech: ['React.js', 'Flask', 'MySQL']
  },

  {
    type: 'ROBOTICS',
    title: 'MAZE SOLVER ROBOT',
    description:
      'Developing a maze-solving robot with a focus on autonomous navigation, sensor-based decision making and real-world hardware integration.',
    status: 'PROTOTYPING',
    tech: ['ESP32', 'Sensors', 'Embedded Systems']
  },

  {
    type: 'AI / COMPUTER VISION',
    title: 'SIGN LANGUAGE TRANSLATOR',
    description:
      'Exploring a computer vision based system that can recognize sign language gestures and translate them into understandable output.',
    status: 'IN DEVELOPMENT',
    tech: ['Python', 'Computer Vision', 'Machine Learning']
  },

  {
    type: 'WEB APPS',
    title: 'DIGITAL NOTICE BOARD',
    description:
      'Building a digital notice board for college to provide a more dynamic way of displaying announcements and important information.',
    status: 'PROTOTYPING',
    tech: ['Flutter', 'Firebase', 'Dart', 'Gemini AI API']
  }
];