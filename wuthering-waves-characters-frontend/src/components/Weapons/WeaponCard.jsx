import { Link } from "react-router-dom";
import Image from "../UI/Image";
export default function WeaponCard({ weapon }) {
  return (
    <div className="bg-secondary rounded-lg shadow-md p-8 flex flex-col items-center">
      <h1>{weapon}</h1>
      <Image
        src={`https://api.resonance.rest/weapons/${weapon}/icon`}
        alt={weapon + " icon"}
        width={200}
        height={200}
        className="m-4"
      />
      <Link to={`/weapons/${weapon}`} className="btn btn-primary mt-2">
        View Characters
      </Link>
    </div>
  );
}
