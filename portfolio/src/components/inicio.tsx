import { Link as ScrollLink } from "react-scroll";


export default function Inicio() {
    return (
        <div className="inicio">
            <div className="conteudo-inicio">
                <h1 className="titulo-inicio">
                NextCode, Conectando empresas<br />
                ao futuro digital
                </h1>
                <p className="texto-inicio">
                Somos especialistas em <br />
                desenvolvimento de Websites, <br />
                sistemas interativos e aplicativos <br />
                para negócios.
                </p>
                <ScrollLink
                to="servicos"
                smooth={true}
                duration={500}
                offset={-60}
                >
                <button className="BotaoInicio">Nossos serviços</button>
                </ScrollLink>
            </div>
            <div className="iphone-inicio">
                <img src="iPhone.png" alt="Imagem do iPhone" />
            </div>
        </div>
    );
    }
