import React from 'react';
import {Provider, defaultTheme} from '@adobe/react-spectrum';
import Heating from './Screens/Heating';
import Landing from './Screens/Landing';

function App() {
  return (
    <>
      <Provider theme={defaultTheme}>
        <Heating />
      </Provider>
    </>
  );
}

export default App;
