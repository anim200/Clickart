
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import {store,persistor} from "./redux/store";

import { PersistGate } from 'redux-persist/integration/react'
import App from './App.jsx';
import ErrorBoundary from './errorboundary.jsx';



// Import createRoot from 'react-dom/client'


ReactDOM.createRoot(document.getElementById('root')).render(
  <ErrorBoundary>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>

  </ErrorBoundary>
  
);