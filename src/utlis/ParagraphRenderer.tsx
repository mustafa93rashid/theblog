import React from "react";
import type { Post } from "../../types/Post";

const ParagraphRenderer: React.FC<{ paragraph: any }> = ({ paragraph }) => {
  if (paragraph.type === "list" && Array.isArray(paragraph.text)) {
    return (
      <ul className="list-disc pl-6 space-y-1">
        {paragraph.text.map((li: string, i: number) => (
          <li key={i} className="leading-6 text-gray01">{li}</li>
        ))}
      </ul>
    );
  }

  if (
    typeof paragraph.text === "string" &&
    paragraph.span &&
    paragraph.text.includes(paragraph.span)
  ) {
    const [before, after] = paragraph.text.split(paragraph.span);

    let spanClass = "";
    if (paragraph.spanStyle === "bold") spanClass = "font-bold";
    else if (paragraph.spanStyle === "underline") spanClass = "underline";

    return (
      <p className="leading-6 text-gray01">
        {before}
        <span className={spanClass}>{paragraph.span}</span>
        {after}
      </p>
    );
  }

  return (
    <p className="leading-6 text-gray01">
      {Array.isArray(paragraph.text) ? paragraph.text.join(" ") : paragraph.text}
    </p>
  );
};