import Navi from "./components/Navi"
import { Sidebar } from "./components/Sidebar"
import { Footer } from "./components/Footer"
import Flow from "./components/Flow"
import MermaidChart from "./components/MermaidChart"
import { Link } from "react-router-dom";


export const InputPage = () => {
    return (
        <>
            <header>
                <Navi />
                <Link to="/components/Enter">Login 페이지로 이동</Link>                
            </header>
            <Sidebar/>
            <main>
            <Flow/>
            </main>

        </>
    )
}