import { Header } from "./components/Header";
import { useState } from "react";

function App() {
  const themes = [
    {
      bg: "bg-dark",
      elements: "bg-dark-elements",
      text: "text-dark-text",
      input: "",
      themeIcon: "fa-solid fa-moon",
    },

    {
      bg: "bg-light",
      elements: "bg-light-elements",
      text: "text-light-text",
      input: "bg-light-input",
      themeIcon: "fa-regular fa-moon",
    },
  ];
  // console.log(themes[0] === themes[1])
  const [theme, setTheme] = useState(themes[0]);
  function changeTheme() {
    if (theme.bg === themes[1].bg) {
      setTheme(themes[0]);
    } else {
      setTheme(themes[1]);
    }
  }

  return (
    <div className={`${theme.bg} ${theme.text}`}>
      <Header changeTheme={changeTheme} themeIcon={theme.themeIcon} themeElementBg={theme.elements}/>
      
    </div>
  );
}

export default App;
