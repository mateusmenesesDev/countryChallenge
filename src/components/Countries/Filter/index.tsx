interface props {
  themeElementBg: string,
  getRegion: (event: React.ChangeEvent<HTMLSelectElement>) => void,
  region: string
}

export function Filter({themeElementBg, getRegion, region}:props) {
  return (
    <div className="w-40">
      <select 
        name="region" 
        id="region" 
        className={`${themeElementBg} py-3 px-4 rounded-md w-full outline-none shadow-md cursor-pointer`} 
        onChange={getRegion} 
        value={region}
      >
        <option value="vazio">Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
}