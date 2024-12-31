
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {store,persistor} from "./redux/store";
import { Provider } from "react-redux";




import { PersistGate } from 'redux-persist/integration/react'
import ErrorBoundary from './errorboundary.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
 <ErrorBoundary>
  <Provider store={store}>
    <PersistGate loading="null" persistor={persistor}>
    <App />

    </PersistGate>
 


  </Provider>
  


 </ErrorBoundary>
   
    
  
)
