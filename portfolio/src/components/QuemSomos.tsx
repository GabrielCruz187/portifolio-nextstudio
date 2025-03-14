import "../styles/QuemSomos.css";

export default function QuemSomos() {
    return (
        <div className="QuemSomos">
            <div className="TituloQuemSomos">
                <h2 className="TituloQuemSomos">Quem Somos</h2>
            </div>
            <div className="Eduardo">
                <div className="FotoEduardo">
                    <img src="Eduardo.jpg" alt="Foto de Eduardo Menegazzo Riboli" />
                </div>
                <div className="ConteudoEduardo">
                    <div className="NomeEduardo">
                        <h3>Eduardo Menegazzo Riboli</h3>
                    </div>
                    <div>
                        <p className="TextoNome">
                            Olá, meu nome é Eduardo Menegazzo Riboli, tenho 19 anos, <br />
                            sou um estudante da Atitus - Passo Fundo, <br />
                            cursando atualmente o 3º semestre de Ciências da Computação.
                        </p>
                    </div>
                    <div className="redes-sociais">
                        <a href="https://www.instagram.com/eduardo_menegazzo_/" target="_blank" rel="noopener noreferrer">
                            <img src="/instagram.png" alt="Instagram" className="redes" />
                        </a>
                        <a href="https://www.linkedin.com/in/eduardo-menegazzo-riboli-16265630a/" target="_blank" rel="noopener noreferrer">
                            <img src="/linkedin.png" alt="LinkedIn" className="redes" />
                        </a>
                        <a href="https://github.com/EduardoMenen" target="_blank" rel="noopener noreferrer">
                            <img src="/github.png" alt="GitHub" className="redes" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="Gabriel">
                <div className="ConteudoGabriel">
                    <div className="NomeGabriel">
                        <h3>Gabriel Cruz</h3>
                    </div>
                    <div className="Texto">
                        <p className="TextoNome">
                            Olá, meu nome é Gabriel Cruz, tenho 20 anos <br />
                            e estou cursando Análise e desenvolvimento de sistemas.
                        </p>
                    </div>
                    <div className="redes-sociais">
                        <a href="https://www.instagram.com/gabriell___cruzz/" target="_blank" rel="noopener noreferrer">
                            <img src="/instagram.png" alt="Instagram" className="redes" />
                        </a>
                        <a href="https://www.linkedin.com/in/gabriel-silva-cruz-67160526a/" target="_blank" rel="noopener noreferrer">
                            <img src="/linkedin.png" alt="LinkedIn" className="redes" />
                        </a>
                        <a href="https://github.com/GabrielCruz187" target="_blank" rel="noopener noreferrer">
                            <img src="/github.png" alt="GitHub" className="redes" />
                        </a>
                    </div>
                </div>
                <div className="FotoGabriel">
                    <img src="Gabriel.png" alt="Foto de Gabriel Cruz" />
                </div>
            </div>
        </div>
    );
}
