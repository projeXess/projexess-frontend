import { CollapseProps } from "antd";
import { BotIcon, CircuitBoard, File, FileStack, Settings, TagsIcon } from "lucide-react";
import Link from "next/link";

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