import Link from "next/link";
import "../styles/servicos.css";

export default function Servicos() {
    return (
        <div className="servicos">
            <div className="NossosServicos">
                <h2 className="TituloServicos">Nossos Serviços</h2>
                <Link href="/contato">
                    <button className="BotaoServico">Entre em contato</button>
                </Link>
            </div>
            <div>
                <p className="TextoServicos">Somos profissionais na criação e desenvolvimento de websites, sistemas e aplicativos </p>
            </div>
            <div className="Website">
                <div className="ConteudoWebsite">
                    <h2 className="TituloServicos">Websites e Presença Online</h2>
                    <ul className="ConteudoServico">
                        <li>Sites institucionais (empresas, lojas, profissionais autônomos)</li>
                        <li>Landing pages (para campanhas de marketing e vendas)</li>
                        <li>E-commerce (lojas virtuais completas)</li>
                        <li>Blogs e portais de notícias</li>
                    </ul>
                </div>
                <img src="ecommerce.png" alt="Icone ilustrativo de um eCommerce" className="IconesServicos"/>
            </div>
            <div className="Sistema">
                <div className="ConteudoSistema">
                    <h2 className="TituloServicos">Sistemas Web e Automação</h2>
                    <ul className="ConteudoServico">
                        <li>Painéis administrativos (gestão de clientes, produtos, pedidos, etc.)</li>
                        <li>Sistemas de agendamento (para clínicas, salões, academias)</li>
                    </ul>
                </div>
                <img src="software.png" alt="Icone ilustrativo de um SoftWare" className="IconesServicos"/>
            </div>
            <div className="Aplicativo">
                <div className="ConteudoAplicativo">
                    <h2 className="TituloServicos">Aplicativos Mobile</h2>
                    <ul className="ConteudoServico">
                        <li>Aplicativos empresariais (para controle interno ou atendimento a clientes)</li>
                        <li>Apps de delivery e pedidos (restaurantes, mercados)</li>
                    </ul>
                </div>
                <img src="smartphone.png" alt="Icone ilustrativo de um Smartphone" className="IconesServicos"/>
            </div>
        </div>
    )
}