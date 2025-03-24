import Link from "next/link";
import { useRouter } from "next/router";
import { Link as ScrollLink } from "react-scroll";


export default function Footer() {
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
    <footer className="footer">
    <div className="cima">
        <img src="iPhone.png" alt="Imagem do iPhone" className="iphone" />
        <div className="conteudo">
        <h2 className="TituloFooter">
            Interessado no que <br /> podemos fazer <br /> para seu negócio?
        </h2>
        <Link href="/contato">
            <button className="BotaoFooter">Entre em Contato</button>
        </Link>
        </div>
    </div>

    <div className="baixo">
        <Link href="/" passHref>
        <div className="logo2">
            <img src="/logo2.png" alt="Minha Software House" className="logo2-img" />
        </div>
        </Link>

        <nav>
        <ul className="nav-link">
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

        <div className="redesFooter">
            <img src="instagram.png" alt="Logo do Instagram" className="redes" />
            <img src="linkedin.png" alt="Logo do LinkedIn" className="redes" />
        </div>
    </div>

    <div className="direitos">
        © 2025 NextCode Studios. Todos os direitos reservados.
    </div>
    </footer>
);
}
