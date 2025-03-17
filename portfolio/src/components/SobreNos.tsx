import "../styles/SobreNos.css"

export default function SobreNos() {
    return (
        <div className="SobreNos">
            <div>
                <h2 className="TituloSobreNos">Sobre Nós</h2>
                <p className="TextoSobreNos">Somos Eduardo e Gabriel, uma equipe especializada no desenvolvimento de websites, <br />
                    sistemas e aplicativos para empresas locais. Entendemos as necessidades <br />
                    do mercado e criamos soluções digitais sob medida para cada negócio. <br />
                    <br />
                    Nosso objetivo é ajudar empresas a crescerem no mundo digital, <br />
                    oferecendo tecnologia de qualidade, interfaces modernas e funcionalidades <br />
                    que fazem a diferença. Se você precisa de um site profissional, um sistema personalizado <br />
                    ou um aplicativo eficiente, estamos prontos para transformar sua ideia em realidade.</p>
                    <div className="RedesSobreNos">
                        <a href="https://www.instagram.com/eduardo_menegazzo_/" target="_blank" rel="noopener noreferrer">
                            <img src="/instagram.png" alt="Instagram" className="redes" />
                        </a>
                        <a href="https://www.linkedin.com/in/eduardo-menegazzo-riboli-16265630a/" target="_blank" rel="noopener noreferrer">
                            <img src="/linkedin.png" alt="LinkedIn" className="redes" />
                        </a>
                    </div>
            </div>
            <div className="macbook">
                <img src="MacBook.png" alt="MacBook" />
            </div>
        </div>
    )
}