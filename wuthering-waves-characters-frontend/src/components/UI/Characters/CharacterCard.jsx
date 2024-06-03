import constants from "../../../constants/constants";
import { Link } from "react-router-dom";

export default function CharacterCard({ character }) {
  const logoWidth = 250;
  const logoHeight = 250;
  return (
    <div className="bg-secondary rounded-lg shadow-md p-8 flex flex-col items-center">
      <h1 className="text-2xl font-bold text-center">{character}</h1>
      <img
        src={constants.API_URL + "characters/" + character + "/portrait"}
        alt="logo"
        className="inline p-2"
        width={logoWidth}
        height={logoHeight}
      />
      <div>
        <Link to={`/characters/${character}`} className="btn btn-primary mt-2">
          View Details
        </Link>
      </div>
    </div>
  );
}
