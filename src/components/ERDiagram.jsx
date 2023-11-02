import React, { useEffect, useContext } from 'react';
import MermaidContext from './MermaidContext';
import mermaid from 'mermaid';

const ERDiagram = (props) => {
    const { mermaidValue, setMermaidValue } = useContext(MermaidContext);
    
    const removeMermaidTagFromStart = (content) => {
        if (!content) return "";
        // Remove everything before classDiagram including any whitespaces and the mermaid code block syntax (```\mermaid)
        const pattern = /.*?(?=classDiagram)/s;
        return content.replace(pattern, "").replace(/^```\s*mermaid\s*/, "").replace(/\s*```$/, "");
    }
    
    const processedMermaidValue = removeMermaidTagFromStart(mermaidValue);

    useEffect(() => {
        if (!mermaidValue) {
            mermaid.initialize({ startOnLoad: false });
        }
        else {
            mermaid.initialize({ startOnLoad: true });
            mermaid.contentLoaded();
        }
    }, [mermaidValue]);


    return <div className="mermaid">{processedMermaidValue}</div>;
};


export default ERDiagram;