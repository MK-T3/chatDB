import { Canvas, useFrame } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Menu } from "./components/Menu";
import { ScrollControls, Scroll } from "@react-three/drei";
import { Interface } from "./components/Interface";
import { useRef, useState } from "react";
import { Cursor } from "./components/Cursor";
import { InputPage } from "./InputPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";

function App() {
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path={"/"} element={<Home/>}></Route>
      <Route path={"/InputPage"} element={<InputPage/>}></Route>
    </Routes>
  </BrowserRouter>
      {/*<h1 style={{ position: 'absolute', top: 50, left: 40, fontSize: '15px', color: 'Black' }}>ChatDB</h1>*/}
    </>
  );
}

export default App;
