import { FaPhone, FaInfo, FaUserTie } from "react-icons/fa";
import type { ReactElement } from "react";

export interface FloatingTab {
  color: string;
  icon: ReactElement;
  label: string;
  action: "tel" | "link";
  target: string;
}

export const floatingTabsData: FloatingTab[] = [
  {
    color: "bg-pink01",
    icon: <FaUserTie className="text-white text-base" />,
    label: "Subscribe",
    action: "link",
    target: "/theblog/newsletter",
  },
  {
    color: "bg-[#C11574]",
    icon: <FaPhone className="text-white text-base" />,
    label: "Call Us",
    action: "tel",
    target: "+123456789",
  },
  {
    color: "bg-[#3538CD]",
    icon: <FaInfo className="text-white text-base" />,
    label: "FAQ",
    action: "link",
    target: "/theblog/about",
  },
];
