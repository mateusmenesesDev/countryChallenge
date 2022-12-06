import { Link, useNavigate, useParams } from "react-router-dom";
import { BackBtn } from "../../components/BackBtn";
import { Theme } from "../../Types/types";

export function Detail({ theme }: Theme) {
  const params = useParams();
  const navigate = useNavigate();

  return (
    <div className="mx-4 my-10 md:px-10 lg:px-36">
      <BackBtn theme={theme} />
      <h1>{params.country}</h1>
    </div>
  );
}
