import { useParams } from "react-router-dom";
import Header from "../components/UI/Header";
import { useQuery } from "@tanstack/react-query";
import { fetchWeapon } from "../api/http";
import LoadingIndicator from "../components/UI/LoadingIndicator";
import IndividualWeaponCard from "../components/Weapons/IndividualWeaponCard";
import Pager from "../components/UI/Pager";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

export default function WeaponPage() {
  const { weapon: weaponType } = useParams();

  const { data, error, isError, isLoading } = useQuery({
    queryKey: ["weapon", { weapon: weaponType }],
    queryFn: () => fetchWeapon({ weapon: weaponType }),
  });

  const [currentPage, setCurrentPage] = useState(1);

  const weaponsPerPage = 8;
  const indexOfLastWeapon = currentPage * weaponsPerPage;
  const indexOfFirstWeapon = indexOfLastWeapon - weaponsPerPage;
  let currentWeapons = [];
  let totalPages = 0;
  if (data) {
    currentWeapons = data.weapons.slice(indexOfFirstWeapon, indexOfLastWeapon);
    totalPages = Math.ceil(data.weapons.length / weaponsPerPage);
  }

  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-col items-center justify-center m-5">
        <h1 className="text-3xl font-bold text-center p-6">{weaponType}</h1>
        {isLoading && (
          <LoadingIndicator
            className="m-5"
            width={50}
            height={50}
            color="gray"
          />
        )}
        {isError && <p>Error: {error.message}</p>}
        {data && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-16 g-5">
            {currentWeapons.map((weapon, index) => (
              <IndividualWeaponCard
                key={weapon}
                weapon={weapon}
                weaponType={weaponType}
                delay={index * 0.2}
              />
            ))}
          </div>
        )}
        <div className="flex justify-center mt-5" data-testid="weapons-pager">
          <Pager
            totalPages={totalPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </main>
  );
}
