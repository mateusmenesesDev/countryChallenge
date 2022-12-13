import { Header } from './components/Header';
import { useState } from 'react';
import { RouteList } from './routes/RouteList';
import { themes } from './utils/themes';

function App() {
  const [theme, setTheme] = useState(themes[0]);
  function changeTheme() {
    if (theme.bg === themes[1].bg) {
      setTheme(themes[0]);
    } else {
      setTheme(themes[1]);
    }
  }
  const body = document.querySelector('body');
  body?.setAttribute('style', `background-color:${theme.bg}`);
  return (
    <div className={`${theme.text}`}>
      <Header
        changeTheme={changeTheme}
        themeIcon={theme.themeIcon}
        themeElementBg={theme.elements}
      />
      <RouteList theme={theme} />
    </div>
  );
}

export default App;
