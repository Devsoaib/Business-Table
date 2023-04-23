import { Fragment } from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import FullscreenLoader from "./components/MasterLayout/FullScreenLoader";
import ProductList from "./pages/ProductList";



function App() {
  return (
    <Fragment>
    <BrowserRouter>
        <Routes>
                <Route path="/" element={<ProductList></ProductList>}></Route>
        </Routes>
    </BrowserRouter>
    <FullscreenLoader/>

    <Toaster
          position="bottom-center"
          reverseOrder={false}
      />
</Fragment>
  );
}

export default App;
