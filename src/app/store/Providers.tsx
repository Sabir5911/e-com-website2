"use client";
import { Provider } from "react-redux";
import {store } from "./store";
// import { PersistGate } from "redux-persist/integration/react";
const Providers = ({ children }: { children: React.ReactNode }) => {
  return<>
    <Provider store={store}>
      
      
    {/* <PersistGate persistor={presistore}> */}
      

      {children}
    
    
    </Provider>;



    

  </>
  
  

  
};

export default Providers;