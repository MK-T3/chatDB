import Navi from "./components/Navi"
import { Sidebar } from "./components/Sidebar"
import { useState } from "react"

export const InputPage = () => {
    const [sidebar, setSidebar] = useState(false);

    return (
        <>
            <header>
                <Navi />
            </header>
            <Sidebar sidebar={sidebar} setSidebar={setSidebar}/>
        </>
    )
}