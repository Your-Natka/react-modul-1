import pilots from '../pilots.json';
import { PageTitle } from './PageTitle';
import { PilotList } from './PilotList';

export const App = () => {
  return (
    <div>
      <PageTitle text="Best pilots!" />
      <PilotList items={pilots} />
    </div>
  );
};

export default App;
