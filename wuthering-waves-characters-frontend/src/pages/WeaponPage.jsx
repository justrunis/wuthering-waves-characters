import { useParams } from "react-router-dom";
import Header from "../components/UI/Header";
import { useQuery } from "@tanstack/react-query";
import { fetchWeapon } from "../api/http";
import LoadingIndicator from "../components/UI/LoadingIndicator";
import IndividualWeaponCard from "../components/Weapons/IndividualWeaponCard";
import Pager from "../components/UI/Pager";

export default function WeaponPage() {
  const { weapon: weaponType } = useParams();

  const { data, error, isError, isLoading } = useQuery({
    queryKey: ["weapon", { weapon: weaponType }],
    queryFn: () => fetchWeapon({ weapon: weaponType }),
  });

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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 px-16 g-5">
            {data.weapons.map((weapon) => (
              <IndividualWeaponCard
                key={weapon.name}
                weapon={weapon}
                weaponType={weaponType}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
