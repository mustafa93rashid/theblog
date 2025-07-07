import { Outlet, useLocation } from 'react-router-dom';
import NavBar from './sections/NavBar';
import Footer from './sections/Footer';
import { FooterData } from './data/FooterData';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import HandleLoadingComponent from './components/Loader/HandleLoadingComponent';
import ScrollToTop from './components/ScrollToTop';
import PageWrapper from './utlis/PageWrapper';
import { AnimatePresence } from 'framer-motion';
import type { RootState } from './redux/store';

function App() {
  const isDark = useSelector((state: RootState) => state.mode.isDark);
  const location = useLocation();

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  return (
    <div className="min-h-screen  bg-white  text-black01 dark:bg-darkNavy dark:text-white px-[8.20512821%] md:px-[3.83693046%] lg:px-[7.777777777777778%] font-inter">
      <HandleLoadingComponent />
      <ScrollToTop />

      <NavBar />
      
      <AnimatePresence mode="wait">
        <PageWrapper key={location.pathname}>
          <div className="pt-24">
            <Outlet />
          </div>
        </PageWrapper>
      </AnimatePresence>

      <Footer year={new Date().getFullYear().toString()} links={FooterData} />

    </div>

  )
}

export default App
