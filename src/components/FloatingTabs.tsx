import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import { floatingTabsData } from "../data/floatingTabsData";

const FloatingTabs: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<number | null>(null);

  useEffect(() => {
    if (activeTab !== null) {
      const timer = setTimeout(() => setActiveTab(null), 3000);    
      return () => clearTimeout(timer);
    }
  }, [activeTab]);

  const handleClick = (index: number, action: "link" | "tel", target: string) => {
    if (activeTab === index) {
      if (action === "tel") {
        window.location.href = `tel:${target}`;
      } else {
        navigate(target);
      }
    } else {
      setActiveTab(index);
    }
  };

  return (
    <div className="fixed bottom-9 left-0 z-50 flex flex-col gap-2">
      {floatingTabsData.map((tab, index) => (
        <div
          key={index}
          onClick={() => handleClick(index, tab.action, tab.target)}
          className={clsx(
            "group flex items-center overflow-hidden cursor-pointer shadow-md rounded-r-lg transition-all duration-300",
            "pl-2 md:pl-3 pr-2 py-1 h-10",
            activeTab === index ? "w-[120px]" : "w-[40px]",
            tab.color
          )}
        >
          <div className="flex items-center justify-center w-4 h-4 shrink-0">
            {tab.icon}
          </div>
          <span
            className={clsx(
              "ml-2 text-xs font-medium text-white whitespace-nowrap",
              activeTab === index ? "opacity-100" : "opacity-0",
              "transition-opacity duration-300"
            )}
          >
            {tab.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default FloatingTabs;
