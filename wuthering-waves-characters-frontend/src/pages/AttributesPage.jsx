import Header from "../components/UI/Header";
import AttributesCard from "../components/Attributes/AttributesCard";
import { useQuery } from "@tanstack/react-query";
import { fetchAttributes } from "../api/http";
import LoadingIndicator from "../components/UI/LoadingIndicator";
import ErrorIndicator from "../components/UI/ErrorIndicator";

export default function AttributesPage() {
  const { data, error, isError, isLoading } = useQuery({
    queryKey: ["attributes"],
    queryFn: fetchAttributes,
  });

  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-col items-center justify-center p-6 flex-grow">
        <h1 className="text-3xl font-bold text-center">
          Attributes in Wuthering Waves
        </h1>
        <p className="text-xl text-center">
          Select an attribute to view the characters that have it.
        </p>
        {isLoading && (
          <LoadingIndicator
            className="m-5"
            width={50}
            height={50}
            color="gray"
          />
        )}
        {isError && (
          <ErrorIndicator
            title="An error occurred"
            message={error?.message || "Failed to fetch attributes."}
          />
        )}
        {data && data?.attributes ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 m-5">
            {data.attributes.map((attribute, index) => (
              <AttributesCard
                key={attribute}
                attribute={attribute}
                delay={index * 0.2}
              />
            ))}
          </div>
        ) : (
          <div>
            <ErrorIndicator
              title="No attributes found"
              message="Failed to fetch attributes."
            />
          </div>
        )}
      </div>
    </main>
  );
}
