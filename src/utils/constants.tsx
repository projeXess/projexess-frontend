import { FacebookIcon, File, FileStack, InstagramIcon, LinkedinIcon, Settings, TwitterIcon } from "lucide-react";

export const navLinks = [
  { name: "Your tasks", link: "" },
  { name: "Project", link: "" },
  { name: "Dashboard", link: "" },
  { name: "Team", link: "" },
];




export const settingsItems = [
  { name: "Documents", link: "", icon: <File /> },
  { name: "Resources", link: "", icon: <FileStack /> },
  { name: "Project Settings", link: "", icon: <Settings /> }
]


export const teams = [
  { name: "Frontend Devs", members: 5, progress: 70, task: "The designers were assigned the role to design the project from the start to end of it following the documentation of the project that was shared." },
  { name: "Backend Devs", members: 3, progress: 43, task: "They were assigned to do the API endpoints and database connections only and immediately integrate with frontend." },
  { name: "Designers", members: 2, progress: 87, task: "Front end developers were assigned to finish the dashboards and main functionalities on the User interface first and the authentication pages." },

]


export const tasksCompleted = [
  { name: "Homepage", description: "The home page was completed with all needed functionalities. The main section is completed, the footer and others are also completed on the home page." },
  { name: "Documentation", description: "The home page was completed with all needed functionalities. The main section is completed, the footer and others are also completed on the home page." },
  { name: "Homepage", description: "The home page was completed with all needed functionalities. The main section is completed, the footer and others are also completed on the home page." },
  { name: "Documentation", description: "The home page was completed with all needed functionalities. The main section is completed, the footer and others are also completed on the home page." },
]


export const insights = [
  {
    title: "JSON is incredibly slow: Here’s What’s Faster!",
    description: "Yes, you heard that right! JSON, the ubiquitous format for data interchange in web development, might...",
    avatar: '/avatar.svg'
  },

  {

    title: 'Stop Using localStorage!',
    description: "The title is not clickbait, the message is abrupt “Stop Using localStorage!” there is no ambiguity here and....",
    avatar: '/avatar2.svg'
  },
  {
    title: 'I Built an App in 6 Hours that Makes $1,500/Mo',
    description: "Copy my strategy! — Here is the simple web app I created in 6 hours. It is a Finnish rental cottage finder that ....",
    avatar: '/avatar3.svg'
  },

  {
    title: '18 JavaScript One-Liners That’ll Make You Look Like a Pro',
    description: "A list of one-liners you should know to up your knowledge of JavaScript. — In just a few minutes, step .........",
    avatar: '/avatar4.svg'
  }

]


export const explorerListItems = [
  { name: 'statistics', link: '' },
  { name: 'analysis', link: '' },
  { name: 'manage your work', link: '' },
  { name: "control your workers", link: '' },
  { name: 'track time', link: '' },
  { name: 'set up tasks', link: '' },
  { name: 'notifications', link: '' },
  { name: 'use AI', link: '' },
  { name: 'graphs', link: '' },
  { name: 'Calendar', link: '' },
]
export const useCasesItems = [
  { name: 'User registration', link: '' },
  { name: 'Mentor matching', link: '' },
  { name: 'Project guidance', link: '' },
  { name: 'Market insights access', link: '' },
  { name: 'Community interaction', link: '' },
  { name: 'Subscription Management', link: '' },
  { name: 'Data security management', link: '' },
  { name: 'Resource libary access', link: '' },
  { name: 'Feedback and support request', link: '' },
  { name: 'Admin controls', link: '' },
  { name: 'Mobile usage', link: '' },
  { name: 'scalability handling', link: '' },
]
export const valuePropoItems = [
  { name: 'End-to-End project guidance', link: '' },
  { name: 'Expert guidance', link: '' },
  { name: 'Customized solutions', link: '' },
  { name: 'Time and cost efficiency', link: '' },
]


export const socials = [
  { name: 'Twitter', icon: <TwitterIcon  />, link:'' },
  { name: 'Instagram', icon: <InstagramIcon /> ,link: '' },
  { name: 'Facebook', icon: <FacebookIcon />, link: '' },
  { name: 'Linkedin', icon: <LinkedinIcon />, link: '' },
]