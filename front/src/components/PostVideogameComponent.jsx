import "../styles/EditVideogameComponent.css";
import "../styles/colors.css";
import { useState } from "react";
import { format } from "date-fns";
import Link from "next/link";

const platforms = ["PC", "PS5", "Nintendo Switch", "Mobile"];
const statuses = ["Finalizado", "En proceso", "Por jugar"];

export default function PostVideogameComponent({ onPost }) {
  const [formData, setFormData] = useState({
    name: "",
    platform: platforms[0],
    cover: "",
    status: statuses[0],
    started_at: "",
    finished_at: "",
    rating: 0,
    comment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onPost(formData);
  };

  const today = new Date();
  const maxDate = format(today, "yyyy-MM-dd");

  return (
    <div className="container">
      <Link className="sideButton" href={{ pathname: "/" }}>
        <svg
          className="sideButtonIcon"
          width="30"
          height="30"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
          />
        </svg>
      </Link>
      <div className="form">
        <div className="title">
          {formData.name ? formData.name : <p>Crear videojuego</p>}
        </div>

        <form onSubmit={handleSubmit}>
          <div className="inputContainer">
            <label className="label">Nombre</label>
            <input
              className="input"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="inputContainer">
            <label className="label">Plataforma</label>
            <select
              className="inputSelect"
              name="platform"
              value={formData.platform}
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
              value={formData.cover}
              onChange={handleChange}
            />
          </div>
          <div className="inputContainer">
            <label className="label">Estado</label>
            <select
              className="inputSelect"
              name="status"
              value={formData.status}
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
              value={formData.started_at}
              onChange={handleChange}
            />
          </div>
          {formData.status === "Finalizado" && (
            <div className="inputContainer">
              <label className="label">Finalización</label>
              <input
                className="input"
                type="date"
                name="finished_at"
                max={maxDate}
                value={formData.finished_at}
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
              value={formData.rating}
              onChange={handleChange}
            />
          </div>
          <div className="inputContainer">
            <label className="label">Comentario</label>
            <textarea
              className="textarea"
              name="comment"
              maxLength={100}
              value={formData.comment}
              onChange={handleChange}
            />
          </div>
          <div className="endButtons">
            <button type="submit" className="link-confirm">
              Guardar
            </button>
            <Link className="link-confirm" href={{ pathname: "/" }}>
              Cancelar
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
