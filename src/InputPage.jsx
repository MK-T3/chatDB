import Navi from "./components/Navi"
import { Sidebar } from "./components/Sidebar"
import { Footer } from "./components/Footer"
import Flow from "./components/Flow"
import MermaidChart from "./components/MermaidChart"


export const InputPage = () => {
    return (
        <>
            <header>
                <Navi />                
            </header>
            <Sidebar/>
            <main>
            <Flow/>
            </main>

        </>
    )
}