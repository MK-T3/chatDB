import React, { useState, useEffect } from 'react';
import { Parser } from 'node-sql-parser';

function Sqlparser(){
    const [ast, setAst] = useState(null);

    useEffect(() => {
      const parser = new Parser();
      const ast = parser.astify('SELECT * FROM table');
      setAst(ast);
    }, []);
  
    return (
      <div>
        <pre>{ast && JSON.stringify(ast, null, 2)}</pre>
      </div>
    );
  }

  export default Sqlparser;