// components/Navbar.tsx
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="btn-ghost btn text-xl normal-case">
        <span>Victoria</span>
        <span className="text-primary">Rentals</span>
      </Link>
    </div>
  );
};
