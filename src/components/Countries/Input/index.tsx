interface props {
  themeElementBg: string,
  themeInputPlaceholder: string,
  getCountryName: (event: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
}

export function Input({themeElementBg, themeInputPlaceholder, getCountryName}:props) {
  return (
    <div className={`${themeElementBg} flex items-center rounded-md shadow-md lg:w-96`}>
      <i className="fa-solid fa-magnifying-glass ml-3"></i>
      <input 
        type="text" 
        placeholder="Search for a country" 
        className={`${themeElementBg} ${themeInputPlaceholder} px-4 py-5 outline-none rounded-md`}
        onChange={getCountryName}
      />
    </div>
  );
}
