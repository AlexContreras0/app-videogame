import "../styles/VideogameList.css";
import "../styles/colors.css";
import Link from "next/link";
import { format } from "date-fns";

export default function VideogamesList(props) {
  const {
    id,
    name,
    platform,
    started_at,
    finished_at,
    rating,
    cover,
    comment,
    status,
  } = props;

  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <img
          className="flip-card-front"
          src={cover}
          alt={`Videogame cover of: ${name}`}
        />
        <div className="flip-card-back">
          <div className="mainInfoContainer">
            <h2 className="title">{name}</h2>
            <p className="platform">{platform}</p>
          </div>
          <div className="secondaryInfoContainer">
            <p className="secondaryInfo">
              Empezado el:{" "}
              <span>
                {started_at
                  ? format(new Date(started_at), "dd/MM/yyyy")
                  : "Fecha desconocida"}
              </span>
            </p>
            {status === "Finalizado" ? (
              <p className="secondaryInfo">
                Completado el:{" "}
                <span>
                  {finished_at
                    ? format(new Date(finished_at), "dd/MM/yyyy")
                    : "Fecha desconocida"}
                </span>
              </p>
            ) : null}

            <p className="secondaryInfo">
              Estado: <span>{status}</span>
            </p>
            <p className="secondaryInfo">
              Puntuación: <span>{rating}/10</span>
            </p>
            <p className="secondaryInfoComment">
              Comentario: <span>{comment}</span>
            </p>
          </div>

          <Link
            className="link"
            href={{
              pathname: "/EditVideogame",
              query: {
                id: id,
              },
            }}
          >
            Editar
          </Link>
        </div>
      </div>
    </div>
  );
}
