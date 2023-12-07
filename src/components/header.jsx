import Home from "../pages/home";

export default function Header({ title }) {
  return (
    <div className="header timeline">
      <h2>{title}</h2>
      <img src="src/images/icone-group.png" alt="" className="top-tweets" />
    </div>
  );
}
