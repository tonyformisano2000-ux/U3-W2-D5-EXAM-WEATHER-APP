import "bootstrap/dist/css/bootstrap.min.css";
import ToolBar from "./components/ToolBar";
import Detail from "./components/Detail";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <ToolBar></ToolBar> */}
        <Routes>
          {/* <Route path="/" element={HomePage}></Route> */}{" "}
          <Route path="/" element={<ToolBar />}></Route>
          <Route path="/detail/:lat/:lon" element={<Detail />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
