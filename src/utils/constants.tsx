import { FacebookIcon, File, FileStack, InstagramIcon, LinkedinIcon, Settings, TwitterIcon } from "lucide-react";
import { FaPeopleArrows } from "react-icons/fa";

export const navLinks = [
  { name: "Your tasks", link: "" },
  { name: "Project", link: "" },
  { name: "Dashboard", link: "" },
  { name: "Team", link: "" },
];




export const settingsItems = [
  { name: "Documents", link: "/dashboard/documents", icon: <File /> },
  { name: "Team", link: "/dashboard/team", icon: <FaPeopleArrows /> },
  { name: "Resources", link: "/dashboard/resources", icon: <FileStack /> },
  { name: "Settings", link: "/dashboard/profile", icon: <Settings /> }
]


export const teams = [
  { name: "Frontend Devs", members: 5, progress: 70, task: "In the current project phase, the assignment of roles to the designers has not yet been finalized.  Discussions are ongoing to assess the project's design needs and the strengths of each designer, with the aim of making well-informed decisions that will benefit the project in the long run. " },
  { name: "Backend Devs", members: 3, progress: 43, task: "For the backend developers, role assignments are also pending at this stage of the project.  Detailed discussions are underway to assess the project's backend development requirements and the strengths of each developer, with the goal of making informed decisions that will enhance the overall efficiency." },
  { name: "Designers", members: 2, progress: 87, task: "Similarly, role assignments for the frontend developers have not yet been finalized.  Extensive discussions are in progress to evaluate the project's frontend development needs and the strengths of each developer, with the intention of making well-considered choices that will advance the project's frontend development efforts." },

]


export const tasksCompleted = [
  { name: "Initiation", description: "SpeedSenser kicked off the project by defining its purpose, scope, and feasibility. The project charter was established, outlining key stakeholders and initial budgets and actions to be taken" },
  { name: "Team Setup", description: "SpeedSenser assembled the project team, assigning roles and responsibilities. Communication channels were established, and project management tools were set up to ensure the team had the necessary resources." },
  { name: "Timeline", description: "SpeedSenser was given a detailed project timeline, mapping out major milestones, tasks, and deliverables. This timeline provided a clear schedule for the project's progress." },
  { name: "Information Gathering", description: "SpeedSenser has been presented with all relevant project information. This included gathering requirements from stakeholders, researching best practices, and compiling necessary data and resources for the project." },
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
  { name: 'Twitter', icon: <TwitterIcon />, link: '' },
  { name: 'Instagram', icon: <InstagramIcon />, link: '' },
  { name: 'Facebook', icon: <FacebookIcon />, link: '' },
  { name: 'Linkedin', icon: <LinkedinIcon />, link: '' },
]