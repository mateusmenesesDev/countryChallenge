import { ICountries } from "../../../Types/types";

interface props {
  country: ICountries;
  themeElementBg: string;
}
export function Country({ country, themeElementBg }: props) {
  return (
    <div className="mx-auto ">
      {country !== undefined && (
        <div className={`${themeElementBg} rounded-lg w-80 h-96 shadow-md`}>
          <div className="w-full h-52">
            <img
              src={country.flags.png}
              alt=""
              className="w-full h-full rounded-t-lg"
            />
          </div>
          <div className="py-10 px-4">
            <div className="font-extrabold text-xl mb-2">
              {country.name.common}
            </div>
            <div>
              <p>
                <b>Population:</b> {country.population}
              </p>
              <p>
                <b>Region:</b> {country.region}
              </p>
              <p>
                <b>Capital:</b> {country.capital}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
