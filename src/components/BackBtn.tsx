import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../contexts/Context';

export function BackBtn() {
  const { theme } = useContext(Context);
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1)}
      className={`${theme.elements} px-8 py-3 mb-10 outline-none rounded-md shadow-md`}
    >
      Voltar
    </button>
  );
}
