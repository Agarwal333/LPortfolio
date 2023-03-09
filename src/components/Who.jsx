import React from "react";
import { Canvas } from "@react-three/fiber";
import styled from "styled-components";
import '../App.css';
import { OrbitControls, Stage } from "@react-three/drei";
import LaptopParts from "./LaptopParts";
import TiltCard from "./TiltCard";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  gap: 50px;
  background: url("/images/Bg2.png");
  background-repeat: no-repeat;
  background-size: cover;
`
const Left = styled.div`
  height: 100vh;
  width: 50%;
  margin-top: 80px;
  scroll-snap-align: center;
  display: flex;
`

const Right = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`


const Who = ()=>{
    return(
        <Section>
          <Left>
              <TiltCard/>
          </Left>
          <Right>
          <Canvas>
                <Stage environment="city" intensity={0.6}>
                    <LaptopParts/>
                </Stage>
                <OrbitControls enableZoom={false} autoRotate/>
            </Canvas> 
          </Right>
        </Section>
    )
}

export default Who;