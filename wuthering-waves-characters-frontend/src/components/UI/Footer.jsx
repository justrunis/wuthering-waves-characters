import { Link } from "react-router-dom";
import { FaRegSun, FaRegMoon, FaBars, FaHome, FaStar } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-secondary to-primary text-primary-content p-4">
      <ul className="flex flex-row items-center justify-center gap-5">
        <li>
          <Link to="/" className="hover:text-base-100 flex items-center gap-1">
            <FaHome className="inline" />
            Home
          </Link>
        </li>
        <li>
          <p>Copyright © {new Date().getFullYear()}</p>
        </li>
        <li>
          <Link
            to="/characters"
            className="hover:text-base-100 flex items-center gap-1"
          >
            <FaStar className="inline" />
            Characters
          </Link>
        </li>
      </ul>
    </footer>
  );
}
