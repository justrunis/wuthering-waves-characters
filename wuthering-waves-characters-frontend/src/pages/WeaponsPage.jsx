import Header from "../components/UI/Header";
import { fetchWeapons } from "../api/http";
import { useQuery } from "@tanstack/react-query";
import LoadingIndicator from "../components/UI/LoadingIndicator";
import WeaponCard from "../components/Weapons/WeaponCard";

export default function WeaponsPage() {
  const { data, error, isError, isLoading } = useQuery({
    queryKey: ["weapons"],
    queryFn: fetchWeapons,
  });

  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <div
        className="flex flex-col items-center justify-center p-6 flex-grow"
        data-testid="weapons-page"
      >
        <h1 className="text-3xl font-bold text-center p-6">Weapons</h1>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-16 g-5">
            {data.types.map((weapon, index) => (
              <WeaponCard key={weapon} weapon={weapon} delay={index * 0.2} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
