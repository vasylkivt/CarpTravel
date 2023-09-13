import Image from "next/image";
import logo from "../public/assets/logo.png";
import MobileMenu from "./MobileMenu";
import NavBar from "./NavBar";

function Header() {
  return (
    <>
      <header className="absolute w-full z-10 top-9">
        <div className="container">
          <nav className="flex justify-between items-center">
            <Image
              className="w-16 "
              priority={true}
              src={logo}
              alt="logotype"
            />
            <NavBar className="hidden tablet:flex" />
          </nav>
        </div>
      </header>
      <MobileMenu />
    </>
  );
}

export default Header;

// const Header = () => (
//   <header className="absolute w-full z-10 top-9">
//     <div className="container">
//       <nav className="flex justify-between">
//         <Image className="w-16 " priority={true} src={logo} alt="logotype" />
//         <p onClick={toggle}>MENU</p>
//         <ul className="">
//           <li>
//             <Link to="gallery" spy={true} smooth={true} duration={500}>
//               gallery
//             </Link>
//           </li>
//           <li>
//             <Link to="contacts" spy={true} smooth={true} duration={500}>
//               contacts
//             </Link>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   </header>
// );

// export default Header;
