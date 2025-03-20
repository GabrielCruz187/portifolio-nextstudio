import React, { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import "../styles/contato.css";

export default function Contato() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        business: "",
        serviceType: "",
        foundUs: "",
        message: "",
    });

    const [serviceOptionsVisible, setServiceOptionsVisible] = useState(false);
    const [foundUsVisible, setFoundUsVisible] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div className="Contato">
            <div className="ConteudoContato">
                <div className="TituloContato">
                    <h3>
                        Vamos construir algo <br />
                        incrível juntos! <br />
                        Fale conosco e dê o próximo <br />
                        passo no digital.
                    </h3>
                </div>
                <div className="Chamada">
                    <img src="phone-call.png" alt="Ícone de chamada" className="IconeContato" />
                    <p className="TextoContato">(54) 99706-1550</p>
                </div>
                <div className="Email">
                    <img src="email.png" alt="Ícone de Email" className="IconeContato" />
                    <p className="TextoContato">nextcodestudios@gmail.com</p>
                </div>
                <div className="Instagram">
                    <a href="https://www.instagram.com/eduardo_menegazzo_/" target="_blank" rel="noopener noreferrer">
                        <img src="/instagram.png" alt="Instagram" className="IconeContato" />
                    </a>
                    <p className="TextoContato">NextCode Studios</p>
                </div>
                <div className="Linkedin">
                    <a href="https://www.linkedin.com/in/eduardo-menegazzo-riboli-16265630a/" target="_blank" rel="noopener noreferrer">
                        <img src="/linkedin.png" alt="LinkedIn" className="IconeContato" />
                    </a>
                    <p className="TextoContato">NextCode Studios</p>
                </div>
            </div>

            <div className="Formulario">
                <div className="FormularioContato">
                    <h3 className="TituloForm">Converse com a gente</h3>
                    <form action="https://formspree.io/f/mgvavbkp" method="POST">
                        <div className="CampoFormulario">
                            <label>Nome Completo</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                                placeholder="Digite seu nome completo"
                            />
                        </div>
                        <div className="CampoFormulario">
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                placeholder="Digite seu Email"
                            />
                        </div>
                        <div className="CampoFormulario">
                            <label>Telefone</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                required
                                placeholder="Digite seu telefone"
                            />
                        </div>
                        <div className="CampoFormulario">
                            <label>Seu Negócio</label>
                            <input
                                type="text"
                                name="business"
                                value={formData.business}
                                onChange={handleInputChange}
                                placeholder="Informe qual é seu negócio"
                            />
                        </div>
                        <div className="CampoFormulario">
                            <label>Tipo de Serviço</label>
                            <div
                                className="Dropdown"
                                onClick={() => setServiceOptionsVisible(!serviceOptionsVisible)}
                            >
                                <span>{formData.serviceType || "Selecione o tipo de serviço"}</span>
                                <div className="Chevron">
                                    {serviceOptionsVisible ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                </div>
                                {serviceOptionsVisible && (
                                    <ul>
                                        <li onClick={() => setFormData((prev) => ({ ...prev, serviceType: "Desenvolvimento Web" }))}>
                                            Desenvolvimento Web
                                        </li>
                                        <li onClick={() => setFormData((prev) => ({ ...prev, serviceType: "Landing Pages" }))}>
                                            Landing Pages
                                        </li>
                                        <li onClick={() => setFormData((prev) => ({ ...prev, serviceType: "Aplicativos" }))}>
                                            Aplicativos Mobile
                                        </li>
                                    </ul>
                                )}
                            </div>
                        </div>
                        <div className="CampoFormulario">
                            <label>Onde nos encontrou?</label>
                            <div
                                className="Dropdown"
                                onClick={() => setFoundUsVisible(!foundUsVisible)}
                            >
                                <span>{formData.foundUs || "Selecione onde nos encontrou"}</span>
                                <div className="Chevron">
                                    {foundUsVisible ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                </div>
                                {foundUsVisible && (
                                    <ul>
                                        <li onClick={() => setFormData((prev) => ({ ...prev, foundUs: "Google" }))}>
                                            Google
                                        </li>
                                        <li onClick={() => setFormData((prev) => ({ ...prev, foundUs: "Instagram" }))}>
                                            Instagram
                                        </li>
                                        <li onClick={() => setFormData((prev) => ({ ...prev, foundUs: "LinkedIn" }))}>
                                            LinkedIn
                                        </li>
                                        <li onClick={() => setFormData((prev) => ({ ...prev, foundUs: "Indicação" }))}>
                                            Indicação
                                        </li>
                                    </ul>
                                )}
                            </div>
                        </div>
                        <div className="CampoFormulario">
                            <label>Mensagem</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                required
                                placeholder="Digite a sua mensagem para nós"
                            />
                        </div>
                        <button type="submit">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
