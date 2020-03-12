import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import { store } from "../src/components/scenes/Bot/Bot/chat";


import * as serviceWorker from './serviceWorker';
import App from './App';





<<<<<<< HEAD

ReactDOM.render(<App />, document.getElementById('root'));
=======
ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>, 
document.getElementById('root'));
>>>>>>> e4f75fb89b987f11f16a7d2566e0f963e8058534

serviceWorker.unregister();

