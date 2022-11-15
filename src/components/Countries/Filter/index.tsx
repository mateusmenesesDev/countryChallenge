interface props {
  themeElementBg: string;
}

export function Filter({themeElementBg}:props) {
  return (
    <div className="w-40">
      <select name="region" id="region" className={`${themeElementBg} py-3 px-4 rounded-md w-full outline-none`}>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
}