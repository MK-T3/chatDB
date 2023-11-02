import React, { useEffect } from 'react';
import mermaid from 'mermaid';

const ERDiagram = (props) => {
    const { mermaidValue } = props;
    console.log(mermaidValue);

    useEffect(() => {
        mermaid.initialize({ startOnLoad: true });
        mermaid.contentLoaded();
    }, [mermaidValue]);

    const removeMermaidTagFromStart = (content) => {
        if (!content) return "";
        return content.replace(/^```\mermaid\s+/, "");
    }

    const processedMermaidValue = removeMermaidTagFromStart(mermaidValue);

    return <div className="mermaid">{processedMermaidValue}</div>;
};

export default ERDiagram;
