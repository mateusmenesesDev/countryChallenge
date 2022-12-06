import { Route, Routes, useRoutes } from "react-router-dom";
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
  return useRoutes([
    { path: "/", element: <Home theme={theme} /> },
    { path: "detalhes/:country", element: <Detail /> },
    { path: "*", element: <NotFound /> },
  ]);
}
