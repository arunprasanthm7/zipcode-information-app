import { useState } from "react";

export function PostalCode({ onZipCodeSubmit }, { clearLocationInfo }) {
  const [zipCode, setZipCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onZipCodeSubmit(zipCode);
  };
  return (
    <form className="flex gap-4 items-center">
      <label htmlFor="zipCodeInput" className="text-base font-semibold ">
        PostalCode[IN] :
      </label>
      <input
        type="text"
        id="zipCodeInput"
        value={zipCode}
        onChange={(e) => setZipCode(e.target.value)}
        placeholder="Enter the PostalCode..."
        required
        className="text-[14px] pl-1 h-6 border border-black rounded "
      />
      <button
        onClick={handleSubmit}
        className="px-1.5 py-[3px] bg-black text-green-300 font-semibold text-[12px] rounded cursor-pointer"
      >
        Submit
      </button>
      <button
        onClick={clearLocationInfo}
        className="px-2 py-[3px] w-11 bg-black text-green-300 font-semibold text-[12px] rounded cursor-pointer  "
      >
        Clear
      </button>
    </form>
  );
}
