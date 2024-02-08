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