import { Outlet } from 'react-router-dom';
import NavBar from './sections/NavBar';
import Footer from './sections/Footer';
import { FooterData } from './data/FooterData';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { toggleDarkMode } from './redux/slice/darkmode';
import HandleLoadingComponent from './components/Loader/HandleLoadingComponent';
import ScrollToTop from './components/ScrollToTop';
import FloatingTabs from './components/FloatingTabs';
import PageWrapper from './utlis/PageWrapper';
import { AnimatePresence } from 'framer-motion';
import { useLocation } from "react-router-dom";

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(toggleDarkMode())
  }, []);
  const location = useLocation();

  return (
    <div className="min-h-screen  bg-white  text-black01 dark:bg-darkNavy dark:text-white px-[8.20512821%] md:px-[3.83693046%] lg:px-[7.777777777777778%] font-inter">
      <HandleLoadingComponent />
      <ScrollToTop />
      <FloatingTabs />

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
