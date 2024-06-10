import { useQuery } from "@tanstack/react-query";
import { fetchEchoSonataEffects } from "../../api/http";
import LoadingIndicator from "../UI/LoadingIndicator";

export default function EchoSonataEffects({ effect }) {
  const { data, error, isError, isLoading } = useQuery({
    queryKey: ["echoSonataEffects", effect],
    queryFn: () => fetchEchoSonataEffects({ effect }),
  });

  return (
    <div className="flex flex-col items-start max-w-screen-sm justify-center m-5">
      {isLoading && (
        <LoadingIndicator
          containerClassName="flex flex-col items-center justify-center m-5"
          text="Loading echo sonata effects..."
          type="spin"
          color="red"
          height={50}
          width={50}
        />
      )}
      {isError && <p>{error.message}</p>}
      {data && (
        <div className="space-y-4 bg-base-100 text-base-content shadow-md p-6 rounded-md">
          <div className="space-y-2 flex flex-row justify-start items-center">
            <div>
              <b className="text-lg">Name:</b> {data.name}
            </div>
          </div>

          <div className="space-y-2 flex flex-row justify-start items-center">
            <div>
              <b className="text-lg">Two-Piece Bonus:</b> {data.twoPiece}
            </div>
          </div>

          <div className="space-y-2 flex flex-row justify-start items-center">
            <div>
              <b className="text-lg">Five-Piece Bonus:</b> {data.fivePiece}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
