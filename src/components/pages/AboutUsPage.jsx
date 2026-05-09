import { Link } from "react-router";

export default function AboutUsPage() {
  return (
    <section>
      <h2>Quiénes somos</h2>
      <p>HTML de la página de quienes somos</p>
      <ul>
        <li>
          <Link to="/profes/ivanico">Ivanico</Link>
        </li>
        <li>
          <Link to="/profes/amparo">Amparo</Link>
        </li>
        <li>
          <Link to="/profes/tomasa">Tomasa</Link>
        </li>
      </ul>
    </section>
  );
}
