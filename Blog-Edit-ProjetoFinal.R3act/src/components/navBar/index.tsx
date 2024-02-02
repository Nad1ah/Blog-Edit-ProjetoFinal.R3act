import { Navbar, NavbarBrand } from "reactstrap";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

export default function BarNav({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar className="mb-4" color="black" dark>
        <NavbarBrand href="/">
          <img
            src="https://weareedit.io/wp-content/uploads/2021/05/logo-edit.svg"
            alt="logo"
            onClick={() => navigate("/")}
            style={{ cursor: "pointer" }}
          />
          STUDENT BLOG.
        </NavbarBrand>
      </Navbar>
      {children}
    </div>
  );
}
