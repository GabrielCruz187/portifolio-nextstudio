import Inicio from "@/components/inicio";
import QuemSomos from "@/components/QuemSomos";
import SobreNos from "@/components/SobreNos";
import Portfolio from "@/components/portfolio";
import Feedback from "@/components/feedback";
import Servicos from "@/components/servicos";

export default function Home() {
    return (
        <div>
            <section id="inicio">
                <Inicio />
            </section>
            <section id="quemSomos">
                <QuemSomos />
            </section>
            <section id="sobreNos">
                <SobreNos />
            </section>
            <section id="portfolio">
                <Portfolio />
            </section>
            <section id="feedback">
                <Feedback />
            </section>
            <section id="servicos">
                <Servicos />
            </section>
        </div>
    );
}
