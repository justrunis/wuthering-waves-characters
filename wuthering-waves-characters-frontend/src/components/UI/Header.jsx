import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import constants from "../../constants/constants";
import { FaRegSun, FaRegMoon, FaBars, FaHome } from "react-icons/fa";

export default function Header() {
  const primaryThemeName = constants.PRIMARY_STYLE;
  const secondaryThemeName = constants.SECONDARY_STYLE;

  const logoHeight = 80;
  const logoWidth = 160;

  const [theme, setTheme] = useState(localStorage.getItem("genshin-theme"));
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("genshin-theme");
    if (theme) {
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("genshin-theme", theme);
      setTheme(theme);
    } else {
      document.documentElement.setAttribute("data-theme", secondaryThemeName);
      localStorage.setItem("genshin-theme", secondaryThemeName);
      setTheme(secondaryThemeName);
    }
  }, []);

  function toggleTheme() {
    const root = document.documentElement;
    const theme = root.getAttribute("data-theme");

    if (
      theme === secondaryThemeName ||
      localStorage.getItem("genshin-theme") === secondaryThemeName
    ) {
      root.setAttribute("data-theme", primaryThemeName);
      localStorage.setItem("genshin-theme", primaryThemeName);
      setTheme(primaryThemeName);
    } else {
      root.setAttribute("data-theme", secondaryThemeName);
      localStorage.setItem("genshin-theme", secondaryThemeName);
      setTheme(secondaryThemeName);
    }
  }

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <header className="bg-primary py-4 text-primary-content flex justify-between p-4">
      <div className="flex flex-row items-center">
        <Link
          to="/"
          className="text-primary-content hover:text-base-100 text-xl font-bold ml-5"
        >
          <img
            src="https://wutheringwaves.kurogames.com/static4.0/assets/logo-en-398c8e54.png"
            alt="logo"
            className="inline p-2"
            width={logoWidth}
            height={logoHeight}
          />
        </Link>
      </div>
      <div className="flex items-center">
        <ul
          className={`lg:flex space-y-4 lg:space-y-0 lg:space-x-4 p-4 ${
            showMenu ? "block" : "hidden"
          }`}
        >
          <li>
            <Link
              to="/"
              className="hover:text-base-100 flex items-center gap-1"
            >
              <FaHome className="inline" />
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/characters"
              className="hover:text-base-100 flex items-center gap-1"
            >
              Characters
            </Link>
          </li>
          <button
            onClick={toggleTheme}
            className="hover:text-base-100 flex items-center gap-1"
          >
            {theme === primaryThemeName ? (
              <>
                <FaRegSun className="inline" />
              </>
            ) : (
              <>
                <FaRegMoon className="inline" />
              </>
            )}
            Toggle Theme
          </button>
        </ul>
        <button
          className="text-xl font-bold ml-5 lg:hidden"
          onClick={toggleMenu}
        >
          <FaBars />
        </button>
      </div>
    </header>
  );
}
