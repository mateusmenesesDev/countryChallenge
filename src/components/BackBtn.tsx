import { useNavigate } from "react-router-dom";
import { Theme } from "../Types/types";

export function BackBtn({ theme }: Theme) {
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
