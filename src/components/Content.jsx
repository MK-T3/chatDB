// 부모 컴포넌트
import { Sidebar } from './Sidebar';

function ParentComponent() {
  const [contentValue, setContentValue] = useState(null);

  return (
    <Sidebar setParentContentValue={setContentValue} />
  );
}
