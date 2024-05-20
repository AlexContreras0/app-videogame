import "../styles/EditVideogameComponent.css";
import "../styles/colors.css";
import { useState } from "react";
import { format } from "date-fns";
import Link from "next/link";

const platforms = ["PC", "PS5", "Nintendo Switch", "Mobile"];
const statuses = ["Finalizado", "En proceso", "Por jugar"];

export default function EditVideogameComponent({
  videogame,
  onUpdate,
  onDelete,
}) {
  const [editedData, setEditedData] = useState({
    ...videogame,
    started_at: videogame.started_at
      ? format(new Date(videogame.started_at), "yyyy-MM-dd")
      : "",
    finished_at: videogame.finished_at
      ? format(new Date(videogame.finished_at), "yyyy-MM-dd")
      : "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    onUpdate(editedData);
  };

  const handleDelete = () => {
    onDelete(editedData);
  };

  const today = new Date();
  const maxDate = format(today, "yyyy-MM-dd");

  return (
    <div className="container">
      <Link
        className="sideButton"
        href={{
          pathname: "/",
        }}
      >
        <svg
          className="sideButtonIcon"
          width="30"
          height="30"
          fill="currentColor"
          class="bi bi-arrow-left"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
          />
        </svg>
      </Link>
      <div className="form">
        <p className="title">{editedData.name}</p>
        <div className="inputContainer">
          <label className="label">Nombre</label>
          <input
            className="input"
            type="text"
            name="name"
            value={editedData.name}
            onChange={handleChange}
          />
        </div>
        <div className="inputContainer">
          <label className="label">Plataforma</label>
          <select
            className="inputSelect"
            name="platform"
            value={editedData.platform}
            onChange={handleChange}
          >
            {platforms.map((platform) => (
              <option className="options" key={platform} value={platform}>
                {platform}
              </option>
            ))}
          </select>
        </div>
        <div className="inputContainer">
          <label className="label">Portada</label>
          <span className="labelSpan">*Introduce el enlace de la imagen</span>
          <input
            className="input"
            type="text"
            name="cover"
            value={editedData.cover}
            onChange={handleChange}
          />
        </div>
        <div className="inputContainer">
          <label className="label">Estado</label>
          <select
            className="inputSelect"
            name="status"
            value={editedData.status}
            onChange={handleChange}
          >
            {statuses.map((status) => (
              <option className="options" key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>
        <div className="inputContainer">
          <label className="label">Comienzo</label>
          <input
            className="input"
            type="date"
            name="started_at"
            value={editedData.started_at}
            onChange={handleChange}
          />
        </div>
        {editedData.status === "Finalizado" && (
          <div className="inputContainer">
            <label className="label">Finalización</label>
            <input
              className="input"
              type="date"
              name="finished_at"
              max={maxDate}
              value={editedData.finished_at}
              onChange={handleChange}
            />
          </div>
        )}

        <div className="inputContainer">
          <label className="label">Puntuación</label>
          <input
            className="input"
            type="number"
            name="rating"
            max={10}
            min={0}
            value={editedData.rating}
            onChange={handleChange}
          />
        </div>
        <div className="inputContainer">
          <label className="label">Comentario</label>
          <textarea
            className="textarea"
            name="comment"
            maxLength={100}
            value={editedData.comment}
            onChange={handleChange}
          />
        </div>

        <div className="endButtons">
          <Link
            className="link-confirm"
            onClick={handleSubmit}
            href={{
              pathname: "/",
            }}
          >
            Guardar
          </Link>
          <Link
            className="link-confirm"
            onClick={handleDelete}
            href={{
              pathname: "/",
            }}
          >
            Borrar
          </Link>
        </div>
      </div>
    </div>
  );
}
