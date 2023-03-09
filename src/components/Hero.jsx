import React from "react";
import styled from "styled-components";
import '../App.css';
import LaptoModel from "./LaptopModel";
import HiName from "./HiName";





const Section = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  scroll-snap-align: center;
  background: url("/images/Bg1.png");
  background-repeat: no-repeat;
  background-size: cover;
`
const LaptopContainer = styled.div`
    height: 100vh;
    width: 100vw;
    margin-left: auto;
    margin-right: auto;
    }
`


const Hero = ()=>{
    return(
        <>  
            <Section className="HeroContainer">
                <HiName/>
                <LaptopContainer>
                    {/* <Lakhan/> */}
                    <LaptoModel/>
                    {/* <Test/> */}
                </LaptopContainer>
            </Section>
        </>
    )
}

export default Hero;