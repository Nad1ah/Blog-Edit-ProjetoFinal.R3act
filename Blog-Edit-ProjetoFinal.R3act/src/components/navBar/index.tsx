import { Navbar, NavbarBrand } from "reactstrap";

export function BarNav() {
  return (
    <Navbar className="my-2" color="secondary" dark>
      <NavbarBrand href="/">Blog Edit.</NavbarBrand>
    </Navbar>
  );
}
