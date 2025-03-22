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
                            Olá, meu nome é Eduardo Menegazzo Riboli, <br />
                            sou um desenvolvedor Front-End. Tenho 19 anos <br />
                            e sou estudante de Ciências da Computação na Atitus<br />
                            Passo Fundo. Sou especialista em diversas tecnologias <br />
                            como JavaScript, TypeScript, React e Next, oque me permite <br />
                            desenvolver interfaces inovadoras e de alta performance.
                            
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
                        Olá, meu nome é Gabriel Cruz, sou um desenvolvedor full stack, <br /> 
                        tenho 21 anos, atualmente estou cursando Análise e <br /> 
                        desenvolvimento de sistemas. Ao longo da minha jornada, <br /> 
                        adquiri habilidades em diversas tecnologias como Node.js, <br /> 
                        MongoDB, TypeScript, Next.js, TailwindCSS, SQL e JavaScript, <br /> 
                        o que me permite construir aplicações robustas e escaláveis <br /> 
                        tanto no front-end quanto no back-end.
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
