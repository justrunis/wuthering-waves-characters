import { useQuery } from "@tanstack/react-query";
import { fetchWeaponDetails } from "../api/http";
import LoadingIndicator from "../components/UI/LoadingIndicator";
import ErrorIndicator from "../components/UI/ErrorIndicator";
import constants from "../constants/constants";
import Header from "../components/UI/Header";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Slider from "../components/UI/Slider";

export default function WeaponDetailsPage() {
  const { weaponType, weapon } = useParams();

  const [weaponRank, setWeaponRank] = useState(0);

  const { data, error, isError, isLoading } = useQuery({
    queryKey: ["weapon", { weaponType, weapon }],
    queryFn: () => fetchWeaponDetails({ weaponType, weapon }),
    staleTime: constants.STALE_TIME,
  });

  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-col items-center justify-center m-5">
        {isLoading && (
          <LoadingIndicator
            text="Loading weapon..."
            containerClassName="flex flex-col items-center justify-center m-5"
            className="m-5"
            width={50}
            height={50}
            color="gray"
          />
        )}
        {isError && (
          <ErrorIndicator
            title="An error occurred"
            message={error?.message || "Failed to fetch weapon."}
          />
        )}
        {data && (
          <>
            <div className="card-body">
              <div className="stats shadow w-full flex flex-col lg:flex-row">
                <div className="stat p-4 flex-1">
                  <div className="stat-title text-center sm:text-left">
                    Type
                  </div>
                  <div className="stat-value text-center sm:text-left">
                    {data.type}
                  </div>
                </div>
                <div className="stat p-4 flex-1">
                  <div className="stat-title text-center sm:text-left">
                    Rarity
                  </div>
                  <div className="stat-value text-center sm:text-left">
                    {"⭐".repeat(data.rarity)}
                  </div>
                </div>
                <div className="stat p-4 flex-1">
                  <div className="stat-title text-center sm:text-left">ATK</div>
                  <div className="stat-value text-center sm:text-left">
                    {data?.stats?.atk}
                  </div>
                </div>
                <div className="stat p-4 flex-1">
                  <div className="stat-title text-center sm:text-left">
                    Substat
                  </div>
                  <div className="stat-value text-center sm:text-left">
                    {data?.stats?.substat?.name} ({data?.stats?.substat?.value})
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-5">
              <div className="card w-full max-w-md bg-base-100 shadow-xl flex flex-row">
                <div className="flex flex-col">
                  <figure className="px-10 pt-10">
                    <img
                      src={`https://api.resonance.rest/weapons/${weaponType}/${data.name}/icon`}
                      alt={data.name + " icon"}
                      className="rounded-xl"
                    />
                  </figure>

                  <div className="card-body items-center text-center">
                    <h2 className="card-title">{data.name}</h2>
                    <p>{data.description}</p>
                  </div>
                  <div className="card-body items-center text-center">
                    <h3 className="card-title text-lg">
                      Skill: {data?.skill?.name}
                    </h3>
                    <p>
                      {Object.keys(data?.skill).length > 0 ? (
                        <>
                          {data?.skill?.ranks.reduce(
                            (description, rank, index) => {
                              return description.replace(
                                `{${index}}`,
                                rank[weaponRank]
                              );
                            },
                            data?.skill?.description
                          )}
                        </>
                      ) : (
                        "No skill available"
                      )}
                      {Object.keys(data?.skill).length > 0 && (
                        <div className="flex flex-col justify-center items-center my-5">
                          <label className="text-lg">
                            Weapon Rank: {parseInt(weaponRank) + 1}
                          </label>
                          <Slider
                            min={0}
                            max={4}
                            value={weaponRank}
                            onChange={(e) => setWeaponRank(e.target.value)}
                            className="w-1/3 text-secondary rounded-lg"
                          />
                        </div>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
