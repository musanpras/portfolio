// Everything on the page about Sandy comes from this file, so the site and the
// résumé stay in sync: edit here, not in the components.

export const profile = {
  name: 'M. Sandy Prastyo',
  role: 'iOS Engineer',
  location: 'Bali, Indonesia',
  email: 'muhammadsandy171@gmail.com',
  resume: '/M-Sandy-Prastyo-Resume.pdf',
  links: {
    linkedin: 'https://www.linkedin.com/in/muhammad-sandy-prastyo',
    github: 'https://github.com/musanpras',
    appStore: 'https://apps.apple.com/id/developer/muhammad-sandy-prastyo/id6776476062',
  },
};

export type Experience = {
  company: string;
  title: string;
  location: string;
  start: string;
  end: string;
  summary: string;
};

export const experience: Experience[] = [
  {
    company: 'Apple Developer Academy @ BINUS',
    title: 'iOS Developer (Academy Learner)',
    location: 'Bali',
    start: 'Feb 2026',
    end: 'Present',
    summary:
      'Built 5 native iOS 26 apps in Swift and SwiftUI with designers and developers, and shipped Tripzee and Ttery to the App Store.',
  },
  {
    company: 'PT Pegadaian',
    title: 'iOS Developer',
    location: 'Jakarta',
    start: 'May 2025',
    end: 'Feb 2026',
    summary:
      'Part of the team that rebuilt the main app in native SwiftUI, launched as Tring! by Pegadaian (10M+ downloads). Owned sign-in, coupons, profile and balance.',
  },
  {
    company: 'PT Pegadaian',
    title: 'Frontend and Mobile Developer',
    location: 'Jakarta',
    start: 'Oct 2023',
    end: 'May 2025',
    summary:
      'Built features for the Pegadaian Digital app in React Native, and points and vouchers for Web Poin Pegadaian in Vue.',
  },
  {
    company: 'Tokodistributor',
    title: 'Frontend Developer',
    location: 'Bandung',
    start: 'Jun 2022',
    end: 'Sep 2023',
    summary: 'Built the reseller and supplier web apps of a B2B marketplace in React and TypeScript.',
  },
  {
    company: 'Reacteev ID',
    title: 'Mobile Developer',
    location: 'Indonesia',
    start: 'Sep 2021',
    end: 'May 2023',
    summary: 'Built Lillah in React Native, and Telepandu, Vizta Gym and a Daeng Kurir shopping feature in Flutter.',
  },
  {
    company: 'Kafilah Corp (Enjiner)',
    title: 'System Analyst, Game Developer, then Project Manager',
    location: 'Indonesia',
    start: 'Jan 2021',
    end: 'Sep 2021',
    summary: 'Moved from system analysis to Unity game development, then ran delivery as project manager.',
  },
];

export const specs: { label: string; items: string[] }[] = [
  {
    label: 'iOS',
    items: ['Swift', 'SwiftUI', 'UIKit', 'SwiftData', 'Swift Charts', 'WidgetKit', 'App Intents', 'EventKit', 'HealthKit', 'WeatherKit', 'CoreBluetooth'],
  },
  {
    label: 'Swift',
    items: ['Concurrency (async/await)', 'Protocols', 'Generics', 'Swift Package Manager'],
  },
  {
    label: 'On-device AI',
    items: ['Apple Foundation Models', 'Core ML', 'Vision', 'MobileCLIP'],
  },
  {
    label: 'Architecture',
    items: ['MVVM', 'Service layer', 'Modular Swift Packages', 'Unit testing', 'REST APIs'],
  },
  {
    label: 'Tools',
    items: ['Xcode', 'Git', 'TestFlight', 'App Store Connect', 'Agile/Scrum', 'Challenge Based Learning'],
  },
  {
    label: 'Also',
    items: ['TypeScript', 'JavaScript', 'React Native', 'React', 'Vue', 'Flutter', 'Dart', 'C#', 'Unity'],
  },
];

export const background: { label: string; lines: { main: string; note: string }[] }[] = [
  {
    label: 'Education',
    lines: [{ main: 'BTech in Informatics, Universitas Riau', note: '2015 to 2021' }],
  },
  {
    label: 'Awards',
    lines: [
      { main: '2nd Runner-up, DILo Hackathon Festival Pekanbaru', note: 'Aug 2019, 14 teams in 24 hours' },
      { main: '3rd Place, DILo Hackathon Festival Padang–Pekanbaru', note: 'Nov 2018, 16 teams in 24 hours' },
    ],
  },
  {
    label: 'Languages',
    lines: [
      { main: 'Bahasa Indonesia', note: 'Native' },
      { main: 'English', note: 'Professional working proficiency' },
    ],
  },
];
