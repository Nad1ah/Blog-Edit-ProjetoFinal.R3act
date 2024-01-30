import { Navbar, NavbarBrand } from "reactstrap";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

export default function BarNav({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar className="mb-4" color="secondary" dark>
        <NavbarBrand
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
          href="/"
        >
          Blog Edit.
        </NavbarBrand>
      </Navbar>
      {children}
    </div>
  );
}
