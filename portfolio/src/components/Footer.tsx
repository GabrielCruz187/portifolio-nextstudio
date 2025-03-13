import Link from "next/link";
import '../styles/footer.css';

export default function Footer() {
    return (
    <footer className="footer">
    <div className="cima">
        <img src="iPhone.png" alt="Imagem do iPhone" className="iphone"/>
        <div className="conteudo">
            <h2 className="TituloFooter">Interessado no que <br /> podemos fazer <br /> para seu negócio?</h2>
            <Link href="/contato">
                <button className="contato">Entre em Contato</button>
            </Link>
        </div>
    </div>

    <div className="baixo">
        <div className="logo2">
        <img src="/logo2.png" alt="Minha Software House" className="logo2-img" />
        </div>

            <nav>
                <ul className="nav-link">
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

            <div className="redes">
                <img src="instagram.png" alt="Logo do Instagram" className="redes"/>
                <img src="linkedin.png" alt="Logo do LinkedIn" className="redes"/>
            </div>
        </div>

        <div className="direitos">
        © 2025 NextCode Studios. Todos os direitos reservados.
        </div>
    </footer>
    );
}