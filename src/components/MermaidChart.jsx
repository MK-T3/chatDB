import React from 'react';
import Mermaid from './mermaid';

function MermaidChart() {
    const chart = `
    classDiagram
    User "1" --> "*" Order : has
    class User {
      +Integer id
      +String name
      +String email
    }
    class Order {
      +Integer id
      +Integer userId
      +String product
    }
    `;
  
    return (
      <div className="MermaidChart">
        <Mermaid chart={chart} />
      </div>
    );
  }
  
  export default MermaidChart;