import {
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import portfolioImage12 from '../images/portfolio/portfolio-12.jpg'
import portfolioImage13 from '../images/portfolio/portfolio-13.png'
import portfolioImage14 from '../images/portfolio/portfolio-14.png'
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Portfolio',
  description: "Portfolio Site",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Anthony Ovalles.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm an Austin, TX based <strong className="text-stone-100">Technical Project Manager</strong>, currently working
        at <strong className="text-stone-100">Meta</strong> as well as a Software Engineer that is driving process improvement and solving complex problems.
      </p>
    </>
  ),
  actions: [
    {
      href: '/Users/anthonyovalles/Documents/Programming/react-resume-template-main/src/components/Sections/Resume/MyResume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Experience utilizing MS Project and Smartsheet for Project Management, Power BI and Tableau for
  Metrics. Additional skills include Bug Tracking with JIRA. Scripting Languages include Python, Flask,
  SQL, HTML, QA Compliance, Database Management (Perforce), Repository (Git/GitHub), Design
  Drawing Implementation & Review, Cross-Functional Grouping and Customer Relations.`,
  aboutItems: [
    {label: 'Location', text: 'Austin, TX', Icon: MapIcon},
    {label: 'Interests', text: 'Good Coffee, Good Food, Family & Friends, Olympic Weightlifting, Coding', Icon: SparklesIcon},
    {label: 'Employment', text: 'Meta', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Spanish',
        level: 10,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Rust',
        level: 5,
      },
      {
        name: 'Golang',
        level: 4,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Flutter',
        level: 4,
      },
      {
        name: 'Swift',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Netflix Clone',
    description: '"Creating a clone of Netflix with functionality that includes the ability to sign up, login, and store favorite movies. Using TMDB API for the most recent TV & Movie releases, and Firebase for cloud storing of login credentialing. Lastly, the front-end is styled with Tailwind CSS to showcase seamless practicality."',
    url: 'https://netflix-clone-firebase.netlify.app/',
    image: portfolioImage12,
  },
  {
    title: 'Space Tourism',
    description: 'A project I created focusing on dynamic handling of the UX/Frontend through Scrimba with React and TailwindCSS.',
    url: 'https://github.com/aovalles2711',
    image: portfolioImage14,
  },
  {
    title: 'Native Portfolio App',
    description: 'A short iteration of my portfolio that was completed during my early stages of development, with the use of a MERN Stack.',
    url: 'https://myportfolio-78756.netlify.app/',
    image: portfolioImage13,
  },
  {
    title: 'New Projects Under Construction. Stay Tuned!',
    description: 'For more of my contributions, please check out my Github respositores where you can see more of my work!.',
    url: 'https://github.com/aovalles2711',
    image: porfolioImage4,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'February 2023 - February 2024',
    location: 'Springboard',
    title: 'Software Engineering Career Track',
    content: <p>Completed a 700+ hour course covering front-end, back-end, and full-stack web development with JavaScript, Python, Flask, SQL, Node, Express, React, and Redux. I completed a portfolio of four projects including a front-end sprint, back-end spring, and two capstone projects "Fitness & Health Programming Database" and "Strong Friends Social Media Application" which were reviewed by an industry expert.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'November 2021 - Present',
    location: 'Austin, TX',
    title: 'Technical Project Manager',
    content: (
      <p>
        ● Successfully managed and oversaw large decommissioning of sites involving all security related devices.
        
        ● Worked with cross-functional teams to meet deadlines and goals required to complete high-level moves, adds, and changes.
        
        ● Provided consultation as a Subject-Matter-Expert to stakeholders as well as engaged Quality Assurance reviews to ensure projects met compliance.
      </p>
    ),
  },
  {
    date: 'August 2019 - November 2021',
    location: 'Washington, D.C.',
    title: 'Senior Administrator',
    content: (
      <p>
        ● Conducted necessary post-construction phase duties such as logging and reviewing Submittals and Request(s)-For-Information (RFI) for projects within the phase.
        
        ● Consistently managed databases that included project schedules, additional services, contracts and proposals.
        
        ● Coordinated contract negotiations with Architects, Principals, Engineers and stakeholders.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Lennyn Torres',
      text: 'I highly recommend Anthony Ovalles as a project manager. Anthony is an experienced and knowledgeable professional who brings a wealth of expertise to any project he manages. I have had the pleasure of working with Anthony on several projects, and I have always been impressed with his ability to navigate complex challenges with ease. Anthony is a true leader who understands the importance of collaboration and communication when it comes to successful project management. He is an excellent communicator and always keeps stakeholders informed and engaged throughout the project lifecycle. His attention to detail and thoroughness ensures that all aspects of a project are carefully considered and executed to a high standard.One of his greatest strengths is his ability to adapt to changing project requirements and priorities. He is skilled at managing shifting timelines and budgets, and always works diligently to ensure that the project remains on track and within scope. He is also adept at identifying potential risks and proactively implementing mitigation strategies to ensure project success.',
      
      image: 'https://media.licdn.com/dms/image/D5603AQGigPVCHq8Z9A/profile-displayphoto-shrink_800_800/0/1690172004277?e=1722470400&v=beta&t=-I7gRhbbGWWGFTjDVvLd_I6XxFbsBsy0xJHR1umKuXU',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'For any inquiries regarding Software Development or Technical Project Management, please free to contact me via email.',
  items: [
    {
      type: ContactType.Email,
      text: 'aovalles420@gmail.com',
      href: 'mailto:aovalles420@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Austin, Texas',
      href: 'https://www.google.ca/maps/place/Austin,+TX/@30.3079541,-97.9205502,11z/data=!3m1!4b1!4m6!3m5!1s0x8644b599a0cc032f:0x5d9b464bd469d57a!8m2!3d30.267153!4d-97.7430608!16zL20vMHZ6bQ?entry=ttu',
    },
    {
      type: ContactType.Github,
      text: 'aovalles2711',
      href: 'https://github.com/aovalles2711',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/aovalles2711'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/anthony-ovalles91/'},
];
