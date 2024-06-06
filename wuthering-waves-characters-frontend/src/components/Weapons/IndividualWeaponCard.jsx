import { Link } from "react-router-dom";
import Image from "../UI/Image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function IndividualWeaponCard({ weaponType, weapon, delay }) {
  return (
    <motion.div
      className="bg-secondary rounded-lg shadow-md p-8 flex flex-col justify-between items-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "tween",
        stiffness: 100,
        delay: delay,
      }}
    >
      <h1 className="text-2xl font-bold text-center">{weapon}</h1>
      <Image
        src={`https://api.resonance.rest/weapons/${weaponType}/${weapon}/icon`}
        alt={weapon + " icon"}
        width={200}
        height={200}
        className="m-4 rounded-full border-4 border-primary"
      />
      <Link
        className="btn btn-primary mt-2"
        to={`/weapons/${weaponType}/${weapon}`}
      >
        View weapon details
      </Link>
    </motion.div>
  );
}
