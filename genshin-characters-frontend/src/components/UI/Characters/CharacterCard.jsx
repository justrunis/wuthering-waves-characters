import { useQuery } from "@tanstack/react-query";
import { fetchCharacter } from "../../../api/http";
import constants from "../../../constants/constants";

export default function CharacterCard({ character }) {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["character", { character }],
    queryFn: () => fetchCharacter({ id: character }),
  });

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      {isLoading && <p>Loading...</p>}
      {isError && <p>{error.message}</p>}
      {data && (
        <div>
          <h2>{data.name}</h2>
          <img
            src={constants.URL + "characters/" + character + "/card"}
            alt={data.name}
            className="w-full h-96 object-cover"
          />
          <p>{data.description}</p>
        </div>
      )}
    </div>
  );
}
