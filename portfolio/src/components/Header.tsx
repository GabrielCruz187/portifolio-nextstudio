import Link from "next/link";
import "../styles/header.css";

export default function Header() {
  return (
    <header className="header">
      <img src="/logo.png" alt="Minha Software House" className="logo-img" />
      <nav>
        <ul className="nav-links">
          <li>
            <Link href="#sobre" className="header-nav-item">Sobre nós</Link>
          </li>
          <li>
            <Link href="#portifolio" className="header-nav-item">Portfólio</Link>
          </li>
          <li>
            <Link href="#servicos" className="header-nav-item">Serviços</Link>
          </li>
        </ul>
      </nav>
        <Link href="/contato">
          <button className="contato">Entre em Contato</button>
        </Link>
    </header>
  );
}
