import { Link } from "react-router-dom";
import Image from "../UI/Image";
import WeaponDetailsModal from "./WeaponDetailsModal";
import { useState } from "react";

export default function IndividualWeaponCard({ weaponType, weapon }) {
  const [show, setShow] = useState(false);

  function showModal() {
    setShow(true);
  }

  function hideModal() {
    setShow(false);
  }

  return (
    <div className="bg-secondary rounded-lg shadow-md p-8 flex flex-col justify-between items-center">
      <h1 className="text-2xl font-bold text-center">{weapon}</h1>
      <Image
        src={`https://api.resonance.rest/weapons/${weaponType}/${weapon}/icon`}
        alt={weapon + " icon"}
        width={200}
        height={200}
        className="m-4 rounded-full border-4 border-primary"
      />
      <button onClick={showModal} className="btn btn-primary mt-2">
        View details
      </button>
      {show && (
        <WeaponDetailsModal
          weapon={weapon}
          open={showModal}
          onClose={hideModal}
        />
      )}
    </div>
  );
}
