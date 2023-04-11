import React from "react";
import AppRoutes from "./AppRoutes";
import { Provider } from 'react-redux';
import store from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './redux/store';
function App() {
  return (
    <Provider store={store}>
       <PersistGate loading={null} persistor={persistor}>
    <AppRoutes />
    </PersistGate>
    </Provider>
  );
}

export default App;
