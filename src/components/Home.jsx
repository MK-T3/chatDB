import { Canvas,useFrame } from "@react-three/fiber";
import { Experience } from "./Experience";
import { Menu } from "./Menu";
import { ScrollControls, Scroll } from "@react-three/drei";
import { Interface } from "./Interface";
import { useRef, useState } from "react";
import { Cursor } from "./Cursor";
import { InputPage } from "../InputPage";

export const Home = () => {
    const [menuOpened, setMenuOpened] = useState(false);
    return (
        <>
            <Canvas shadows camera={{ position: [3, 3, 3], fov: 30 }}>
                <color attach="background" args={["#e6e7ff"]} />
                <ScrollControls pages={2} damping={0.1}>
                    <Experience menuOpened={menuOpened} />
                    <Scroll html>
                        <Interface />
                    </Scroll>
                </ScrollControls>
            </Canvas>
            <Menu menuOpened={menuOpened} setMenuOpened={setMenuOpened} />
            <Cursor/>
        </>
    )
}