// == Import npm
import React from 'react';
import './style.scss'

import WidgetMeteo from '../MeteoWidget';

// == Composant
const App = () => (
  <div >
    
   <WidgetMeteo city="Paris" code={75000}/>
  </div>
);

// == Export
export default App;