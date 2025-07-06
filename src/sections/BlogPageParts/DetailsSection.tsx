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

const DetailsSection: React.FC<{ details?: Post["details"] }> = ({ details }) => {
  if (!details) return null;

  return (
    <div>
      {details.map((item, index) => (
        <div key={index} className="mb-3 space-y-4">
          {item.title && <p className="font-bold text-lg leading-6 text-gray01">{item.title}</p>}
          {item.example && <p className="font-bold leading-6 text-gray01">{item.example}</p>}
          {item.paragraphs?.map((p, pIndex) => (
            <ParagraphRenderer key={pIndex} paragraph={p} />
          ))}
          {item.blogImage && (
            <div className="my-4">
              <img src={item.blogImage} alt="Blog Detail" className="w-full rounded-lg" />
              {item.ImageDescription && (
                <p className="md:w-[68%] w-full mx-auto text-gray01 text-center mt-2 italic">{item.ImageDescription}</p>
              )}
            </div>

          )}

          {item.paragraphs01?.map((p, pIndex) => (
            <ParagraphRenderer key={pIndex} paragraph={p} />
          ))}
          {item.paragraph02?.map((extraText, extraIndex) => (
            <p key={`extra-${extraIndex}`} className="leading-6 text-gray01">{extraText}</p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default DetailsSection;
