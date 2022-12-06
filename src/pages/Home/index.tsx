import { Countries } from "../../components/Countries";

interface Props {
  theme: {
    bg: string;
    elements: string;
    text: string;
    inputPlaceholder: string;
    themeIcon: string;
  };
}
export function Home({ theme }: Props) {
  return (
    <Countries
      themeElementBg={theme.elements}
      themeInputPlaceholder={theme.inputPlaceholder}
    />
  );
}
