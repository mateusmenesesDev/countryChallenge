import { useEffect, useState } from "react";
import { api } from "../../api/api";
import { ICountries } from "../../Types/types";
import { Filter } from "./Filter";
import { Input } from "./Input";

interface props {
  themeElementBg: string;
  themeInputPlaceholder: string;
}


export function Countries({ themeElementBg, themeInputPlaceholder }: props) {
  const [countries, setCountries] = useState<ICountries[] | []>([]);

  async function getCountries() {
    const request = await api.getCountries();
    setCountries(request);
    return request;
  }

  useEffect(() => {
    getCountries();
    // setCountries(await getCountries());
  }, []);
  
  return (
    
    <section className="my-12 w-full px-10 flex flex-col gap-8 md:flex-row md:items-center md:justify-between lg:px-36">
      <Input
        themeElementBg={themeElementBg}
        themeInputPlaceholder={themeInputPlaceholder}
      />
      <Filter themeElementBg={themeElementBg} />
      {countries.map(country => (
        <h1>{country.name.common}</h1>
      ))}
    </section>
  );
}
