import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface PaginationButtonProps {
  direction: "next" | "prev";
  onClick: () => void;
  disabled: boolean;
}

const PaginationButton: React.FC<PaginationButtonProps> = ({ direction, onClick, disabled }) => {
  const isNext = direction === "next";

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        group flex items-center gap-2 text-sm font-medium cursor-pointer
        transition duration-200
        ${disabled
          ? "text-gray-400 cursor-not-allowed"
          : "text-gray01 hover:text-purple-600 dark:hover:text-white hover:scale-105"}
      `}>
        
      {!isNext && (
        <FaArrowLeft
          className={`
      w-4 h-4 transition-transform duration-200
      ${!disabled ? "group-hover:-translate-x-1" : ""}`}/>
      )}

      <span>{isNext ? "Next" : "Previous"}</span>

      {isNext && (
        <FaArrowRight
          className={`
      w-4 h-4 transition-transform duration-200
      ${!disabled ? "group-hover:translate-x-1" : ""}`}/>
      )}
    </button>
  );
};

export default PaginationButton;
