import React, { useEffect, useContext } from 'react';
import MermaidContext from './MermaidContext';
import mermaid from 'mermaid';

const ERDiagram = (props) => {
    const { mermaidValue, setMermaidValue } = useContext(MermaidContext);
    console.log(mermaidValue);
    
    const removeMermaidTagFromStart = (content) => {
        if (!content) return "";
        return content.replace(/^```\mermaid\s+/, "").replace(/\s+```$/, "");
    }

    const processedMermaidValue = removeMermaidTagFromStart(mermaidValue);

    useEffect(() => {
        mermaid.contentLoaded();
    }, [mermaidValue]);


    return <div className="mermaid">{processedMermaidValue}</div>;
};

mermaid.initialize({ startOnLoad: false });

export default ERDiagram;
