import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const fullText = "THE BLOG";

const Hero = () => {
  const [displayedText, setDisplayedText] = useState<string>(""); 
  const [index, setIndex] = useState<number>(0); 
  const [deleting, setDeleting] = useState<boolean>(false); 

  useEffect(() => {
    const typingSpeed = 100;
    const pauseAfterComplete = 1500;
    const pauseBeforeRestart = 500;

    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && index < fullText.length) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText.charAt(index));
        setIndex((prev) => prev + 1);
      }, typingSpeed);
    } else if (!deleting && index === fullText.length) {
      timeout = setTimeout(() => setDeleting(true), pauseAfterComplete);
    } else if (deleting && index > 0) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
        setIndex((prev) => prev - 1);
      }, typingSpeed / 2);
    } else if (deleting && index === 0) {
      timeout = setTimeout(() => setDeleting(false), pauseBeforeRestart);
    }

    return () => clearTimeout(timeout);
  }, [index, deleting]);

  return (
    <div className="mt-5 w-full absolute left-0 top-[80px] md:mt-[30px] lg:static">
      <motion.h1
        className="text-6xl font-bold text-center w-full border-y-1 py-2 border-black01 dark:border-white md:text-[135px] lg:text-[175px] xl:text-[200px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {displayedText}
        <motion.span
          className="inline-block"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 1 }}
        >
          |
        </motion.span>
      </motion.h1>
    </div>
  );
};

export default Hero;
