import { useContext } from 'react';
import { Countries } from '../../components/Countries';
import { Context } from '../../contexts/Context';

export function Home() {
  const { theme } = useContext(Context);
  const body = document.querySelector('body');
  body?.setAttribute('style', `background-color:${theme.bg}`);
  return (
    <main>
      <Countries />
    </main>
  );
}
