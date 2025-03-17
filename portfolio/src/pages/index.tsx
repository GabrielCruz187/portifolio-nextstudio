import Inicio from "@/components/inicio";
import QuemSomos from "@/components/QuemSomos";
import SobreNos from "@/components/SobreNos";
import Portfolio from "@/components/portfolio";
import Feedback from "@/components/feedback";
import Servicos from "@/components/servicos";

export default function Home() {
    return (
        <>
            <div className="Distancia">
                <Inicio />
            </div>
            <div className="Distancia">
                <QuemSomos />
            </div>
            <div className="Distancia">
                <SobreNos />
            </div>
            <div className="Distancia">
                <Portfolio />
            </div>
            <div className="Distancia">
                <Feedback />
            </div>
            <div className="Distancia">
                <Servicos />
            </div>
        </>
    )
}
