import React from 'react';
import ReactDOM from 'React-dom/client';
import App from './App';
import Context from './context';

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Context>
               <App/>
        </Context>
    </React.StrictMode>

)