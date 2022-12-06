import { Countries } from "../../components/Countries";
import { Theme } from "../../Types/types";

export function Home({ theme }: Theme) {
  return <Countries theme={theme} />;
}
