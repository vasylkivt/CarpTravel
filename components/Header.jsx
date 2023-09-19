import Image from "next/image";
import logo from "/public/assets/logo.png";
import NavBar from "./NavBar";

function Header() {
  return (
    <>
      <header className="absolute top-9 z-10 w-full">
        <div className="container">
          <nav className="flex items-center justify-between">
            <Image className="w-16" priority={true} src={logo} alt="logotype" />

            <NavBar />
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
