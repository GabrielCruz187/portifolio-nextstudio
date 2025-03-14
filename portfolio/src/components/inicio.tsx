import Link from "next/link";
import "../styles/inicio.css";

export default function Inicio() {
    return (
        <div className="inicio">
            <div className="conteudo-inicio">
                <h1 className="titulo-inicio">NextCode, Conectando empresas<br />
                ao futuro digital
                </h1>
                <p className="texto-inicio">Somos especialistas em <br />
                    desenvolvimento de Websites, <br />
                    sistemas interativos e aplicativos <br />
                    para negócios.
                </p>
                <Link href="#servicos">
                    <button className="botao-servicos">Nossos serviços</button>
                </Link>
            </div>
            <div className="iphone-inicio">
                <img src="iPhone.png" alt="Imagem do iPhone" />
            </div>
        </div>
    )
} 