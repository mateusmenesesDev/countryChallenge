import { Theme } from "../../../Types/types";

interface Props extends Theme {
  getCountryName: (event: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
}

export function Input({ theme, getCountryName }: Props) {
  return (
    <div
      className={`${theme.elements} flex items-center rounded-md shadow-md lg:w-96`}
    >
      <i className="fa-solid fa-magnifying-glass ml-3"></i>
      <input
        type="text"
        placeholder="Search for a country"
        className={`${theme.elements} ${theme.inputPlaceholder} px-4 py-5 outline-none rounded-md w-full`}
        onChange={getCountryName}
      />
    </div>
  );
}
