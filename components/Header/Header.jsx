import Image from 'next/image';
import logo from '/public/images/logo.png';
import NavBar from './components/NavBar';

function Header() {
  return (
    <header className="absolute top-9 z-10 w-full">
      <h1></h1>
      <div className="container relative flex items-center justify-between">
        <Image className="w-16" priority={true} src={logo} alt="logotype" />

        <NavBar />
      </div>
    </header>
  );
}

export default Header;
