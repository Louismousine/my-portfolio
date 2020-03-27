module.exports = {
  siteTitle: 'Louis Barrette-Vanasse',
  siteDescription: 'Louis Barrette-Vanasse portfolio',
  siteKeywords:
    'louis, louis barrette-vanasse, louis barrette, software engineer, front-end engineer, software intern, web developer, javascript, mcgill',
  siteUrl: 'https://louisbarrettevanasse.netlify.com',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-145437007-1',
  googleVerification: '',
  name: 'Louis Barrette-Vanasse',
  location: 'Montreal, QC',
  email: 'louis.barrette-vanasse@mail.mcgill.ca',
  github: 'https://github.com/Louismousine',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/Louismousine',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/louis-barrette-vanasse',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,
  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
