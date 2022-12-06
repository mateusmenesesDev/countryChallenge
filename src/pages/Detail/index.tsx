import { useParams } from "react-router-dom";
import { BackBtn } from "../../components/BackBtn";
import { ICountries, Theme } from "../../Types/types";
import axios from "axios";
import { useEffect, useState } from "react";

export function Detail({ theme }: Theme) {
  const [country, setCountry] = useState<ICountries | null>(null);
  const { countryName } = useParams();
  async function getCountry() {
    const response = await axios.get(
      `https://restcountries.com/v3.1/name/${countryName}`
    );
    const country: ICountries = response.data[0];
    setCountry(country);
  }
  useEffect(() => {
    getCountry();
  }, [countryName]);
  function getNativeName() {
    if (country !== null) {
      const nativeNameKey = Object.keys(country.name.nativeName);
      return country.name.nativeName[nativeNameKey[0]].common;
    }
  }
  console.log(getNativeName());
  return (
    <div className="mx-4 my-10 md:px-10 lg:px-36">
      <BackBtn theme={theme} />
      {country !== null && (
        <div className="grid gap-10 md:grid-cols-2">
          <div className="w-full">
            <img
              src={country.flags.png}
              alt="country flag"
              className="w-full"
            />
          </div>
          <div>
            <div className="font-bold text-2xl">{country.name.common}</div>
            <ul>
              <li>Native Name: {getNativeName()}</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
