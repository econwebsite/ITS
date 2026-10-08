import TrafficSpeed from '../assets/homepage/3-traffic-speed-enforcement-cameras.jpg';
import AutomatedToll from '../assets/homepage/automated-toll-systems-alpr-cameras.jpg';
import AnprDemo from '../assets/homepage/anpr-alpr-demo-using-full-hd-global-shutter-usb-camera.jpg';
import EdgeaiDemo from '../assets/homepage/edge-ai-powered-alpr-demo.jpg';
import DarsiPro from '../assets/homepage/darsi-pro-action.jpg';

export const videoHubData = [
  {
    title: '3 Traffic Speed Enforcement Cameras You NEED to Know',
    description: 'An overview of major speed enforcement camera types and where each works best.',
    hashtags: ['SmartCity', 'SurveillanceCamera'],
    embedLink: 'https://www.youtube.com/embed/546_L0cjXEo',
    watchLink: 'https://www.youtube.com/watch?v=546_L0cjXEo',
    image: TrafficSpeed,
    keywords: ['traffic speed', 'enforcement cameras', 'smart city', 'speed camera']
  },
  {
    title: 'How Automated Toll Systems Use ALPR Cameras for Multi-Lane Free-Flow Accuracy',
    description: 'See how ALPR enables accurate automated tolling in multi-lane free-flow systems.',
    hashtags: ['ALPR', 'MLFFTolling', 'AutomatedTolling'],
    embedLink: 'https://www.youtube.com/embed/y9gpdLjDag8',
    watchLink: 'https://www.youtube.com/watch?v=y9gpdLjDag8',
    image: AutomatedToll,
    keywords: ['alpr', 'automated tolling', 'mlff', 'multi-lane toll']
  },
  {
    title: 'ANPR / ALPR demo using Full HD Global Shutter USB Camera',
    description: 'A practical ANPR/ALPR demo showing plate capture with a global shutter camera.',
    hashtags: ['smartparking', 'anpr', 'alpr'],
    embedLink: 'https://www.youtube.com/embed/nCaN9LarqSA',
    watchLink: 'https://www.youtube.com/watch?v=nCaN9LarqSA',
    image: AnprDemo,
    keywords: ['anpr demo', 'alpr demo', 'global shutter', 'license plate recognition']
  },
  {
    title: 'Edge AI-Powered ALPR Demo | License Plate Recognition',
    description: 'Learn how edge AI improves ALPR performance and real-time decision making.',
    hashtags: ['smartparking', 'anpr', 'alpr'],
    embedLink: 'https://www.youtube.com/embed/2BDCiouCN4k',
    watchLink: 'https://www.youtube.com/watch?v=2BDCiouCN4k',
    image: EdgeaiDemo,
    keywords: ['edge ai', 'alpr', 'license plate recognition', 'smart parking']
  },
  {
    title: 'Darsi Pro in Action | Edge AI Vision Box Demo',
    description: 'Watch Darsi Pro in action for edge AI computer vision use cases in ITS.',
    hashtags: ['smartparking', 'anpr', 'alpr'],
    embedLink: 'https://www.youtube.com/embed/yFZZH-1OxW8',
    watchLink: 'https://www.youtube.com/watch?v=yFZZH-1OxW8',
    image: DarsiPro,
    keywords: ['darsi pro', 'edge ai vision box', 'computer vision', 'its']
  },
  {
    title: 'e-con Systems ITS Camera Portfolio: Turret, Dome & Bullet Cameras',
    description: 'Additional ITS video resource covering intelligent transportation workflows.',
    hashtags: ['ITS', 'TrafficMonitoring'],
    embedLink: 'https://www.youtube.com/embed/9Q7T3smqRjA',
    watchLink: 'https://www.youtube.com/watch?v=9Q7T3smqRjA',
    image: 'https://img.youtube.com/vi/9Q7T3smqRjA/hqdefault.jpg',
    keywords: ['its video', 'traffic monitoring', 'intelligent transportation'],
    showYoutubeBadge: true
  },
  {
    title: 'Real-Time License Plate Recognition demo using ALPR SDK',
    description: 'Additional ITS video resource focused on AI-powered transport systems.',
    hashtags: ['ITS', 'EdgeAI'],
    embedLink: 'https://www.youtube.com/embed/XMwK9oYzB4g',
    watchLink: 'https://www.youtube.com/watch?v=XMwK9oYzB4g',
    image: 'https://img.youtube.com/vi/XMwK9oYzB4g/hqdefault.jpg',
    keywords: ['edge ai', 'its', 'transport intelligence', 'video resource'],
    showYoutubeBadge: true
  },
  {
    title: 'Smart AI ANPR Camera: Cloud-Based Management Demo',
    description: 'Additional ITS video resource with practical real-world enforcement context.',
    hashtags: ['ITS', 'Enforcement'],
    embedLink: 'https://www.youtube.com/embed/28ZZYad57Jk',
    watchLink: 'https://www.youtube.com/watch?v=28ZZYad57Jk',
    image: 'https://img.youtube.com/vi/28ZZYad57Jk/hqdefault.jpg',
    keywords: ['traffic enforcement', 'its', 'camera systems', 'video resource'],
    showYoutubeBadge: true
  },
  {
    title: 'AI ALPR Camera for Red Light Violation | e-con Systems',
    description: 'Additional ITS video resource with practical real-world enforcement context.',
    hashtags: ['ITS', 'ALPR Camera', 'Red Light Violation'],
    embedLink: 'https://www.youtube.com/embed/ISIaD0HaLBI',
    watchLink: 'https://www.youtube.com/watch?v=ISIaD0HaLBI',
    image: 'https://img.youtube.com/vi/ISIaD0HaLBI/hqdefault.jpg',
    keywords: ['Red Light Violation', 'its', 'ALPR Cameras', 'video resource'],
    showYoutubeBadge: true
  },
   {
    title: 'AI ALPR Camera for Stop Sign Violation | e-con Systems',
    description: 'Additional ITS video resource with practical real-world enforcement context.',
    hashtags: ['ITS', 'ALPR Camera', 'Stop Sign Violation'],
    embedLink: 'https://www.youtube.com/embed/91TcMA3Lt3Q',
    watchLink: 'https://www.youtube.com/watch?v=91TcMA3Lt3Q',
    image: 'https://img.youtube.com/vi/91TcMA3Lt3Q/hqdefault.jpg',
    keywords: ['Stop Sign Violation', 'its', 'ALPR Cameras', 'video resource'],
    showYoutubeBadge: true
  }
];

export const videoSearchIndex = videoHubData.map((video) => ({
  title: video.title,
  description: video.description,
  url: video.watchLink,
  image: video.image,
  keywords: video.keywords
}));
