import "../App.css";

export function LocationInfo({ locationData }) {
  return (
    <div className="flex gap-4">
      <div className="text-base font-semibold ">Location Information :</div>
      {locationData ? (
        <div className="flex flex-col gap-1 justify-center p-5 h-[100px] w-[260px]  bg-white rounded border border-black relative ">
          <div className="flex text-[12px] gap-1 text-sm ">
            <div className="font-semibold">Country :</div>
            <div>{locationData.country}</div>
          </div>
          <div className="flex text-[12px] gap-1 text-sm ">
            <div className="font-semibold">State :</div>
            <div>{locationData.places[0].state}</div>
          </div>
          <div className="flex text-[12px] gap-1 text-sm ">
            <div className="font-semibold">Place Name :</div>
            <div>{locationData.places[0].placename}</div>
          </div>
        </div>
      ) : (
        <p className="text-red-500 ">No location information available!</p>
      )}
    </div>
  );
}
