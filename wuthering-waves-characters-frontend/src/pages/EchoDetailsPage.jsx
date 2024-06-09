import Header from "../components/UI/Header";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Image from "../components/UI/Image";
import { fetchEcho } from "../api/http";
import { useQuery } from "@tanstack/react-query";
import LoadingIndicator from "../components/UI/LoadingIndicator";
import EchoSonataEffects from "../components/Echoes/EchoSonataEffects";

export default function EchoDetailsPage() {
  const { echo } = useParams();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["echo", echo],
    queryFn: () => fetchEcho({ echo }),
  });

  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <div
        className="flex flex-col items-center justify-center m-5"
        data-testid="characters-page"
      >
        <h1
          className="text-3xl font-bold text-center mt-5"
          data-testid="characters-title"
        >
          {echo}
        </h1>

        {isLoading && (
          <LoadingIndicator
            text="Loading echo..."
            type="spin"
            color="#000"
            height={50}
            width={50}
          />
        )}
        {isError && <p>{error.message}</p>}

        {data && (
          <>
            <div className="flex flex-col lg:flex-row justify-center items-center">
              <Image
                src="https://via.placeholder.com/250"
                alt="echo"
                width={250}
                height={250}
                className="border-4 border-accent rounded-full shadow-lg"
              />
              <div className="card-body">
                <div className="stats shadow w-full flex flex-col">
                  <div className="stat p-4 flex-1 text-sm md:text-base">
                    <h1 className="stat-title text-center sm:text-left">
                      Name
                    </h1>
                    <div className="stat-value text-center sm:text-left">
                      {data.name}
                    </div>
                  </div>
                  <div className="stat p-4 flex-1 text-sm md:text-base">
                    <div className="stat-title text-center sm:text-left">
                      Cost
                    </div>
                    <div className="stat-value text-center sm:text-left">
                      {data.cost}
                    </div>
                  </div>
                  <div className="stat p-4 flex-1 text-sm md:text-base">
                    <div className="stat-title text-center sm:text-left">
                      Cooldown
                    </div>
                    <div className="stat-value text-center sm:text-left">
                      {data.cooldown}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5 bg-primary text-primary-content p-16 rounded-lg">
              <h2 className="text-xl font-bold mb-2">Description:</h2>
              <p className="text-base">{data.description}</p>
              <h2 className="text-xl font-bold mt-5 mb-2">
                Possable sonata Effects:
              </h2>
              {data.sonataEffects.map((effect, index) => (
                <EchoSonataEffects key={index} effect={effect} />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="flex justify-center">
        <Link to="/echoes" className="btn btn-primary text-primary-content m-4">
          Back to Echoes
        </Link>
      </div>
    </main>
  );
}
