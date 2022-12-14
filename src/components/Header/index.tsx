import { useContext } from 'react';
import { Context } from '../../contexts/Context';
import { themes } from '../../utils/themes';

export function Header() {
  const { theme, setTheme } = useContext(Context);
  function changeTheme() {
    if (theme.bg === themes[1].bg) {
      setTheme(themes[0]);
    } else {
      setTheme(themes[1]);
    }
  }

  return (
    <header
      className={`flex px-4 py-10 justify-between items-center text-sm md:text-lg md:px-10 lg:px-36 ${theme.elements} shadow-md ${theme.text}`}
    >
      <h1 className='font-bold'>Where in the world?</h1>
      <div className='flex items-center gap-3 cursor-pointer'>
        <i className={theme.themeIcon} onClick={changeTheme}></i>
        <p onClick={changeTheme}>Dark Mode</p>
      </div>
    </header>
  );
}
