import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

function Mermaid({ chart }) {
  const ref = useRef(null);

  useEffect(() => {
    mermaid.initialize({ startOnLoad: true });
    if (ref.current) {
      mermaid.contentLoaded();
      mermaid.init(undefined, ref.current);
    }
  }, [chart]);

  return (
    <div className="mermaid" ref={ref}>
      {chart}
    </div>
  );
}

export default Mermaid;