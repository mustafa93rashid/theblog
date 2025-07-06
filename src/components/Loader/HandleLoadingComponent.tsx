import { useState, useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import Loader from "./Loader";

export default function HandleLoadingComponent() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        AOS.init({
          once: true, // Animation happens only once
          duration: 1000, // Animation duration
        });
        AOS.refresh();
        setLoading(false);
      }, 2000);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <>
      {loading ? (
        <>
          <Loader />
        </>
      ) : (
        <div></div>
      )}    </>
  );
}
