import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode } from "../redux/slice/darkmode";
import clsx from "clsx";

const DarkModeToggle = () => {
  const dispatch = useDispatch();
  const isDark = useSelector((state: any) => state.mode.isDark);

  const changeMode = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" className="sr-only peer" checked={isDark} onChange={changeMode} />

      {/* Toggle background container */}
      <div className={clsx(
        "flex py-2 px-2 gap-8 w-24 h-10 rounded-full transition-colors duration-300",
        "bg-darkNavy dark:bg-white",
        "peer-checked:bg-white peer-checked:dark:bg-white"
      )}>

        <img src="/theblog/images/navbar/sun.svg" alt="Light"
          className="w-6 h-6 dark:filter dark:invert" />
        
        <img src="/theblog/images/navbar/moon.svg" alt="Dark"
          className="w-6 h-6" />
      </div>

      {/* Toggle knob that moves left/right depending on mode */}
      <div
        className={clsx(
          "absolute top-2 right-2 w-6 h-6 rounded-full shadow transition-transform duration-300",
          "bg-white peer-checked:bg-darkNavy dark:bg-white peer-checked:dark:bg-darkNavy",
          { "translate-x-[-56px]": isDark, }
        )}>
      </div>
    </label>
  );
};

export default DarkModeToggle;
