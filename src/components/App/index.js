// == Import npm
import React from 'react';
import './style.scss'

import WidgetMeteo from '../MeteoWidget';

// == Composant
const App = () => (
  <div >
    
   <WidgetMeteo city="anger" code={49}/>
  </div>
);

// == Export
export default App;