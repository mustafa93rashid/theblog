import React from "react";
import { floatingTabsData } from "../data/floatingTabsData";
import clsx from "clsx";

const FloatingTabs: React.FC = () => {
  const handleClick = (action: "link" | "tel", target: string) => {
    if (action === "tel") {
      window.location.href = `tel:${target}`;
    } else if (action === "link") {
      window.location.href = target;
    }
  };

  return (
    <div className="fixed bottom-9 left-0 z-50 flex flex-col gap-2">
      {floatingTabsData.map((tab, index) => (
        <div key={index} onClick={() => handleClick(tab.action, tab.target)}
          className={clsx(
            "group flex items-center overflow-hidden cursor-pointer shadow-md rounded-r-lg",
            "pl-2 md:pl-3 pr-2 py-1 h-10",
            "w-[30px] md:w-[40px] hover:w-[120px]",
            tab.color
          )}>

          <div className="flex items-center justify-center w-3 h-3 shrink-0">
            {tab.icon}
          </div>

          <span
            className={clsx(
              "ml-2 text-xs font-medium text-white whitespace-nowrap",
              "opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            )}>
            {tab.label}
          </span>
          
        </div>
      ))}
    </div>
  );
};

export default FloatingTabs;
