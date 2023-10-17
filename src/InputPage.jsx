import Navi from "./components/Navi"
import { Sidebar } from "./components/Sidebar"
import { Footer } from "./components/Footer"
import Flow from "./components/Flow"

export const InputPage = () => {
    return (
        <>
            <header>
                <Navi />                
            </header>
            <main>
                <Flow/>
            </main>

        </>
    )
}