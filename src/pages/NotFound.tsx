import { useContext } from 'react';
import { BackBtn } from '../components/BackBtn';
import { Context } from '../contexts/Context';

export function NotFound() {
  const { theme } = useContext(Context);
  const body = document.querySelector('body');
  body?.setAttribute('style', `background-color:${theme.bg}`);
  return (
    <div
      className={`${theme.text} flex justify-center items-center h-96 text-9xl`}
    >
      <BackBtn />
      PÁGINA NÃO ENCONTRADA
    </div>
  );
}
