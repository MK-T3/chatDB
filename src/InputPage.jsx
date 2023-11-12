import Navi from "./components/Navi"
import { Sidebar } from "./components/Sidebar"
import { useState } from "react"
import ERDiagram from "./components/ERDiagram";
import MermaidProvider from './components/MermaidProvider';


export const InputPage = () => {
    const [sidebar, setSidebar] = useState(false);

    return (
        <>
            <header>
                <Navi />               
            </header>
            <MermaidProvider>
            <div style={{ display: 'flex' }}>  {/* Flexbox 사용 */}
                {/* Sidebar */}
                <div style={{ flex: 1 }}>
                    <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
                </div>

                {/* Main Content */}
                <div style={{ flex: 3, backgroundColor: 'White', padding: '0px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    {/* MainContent 컴포넌트 혹은 직접 내용 추가 */}
                    <div id="diagramToSave">
                    <ERDiagram/>
                    </div>
                </div>
            </div>
            </MermaidProvider>

        </>
    )
}