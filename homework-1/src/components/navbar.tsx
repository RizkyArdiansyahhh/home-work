import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#1C352D",
        padding: "1rem",
      }}
    >
      <div>
        <h2
          style={{
            color: "#FFFFF0",
          }}
        >
          IdShop.
        </h2>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
        }}
      >
        <Link
          style={{
            color: "#FFFFF0",
          }}
          to={"/"}
        >
          Home
        </Link>
        <Link
          style={{
            color: "#FFFFF0",
          }}
          to={"/products"}
        >
          Products
        </Link>
        <Link
          style={{
            color: "#FFFFF0",
          }}
          to={"/about"}
        >
          About
        </Link>
        <Link
          style={{
            color: "#FFFFF0",
          }}
          to={"/contact"}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
