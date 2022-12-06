import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Detail } from "../pages/Detail";
import { NotFound } from "../pages/NotFound";

interface Props {
  theme: {
    bg: string;
    elements: string;
    text: string;
    inputPlaceholder: string;
    themeIcon: string;
  };
}

export function RouteList({ theme }: Props) {
  return (
    <Routes>
      <Route path="/" element={<Home theme={theme} />} />
      <Route path="detalhes/:country" element={<Detail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
