import { Puck } from '@measured/puck';
import '@measured/puck/puck.css';

import './App.css';
import { puckConfig } from '@/config/puck.config';

function App() {
  return (
    <div className="w-screen h-screen">
      <Puck
      viewports={[
        {
          "width": 360,
          "height": "auto",
          "icon": "Smartphone",
          "label": "Small"
        },
        {
          "width": 768,
          "height": "auto",
          "icon": "Tablet",
          "label": "Medium"
        },
        {
          "width": 1440,
          "height": "auto",
          "icon": "Monitor",
          "label": "Large"
        }
      ]}
        config={puckConfig}
        data={{}}
      />
    </div>
  );
}

export default App;
