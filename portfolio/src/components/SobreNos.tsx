import React from 'react';

export default function SobreNos() {
    return (
        <div className="SobreNos">
            <div>
                <h2 className="TituloSobreNos">Sobre Nós</h2>
                <p className="TextoSobreNos">
                    Somos uma software house especializada no desenvolvimento de websites, sistemas e aplicativos sob medida, <br />
                    ajudando empresas de todos os portes a expandirem sua presença digital e otimizarem seus processos. <br />
                    Nosso foco é entregar soluções tecnológicas inovadoras, intuitivas e de alto desempenho, <br />
                    garantindo que cada projeto atenda às necessidades específicas de nossos clientes. <br />
                    Nosso time é formado por profissionais apaixonados por tecnologia, sempre em busca das melhores práticas <br />
                    e das mais modernas ferramentas do mercado. <br />
                    Trabalhamos com comprometimento e excelência para entregar resultados que impulsionam negócios. <br />
                    Entre em contato e transforme sua ideia em realidade!
                </p>
                    <div className="RedesSobreNos">
                        <a href="https://www.instagram.com/nextcode_studios/</div>" target="_blank" rel="noopener noreferrer">
                        <img src="/instagram.png" alt="Instagram" className="redes" /> </a>
                    </div>
            </div>
            <div className="macbook">
                <img src="MacBook.png" alt="MacBook" />
            </div>
        </div>
    )
}