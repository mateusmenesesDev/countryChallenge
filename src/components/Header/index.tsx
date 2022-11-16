interface props {
  changeTheme: () => void,
  themeIcon: string,
  themeElementBg: string,
}

export function Header({ changeTheme, themeIcon, themeElementBg }: props) {
  return (
    <header className={`flex px-4 py-10 justify-between items-center text-sm md:text-lg md:px-10 lg:px-36 ${themeElementBg} shadow-md`}>
      <h1 className="font-bold">Where in the world?</h1>
      <div className="flex items-center gap-3">
        <i className={themeIcon} onClick={changeTheme}></i>
        <p onClick={changeTheme}>Dark Mode</p>
      </div>
    </header>
  );
}
