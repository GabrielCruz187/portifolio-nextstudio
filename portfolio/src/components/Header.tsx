import Link from "next/link";
import { useRouter } from "next/router";
import { Link as ScrollLink } from "react-scroll";
import "../styles/header.css";

export default function Header() {
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
  };

  return (
    <header className="header">
      <Link href="/" passHref>
        <img src="/logo.png" alt="Minha Software House" className="logo-img" />
      </Link>
      <nav>
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
      </nav>
      <Link href="/contato">
        <button className="contato">Entre em Contato</button>
      </Link>
    </header>
  );
}
