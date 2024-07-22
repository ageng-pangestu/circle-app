import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "50px",
        backgroundColor: "lightgray",
        width: "100%",
      }}
    >
      <h1>{props.pageName}</h1>

      <ul style={{ display: "flex", gap: "10px" }}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="#">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
