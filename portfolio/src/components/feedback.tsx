import React from 'react';



export default function Feedback() {
    return (
        <div className="Feedback">
            <div>
                <h2 className="TituloFeedback">O que nossos clientes dizem sobre nós</h2>
            </div>
            <div className="ContainerFeedback">
                <div className="TituloContainer">
                    <img src="ala.jpg" alt="Foto Do Cliente" />
                    <h3>Alã Menegazzo</h3>
                    <p>Alã Automóveis, Não-me-Toque</p>
                </div>
                <div className="Depoimento">
                    <p>&quot;Profissionais excelentes! Desenvolveram nosso site <br />
                        exatamente como queríamos, com um design moderno e fácil de usar. <br />
                        O suporte também foi incrível. Recomendo!&quot;</p>
                </div>
            </div>
        </div>
    )
}
