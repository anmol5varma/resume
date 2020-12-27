import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Anmol Varma', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Anmol Varma',
  subtitle: 'I am a FullStack developer.',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'solo_me.jpg',
  paragraphOne:
    'I’m a fullstack software developer from Bangalore, India. I’ve been designing and developing solutions since 2018. I’ve mostly worked professionally with JavaScript and Java.',
  paragraphTwo:
    'I love working, reading and learning JS ❤️. Although I do have a thing for JS but I believe in using the right tool for the job. A programming language is just a tool!',
  paragraphThree:
    'Beside programming you can also hit me up to discuss football ⚽, chess ♟️, movies/tv-series 🎬 and card tricks 🃏.',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'excel',
    title: 'Excel-cms',
    info:
      'The module works by parsing the csv and converting them to JSON files with first value in the column as section heading and all other rows as the content inside the section.',
    info2: '',
    url: '',
    repo: 'https://github.com/anmol5varma/excel-cms',
  },
  {
    id: nanoid(),
    img: 'quiz.jpg',
    title: 'Football quiz',
    info:
      'A PWA that generates a quiz from random 15 questions. It also integrates with whatsapp, telegram, and fb messenger app  to share the site link with friends.',
    info2: '',
    url: 'https://quizzzes.netlify.app/',
    repo: 'https://github.com/anmol5varma/quizzzes',
  },
  {
    id: nanoid(),
    img: 'ipl.png',
    title: 'IPL Wallpaper cli tool',
    info:
      'This npm-cli package sets the wallpaper of the system to the current IPL points table. A sample image available below. We fetch the data from www.iplt20.com/points-table/2020 .',
    info2: '',
    url: 'https://www.npmjs.com/package/ipl-wallpaper',
    repo: 'https://github.com/wallpaper-cli/ipl',
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Super impressed by my elevator pitch?',
  btn: '',
  email: 'anmol5varma@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'medium',
      url: 'https://medium.com/@anmol5varma',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/anmol-varma/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/anmol5varma',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
