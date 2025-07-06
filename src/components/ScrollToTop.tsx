import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaDove } from "react-icons/fa";
import { scrollToTop } from "../utlis/scrollToTop";

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const handleScroll = useCallback(() => {
        setIsVisible(window.scrollY > 300);
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);
    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    onClick={scrollToTop}
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 100 }}
                    transition={{ duration: 0.5 }}
                    className="fixed bottom-9 right-6 z-50 p-3 bg-pink01 text-white rounded-full shadow-lg hover:scale-110 transition-all cursor-pointer"
                    aria-label="Scroll to Top"
                >
                    <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{ repeat: Infinity, duration: 1.2 }}
                    >
                        <FaDove className="text-xl" />
                    </motion.div>
                </motion.button>
            )}
        </AnimatePresence>
    );
}