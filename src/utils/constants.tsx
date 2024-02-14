import { File, FileStack, Settings } from "lucide-react";

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
    avatar: ''
  },

  {

    title: 'Stop Using localStorage!',
    description: "The title is not clickbait, the message is abrupt “Stop Using localStorage!” there is no ambiguity here and....",
    avatar: ''
  },
  {
    title: 'I Built an App in 6 Hours that Makes $1,500/Mo',
    description: "Copy my strategy! — Here is the simple web app I created in 6 hours. It is a Finnish rental cottage finder that ....",
    avatar: ''
  },

  {
    title: '18 JavaScript One-Liners That’ll Make You Look Like a Pro',
    description: "A list of one-liners you should know to up your knowledge of JavaScript. — In just a few minutes, step .........",
    avatar: ''
  }

]