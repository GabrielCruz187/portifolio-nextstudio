import "../styles/QuemSomos.css";

export default function QuemSomos() {
    return (
        <div className="QuemSomos">
            <h2 className="TituloQuemSomos">Quem Somos</h2>
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
                        Olá! Meu nome é Gabriel Cruz, sou um desenvolvedor full stack, tenho 21 anos, atualmente estou cursando Análise e Desenvolvimento de Sistemas.<br />
                        Ao longo da minha jornada, adquiri habilidades em diversas tecnologias como Node.js, MongoDB, TypeScript, Next.js, TailwindCSS, SQL e JavaScript, o que me permite construir aplicações robustas e escaláveis tanto no front-end quanto no back-end. <br />
                        
                            
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
