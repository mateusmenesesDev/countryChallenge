import { useEffect, useState } from "react";
import { api } from "../../api/api";
import { ICountries } from "../../Types/types";
import { Country } from "../Country";
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
  }, []);
  
  return (
    <section className="">
      <div className="my-12 w-full px-10 flex flex-col gap-8 md:flex-row md:items-center md:justify-between lg:px-36">
        <Input
          themeElementBg={themeElementBg}
          themeInputPlaceholder={themeInputPlaceholder}
        />
        <Filter themeElementBg={themeElementBg} />
      </div>
      <div className="flex flex-wrap gap-x-4 gap-y-8 lg:px-36">
        {countries.map(country => (
          <Country country={country} themeElementBg={themeElementBg}/>
        ))}
      </div>
    </section>
  );
}
