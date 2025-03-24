import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Link as ScrollLink } from "react-scroll";


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const handleNavigation = (id: string) => {
    if (router.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/#${id}`).then(() => {
        setTimeout(() => {
          const element = document.getElementById(id);
          if (element) {
            window.scrollTo({
              top: element.offsetTop - 50,
              behavior: "smooth",
            });
          }
        }, 500);
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <Link href="/" passHref>
        <img src="/logo.png" alt="Minha Software House" className="logo-img" />
      </Link>

      <div
        className={`menu-icon ${isMenuOpen ? "open" : ""}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div className="menu-line"></div>
        <div className="menu-line"></div>
        <div className="menu-line"></div>
      </div>
      <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
        <ul className="nav-links">
          <li>
            <ScrollLink
              to="SobreNos"
              smooth={true}
              duration={500}
              offset={-80}
              onClick={() => handleNavigation("SobreNos")}
              className="header-nav-item"
            >
              Sobre nós
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="portfolio"
              smooth={true}
              duration={500}
              offset={-60}
              onClick={() => handleNavigation("portfolio")}
              className="header-nav-item"
            >
              Portfólio
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="servicos"
              smooth={true}
              duration={500}
              offset={-50}
              onClick={() => handleNavigation("servicos")}
              className="header-nav-item"
            >
              Serviços
            </ScrollLink>
          </li>
        </ul>
        <div className="contatoMenu">
          <Link href="/contato">
            <button
              className="contato"
              onClick={() => setIsMenuOpen(false)} 
            >
              Entre em Contato
            </button>
          </Link>
        </div>
      </nav>
      <div className="ContatoHeader">
        <Link href="/contato">
            <button className="contato">Entre em Contato</button>
        </Link>
        </div>
    </header>
  );
}
