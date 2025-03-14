import Inicio from "@/components/inicio";
import QuemSomos from "@/components/QuemSomos";
import SobreNos from "@/components/SobreNos";

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
        </>
    )
}
