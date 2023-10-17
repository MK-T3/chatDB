import ReactFlow, { Controls, Background } from 'reactflow';
import 'reactflow/dist/style.css';
import { Sidebar } from "./Sidebar"

const edges = [{ id: '1-2', source: '1', target: '2', label: 'to the', type: 'step' }];

const nodes = [
  {
    id: '1',
    position: { x: 0, y: 0 },
    data: { label: 'Hello' },
    type: 'input',
  },
  {
    id: '2',
    data: { label: 'World' },
    position: { x: 100, y: 100 },
  },
];

export default function Flow() {
  const divStyle = {
    width: '100%', 
    height: '100%',
    zIndex: 1
  };
  return (
    <div style={ divStyle }>
      <ReactFlow nodes={nodes} edges={edges}>
      <Background />
        <Controls />
      <Sidebar/>
      </ReactFlow>
    </div>
  );
}

