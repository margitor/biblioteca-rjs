import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "../components/Layout";
import Home from "../containers/Home";
import Listado from "../containers/Listado"
import Libros from "../containers/Libros"

function App() {
  return (
    <>
    <BrowserRouter>
    <Layout>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/listado" element={<Listado />}></Route>
        <Route exact path="/libros" element={<Libros />}></Route>
      </Routes>
    </Layout>
    </BrowserRouter>
    
    </>
  );
}

export default App;
