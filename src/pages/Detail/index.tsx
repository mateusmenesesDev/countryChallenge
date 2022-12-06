import { Link, useNavigate, useParams } from "react-router-dom";

export function Detail() {
  const params = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate(-1)}>Voltar</button>
      <h1>{params.country}</h1>
    </div>
  );
}
