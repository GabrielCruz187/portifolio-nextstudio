import "../styles/portfolio.css";

const catalogo = [
    {
        titulo: "Catálogo de Carros",
        descricao: "Sistema responsivo para loja de carros com painel administrativo.",
        imagem: "/LojaDeCarros.png",
        link: "https://catalogo-carros.com",
    },
];

const site = [
    {
        titulo: "Site Institucional Next Code",
        descricao: "Site institucional para a empresa NextCode Studios.",
        imagem: "/Nextcode.png",
        link: "https://esquadrias.com",
    },
];

export default function Portfolio() {
    return (
        <div className="portfolio">
            <div>
                <h2 className="TituloPortfolio">Nossos Trabalhos</h2>
                <p className="TextoPortfolio">
                    Um pequeno portfólio, <br />
                    com alguns dos nossos trabalhos já realizados.
                </p>
            </div>

            <div className="Container">
                <div className="Catalogo">
                    {catalogo.map((projeto, index) => (
                        <a 
                            key={index} 
                            href={projeto.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="projeto-card"
                        >
                            <div className="card-container">
                                <img src={projeto.imagem} alt={projeto.titulo} className="projeto-imagem" />
                                <div className="projeto-info">
                                    <h3>{projeto.titulo}</h3>
                                    <p>{projeto.descricao}</p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

                <div className="SiteInstitucional">
                    {site.map((projeto, index) => (
                        <a 
                            key={index} 
                            href={projeto.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="projeto-card"
                        >
                            <div className="card-container">
                                <img src={projeto.imagem} alt={projeto.titulo} className="projeto-imagem" />
                                <div className="projeto-info">
                                    <h3>{projeto.titulo}</h3>
                                    <p>{projeto.descricao}</p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
