// Everything on the page comes from this file, so the site and the résumé
// stay in sync: edit here, not in the components.

export const profile = {
  name: 'M. Sandy Prastyo',
  shortName: 'Sandy',
  role: 'iOS Engineer',
  focus: 'Swift, SwiftUI, On-Device AI',
  location: 'Bali, Indonesia',
  availability: 'Open to iOS roles: on-site, hybrid or remote, and happy to relocate.',
  email: 'muhammadsandy171@gmail.com',
  phone: '+62 851 5973 5778',
  phoneHref: 'https://wa.me/6285159735778',
  resume: '/M-Sandy-Prastyo-Resume.pdf',
  links: {
    linkedin: 'https://www.linkedin.com/in/muhammad-sandy-prastyo',
    github: 'https://github.com/musanpras',
    appStore: 'https://apps.apple.com/id/developer/muhammad-sandy-prastyo/id6776476062',
  },
  summary: [
    'iOS engineer with 5+ years building mobile and web apps, including native Swift and SwiftUI production work at PT Pegadaian, a state-owned financial services company.',
    'I was part of the team that rebuilt Pegadaian’s main app from React Native to native SwiftUI. It launched as Tring! by Pegadaian in October 2025 and has 10M+ downloads on Google Play.',
    'Now at Apple Developer Academy @ BINUS in Bali, where I have built 5 native iOS apps and shipped 2 to the App Store, working with Foundation Models, Core ML, Vision, CoreBluetooth, SwiftData and WidgetKit.',
    'Comfortable with MVVM, modular Swift Packages, async/await, unit testing and Agile teams. Former project manager, so I care about shipping on time as much as shipping well.',
  ],
};

export type Experience = {
  title: string;
  company: string;
  companyNote?: string;
  location: string;
  start: string;
  end: string;
  points: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    title: 'iOS Developer (Academy Learner)',
    company: 'Apple Developer Academy @ BINUS',
    location: 'Bali, Indonesia',
    start: 'Feb 2026',
    end: 'Present',
    points: [
      'Built 5 native iOS 26 apps in Swift and SwiftUI through Apple’s Challenge Based Learning program, mostly in small cross-functional teams of developers and designers.',
      'Shipped 2 apps to the App Store (Tripzee, Ttery) and distributed the others through TestFlight.',
      'Worked with Foundation Models, Core ML, Vision, CoreBluetooth with LoRa networking, SwiftData, WidgetKit, App Intents and HealthKit.',
    ],
    stack: ['Swift', 'SwiftUI', 'Foundation Models', 'Core ML', 'CoreBluetooth'],
  },
  {
    title: 'iOS Developer',
    company: 'PT Pegadaian',
    location: 'Jakarta, Indonesia',
    start: 'May 2025',
    end: 'Feb 2026',
    points: [
      'Built and maintained Swift and SwiftUI features for PDS 2.0, the native iOS rebuild of Pegadaian’s main financial services app, launched in October 2025 as Tring! by Pegadaian (10M+ downloads on Google Play).',
      'Owned features in authentication, authorization, coupons, user profile and balance: the flows customers use to sign in, redeem coupons, update their profile and check their balance.',
      'Moved from React Native (PDS 1.0) to native SwiftUI as part of the 2.0 rebuild.',
    ],
    stack: ['Swift', 'SwiftUI', 'MVVM', 'REST'],
  },
  {
    title: 'Frontend and Mobile Developer',
    company: 'PT Pegadaian',
    location: 'Jakarta, Indonesia',
    start: 'Oct 2023',
    end: 'May 2025',
    points: [
      'Built and maintained features in the Pegadaian Digital mobile app (PDS 1.0) with React Native and TypeScript.',
      'Built point and voucher features for Web Poin Pegadaian, which controls how loyalty points and vouchers reach users (Vue, TypeScript).',
    ],
    stack: ['React Native', 'TypeScript', 'Vue'],
  },
  {
    title: 'Frontend Developer',
    company: 'Tokodistributor',
    companyNote: 'B2B marketplace',
    location: 'Bandung, Indonesia',
    start: 'Jun 2022',
    end: 'Sep 2023',
    points: [
      'Built features, fixed UI bugs and integrated REST APIs for the reseller and supplier web apps (React, TypeScript).',
    ],
    stack: ['React', 'TypeScript', 'REST'],
  },
  {
    title: 'Mobile Developer',
    company: 'Reacteev ID',
    location: 'Indonesia',
    start: 'Sep 2021',
    end: 'May 2023',
    points: [
      'Full-time, then freelance. Built Lillah, a daily-info app for Muslims, in React Native.',
      'In Flutter: added a shopping feature to the Daeng Kurir delivery app, built a gym app for Vizta Gym, and built and maintained Telepandu.',
    ],
    stack: ['React Native', 'Flutter', 'Dart'],
  },
  {
    title: 'System Analyst, Game Developer, then Project Manager',
    company: 'Kafilah Corp',
    companyNote: 'Enjiner',
    location: 'Indonesia',
    start: 'Jan 2021',
    end: 'Sep 2021',
    points: [
      'Started as System Analyst, moved to Game Developer (Unity, C#, Blender), then Project Manager handling tasks, deadlines and delivery to stakeholders.',
    ],
    stack: ['Unity', 'C#', 'Blender'],
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: 'iOS',
    items: ['Swift', 'SwiftUI', 'UIKit', 'iOS SDK', 'SwiftData', 'Swift Charts', 'WidgetKit', 'App Intents', 'EventKit', 'HealthKit', 'WeatherKit', 'CoreBluetooth'],
  },
  {
    group: 'Swift',
    items: ['Swift Concurrency (async/await)', 'Protocols', 'Generics', 'Swift Package Manager'],
  },
  {
    group: 'On-device AI and ML',
    items: ['Apple Foundation Models', 'Core ML', 'Vision', 'MobileCLIP'],
  },
  {
    group: 'Architecture and testing',
    items: ['MVVM', 'Service layer', 'Modular Swift Packages', 'Unit testing', 'REST API integration'],
  },
  {
    group: 'Tools and process',
    items: ['Xcode', 'Git', 'TestFlight', 'App Store Connect', 'Agile/Scrum', 'Challenge Based Learning'],
  },
  {
    group: 'Also worked with',
    items: ['TypeScript', 'JavaScript', 'React Native', 'React', 'Vue', 'Flutter', 'Dart', 'C#', 'Unity'],
  },
];

export const education = {
  degree: 'Bachelor of Technology (BTech), Informatics',
  school: 'Universitas Riau',
  start: 'Aug 2015',
  end: 'Jan 2021',
};

export const awards = [
  {
    title: '2nd Runner-up, DILo Hackathon Festival Pekanbaru',
    date: 'Aug 2019',
    detail: '14 teams, 24 hours to build and pitch a product prototype.',
  },
  {
    title: '3rd Place, DILo Hackathon Festival Padang–Pekanbaru',
    date: 'Nov 2018',
    detail: '16 teams and 44 participants, 24 hours to build and pitch a prototype.',
  },
];

export const languages = [
  { name: 'Bahasa Indonesia', level: 'Native' },
  { name: 'English', level: 'Professional working proficiency' },
];
