import { Link, useParams } from "react-router";

const infoProfes = [
  {
    id: 1,
    nombre: "Ivanico",
    materia: "Tecnología y Robótica",
    años_experiencia: 4,
    estilo_docente: "Gamificación extrema",
    comentario_alumno:
      "Sus clases son básicamente un torneo de eSports pero con circuitos eléctricos. Siempre trae café en un termo de Star Wars.",
    estado: "Activo",
  },
  {
    id: 2,
    nombre: "Amparo",
    materia: "Lengua y Literatura",
    años_experiencia: 28,
    estilo_docente: "Clásico con autoridad",
    comentario_alumno:
      "Si no llevas los márgenes rectos, prepárate. Pero nadie explica el Siglo de Oro como ella; hace que parezca un chisme de barrio.",
    estado: "Cerca de la jubilación",
  },
  {
    id: 3,
    nombre: "Tomasa",
    materia: "Biología y Geología",
    años_experiencia: 15,
    estilo_docente: "Práctico y de campo",
    comentario_alumno:
      "La mitad de sus clases son en el huerto del instituto. Tiene una colección de fósiles que ella misma encontró y no permite que nadie los toque sin guantes.",
    estado: "En excursión",
  },
];

export default function ProfesPage() {
  const params = useParams();

  console.log(params);

  const profe = infoProfes.find(
    (profeObj) => profeObj.nombre.toLocaleLowerCase() === params.nombre,
  );

  console.log(profe);

  if (!profe) {
    return (
      <div>
        <p>Profe no encontrado</p>
        <Link to="/quienes-somos">Volver a la página de quienes somos</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>Esta es la página del profe {profe.nombre}</h2>
      <p>Materia: {profe.materia}</p>
      <p>Años de experiencia: {profe.años_experiencia}</p>
      <p>Último comentario de una alumna: {profe.comentario_alumno}</p>
    </div>
  );
}
