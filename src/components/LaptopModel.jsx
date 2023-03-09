import React from "react";
import { Canvas } from "@react-three/fiber";
import '../App.css';
import { OrbitControls, Stage } from "@react-three/drei";
import Laptop1 from "./Laptop1";


const LaptoModel = ()=>{
    return(
        <>
           <Canvas>
                <Stage environment="city" intensity={0.6}>
                    <Laptop1/>
                </Stage>
                <OrbitControls enableZoom={false} autoRotate/>
            </Canvas> 
        </>
    )
}

export default LaptoModel;