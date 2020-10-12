import React from 'react';
import {Provider} from 'react-redux'
import store from './redux/store'
import './App.css';
import CakeContainer from './components/CakeContainer';
import HooksCakeComponent from './components/HooksCakeComponent';
import IceCreamContainer from './components/iceCreamContainer';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <HooksCakeComponent></HooksCakeComponent>
       <CakeContainer/>
       <IceCreamContainer></IceCreamContainer>
    </div>
    </Provider>
  );
}

export default App;
