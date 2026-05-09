import { useParams } from "react-router";

export default function Error404Page() {
  const params = useParams();

  console.log(params);

  return (
    <section>
      <h2>No encontrado</h2>
      <p>Error 404: Página no encontrada</p>
      <a href="/">Volver al contenido</a>
    </section>
  );
}
