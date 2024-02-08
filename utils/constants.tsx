import { BotIcon, CircuitBoard, FileStack, TagsIcon } from "lucide-react";

export const navLinks = [
  { name: "Your tasks", link: "" },
  { name: "Project", link: "" },
  { name: "Dashboard", link: "" },
  { name: "Team", link: "" },
];


export const planningItems = [
  { name: "Timeline", link: "/dashboard/timeline", icon: FileStack },
  { name: "Board", link: "/dashboard/board", icon: CircuitBoard },
  { name: "Backing", link: "dashboard/backing", icon: FileStack }
]

export const devItems = [
  { name: "Code", link: "", icon: TagsIcon },
]

export const assItems = [
  { name: "Ai Bot", link: "", icon: BotIcon },
]


export const asideItems = [
  { title: "Planning", children: planningItems },
  { title: "Development", children: devItems },
  { title: "Assistant", children: assItems }
]