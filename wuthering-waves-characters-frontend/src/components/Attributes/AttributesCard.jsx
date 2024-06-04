import { Link } from "react-router-dom";
import Image from "../UI/Image";
import constants from "../../constants/constants";

export default function AttributesCard({ attribute }) {
  return (
    <div className="bg-secondary rounded-lg shadow-md p-8 flex flex-col items-center">
      <h1 className="text-2xl font-bold text-center">{attribute}</h1>
      <Image
        src={`${constants.API_URL}attributes/${attribute}/icon`}
        alt={attribute + " icon"}
        width={200}
        height={200}
        className="m-4"
      />
      <div>
        <Link to={`/attributes/${attribute}`} className="btn btn-primary mt-2">
          View Characters
        </Link>
      </div>
    </div>
  );
}
