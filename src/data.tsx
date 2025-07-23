import {
  BookText,
  Briefcase,
  Brush,
  Code2,
  CodeSquare,
  Home,
  Inbox,
  Mail,
  PanelsTopLeft,
  Phone,
  UserRound,
  Wrench,
} from "lucide-react";

// ✅ ABOUT ME
export const dataAboutMe = [
  {
    id: 1,
    name: "Experience",
    icon: <Briefcase />,
    description: "+3 years of experience",
  },
  {
    id: 3,
    name: "Projects",
    icon: <Wrench />,
    description: "+50 completed",
  },
];

// ✅ NAVBAR
export const itemsNavbar = [
  {
    id: 1,
    title: "Home",
    icon: <Home size={20} />,
    link: "#home",
  },
  {
    id: 2,
    title: "About",
    icon: <UserRound size={20} />,
    link: "#about-me",
  },
  {
    id: 3,
    title: "Services",
    icon: <BookText size={20} />,
    link: "#services",
  },
  {
    id: 4,
    title: "Portfolio",
    icon: <CodeSquare size={20} />,
    link: "#portfolio",
  },
  {
    id: 5,
    title: "Contact",
    icon: <Mail size={20} />,
    link: "#contact",
  },
];

// ✅ SLIDER IMAGES
export const dataSlider = [
  { id: 1, url: "/slider-1.jpg" },
  { id: 2, url: "/slider-2.jpg" },
  { id: 3, url: "/slider-3.jpg" },
  { id: 4, url: "/slider-4.jpg" },
];

// ✅ PORTFOLIO PROJECTS
export const dataPortfolio = [
  {
    id: 1,
    title: "E-commerce Platform",
    image: "/image-1.jpg",
    urlGithub: "https://github.com/Steven0319/E-commerce.git",
    urlDemo: "https://e-commerce-stevenapp.netlify.app/",
  },
  {
    id: 2,
    title: "Portfolio Page",
    image: "/image-2.jpg",
    urlGithub: "https://github.com/Steven0319/Portfolio.git",
    urlDemo: "https://portfolio-steven.netlify.app",
  },

  {
    id: 4,
    title: "Weather App Interactive",
    image: "/image-4.jpg",
    urlGithub: "https://github.com/Steven0319/Weather-APP.git",
    urlDemo: "https://weatherapp-stevenapp.netlify.app/",
  },
  {
    id: 5,
    title: "Store Platform",
    image: "/image-5.jpg",
    urlGithub: "https://github.com/Steven0319/My-first-store.git",
    urlDemo: "https://stevenstore.netlify.app/",
  },
  {
    id: 6,
    title: "Construction Website",
    image: "/image-6.jpg",
    urlGithub: "https://github.com/Steven0319/construction-website.git",
    urlDemo: "https://construction-website-silk.vercel.app/",
  },
  {
    id: 7,
    title: "Banking Page",
    image: "/image-7.jpg",
    urlGithub: "https://github.com/Steven0319/Landing-Page-Banking.git",
    urlDemo: "https://steven-bank.netlify.app/",
  },
  {
    id: 8,
    title: "Real Estate Page",
    image: "/image-8.jpg",
    urlGithub: "https://github.com/Steven0319/Real-Estate-Page.git",
    urlDemo: "https://stevenrealestate.netlify.app/",
  },
  {
    id: 9,
    title: "Web-Responsive",
    image: "/image-9.jpg",
    urlGithub: "https://github.com/Steven0319/Web-Responsive.git",
    urlDemo: "https://steventech.netlify.app/",
  },
  {
    id: 10,
    title: "Dashboard",
    image: "/image-10.jpg",
    urlGithub: "https://github.com/Steven0319/Dashboard.git",
    urlDemo: "https://dashboard-zeta-blue.vercel.app/",
  },
];

// ✅ EXPERIENCE & SKILLS
export const dataExperience = [
  {
    id: 1,
    title: "Frontend Development 💄",
    experience: [
      { name: "HTML", subtitle: "Experienced", value: 90 },
      { name: "CSS", subtitle: "Experienced", value: 85 },
      { name: "JavaScript", subtitle: "Experienced", value: 80 },
      { name: "Tailwind CSS", subtitle: "Experienced", value: 75 },
      { name: "React", subtitle: "Experienced", value: 80 },
      { name: "Bootstrap", subtitle: "Experienced", value: 75 },
    ],
  },
];

// ✅ SERVICES
export const dataServices = [
  {
    id: 1,
    title: "Web Development",
    icon: <PanelsTopLeft />,
    features: [
      { name: "Custom website development" },
      { name: "Responsive design and development" },
      { name: "SEO optimization" },
      { name: "Web application development" },
      { name: "Content management" },
      { name: "E-commerce solutions" },
      { name: "Ongoing maintenance and support" },
    ],
  },
  {
    id: 3,
    title: "UI/UX Design",
    icon: <Brush />,
    features: [
      { name: "Intuitive design for smooth user experience" },
      { name: "Interactive prototyping to visualize interface" },
      { name: "User research to understand expectations" },
      { name: "Usability optimization and accessibility" },
      { name: "Usability testing to evaluate experience" },
      { name: "Responsive design for all devices" },
    ],
  },
];

// ✅ CONTACT
export const dataContact = [
  {
    id: 1,
    title: "Phone",
    subtitle: "+506 8793 3283",
    link: "tel:+50687933283",
    icon: <Phone />,
    cta: "Call me",
  },
  {
    id: 2,
    title: "Github",
    subtitle: "github.com/Steven0319",
    link: "https://github.com/Steven0319",
    icon: <Code2 />,
    cta: "Go to site",
  },
  {
    id: 3,
    title: "Email",
    subtitle: "stevencg.0319@gmail.com",
    link: "mailto:stevencg.0319@gmail.com",
    icon: <Inbox />,
    cta: "Send a message",
  },
];
