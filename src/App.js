import React from "react";
import Componentroute from "./ComponentRoute";
import{ BrowserRouter} from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
function App() {
  return (
      <BrowserRouter>
        <Componentroute/>
      </BrowserRouter>
  );
}

export default App;
