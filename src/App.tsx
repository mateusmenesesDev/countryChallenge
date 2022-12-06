import { Header } from "./components/Header";
import { useState } from "react";
import { Countries } from "./components/Countries";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Detail } from "./pages/Detail";
import { NotFound } from "./pages/NotFound";

function App() {
  const themes = [
    {
      bg: "hsl(207, 26%, 17%)",
      elements: "bg-dark-elements",
      text: "text-dark-text",
      inputPlaceholder: "placeholder-white",
      themeIcon: "fa-solid fa-moon",
    },

    {
      bg: "hsl(0, 0%, 98%)",
      elements: "bg-light-elements",
      text: "text-light-text",
      inputPlaceholder: "placeholder-black",
      themeIcon: "fa-regular fa-moon",
    },
  ];
  const [theme, setTheme] = useState(themes[0]);
  function changeTheme() {
    if (theme.bg === themes[1].bg) {
      setTheme(themes[0]);
    } else {
      setTheme(themes[1]);
    }
  }
  document.body.style.backgroundColor = theme.bg;
  return (
    <div className={`${theme.bg} ${theme.text}`}>
      <Header
        changeTheme={changeTheme}
        themeIcon={theme.themeIcon}
        themeElementBg={theme.elements}
      />
      <Routes>
        <Route path="/" element={<Home theme={theme} />} />
        <Route path="detalhes" element={<Detail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
