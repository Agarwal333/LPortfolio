import React from "react";
import styled from "styled-components";

const CreditSection = styled.div`
  height: 300px;
  scroll-snap-align: center;
  width: 70%;
  color: brown;
  margin-left: auto;
  margin-right: auto;
  font-size: 15px;
  
`
const CreditContainer = styled.div`
  height: 50vw;
  scroll-snap-align: center;
  width: 100vw;
  margin-left: auto;
  margin-right: auto;
  font-size: 15px;
  background: linear-gradient(225deg, #d4fdb7 0%, #e0b7fd 100%);
`

const Credits = ()=>{
    return(
    <CreditContainer>
        <CreditSection>
            <h4>Credits</h4>
            <p>Model Information:
            <br/>
                * title:	Ordinary Behavior | Laptop
            <br/>
                * source:	https://sketchfab.com/3d-models/ordinary-behavior-laptop-05ad8ea622744bd69aeefacb41ea466c
            <br/>
                * author:	gozdemrl (https://sketchfab.com/gozdemrl)

                Model License:
                <br/>
                <br/>* license type:	CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
                <br/>* requirements:	Author must be credited. Commercial use is allowed.</p>
                This work is based on "Ordinary Behavior | Laptop" (https://sketchfab.com/3d-models/ordinary-behavior-laptop-05ad8ea622744bd69aeefacb41ea466c) by gozdemrl (https://sketchfab.com/gozdemrl) licensed under CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
            <p>
            3d Laptop model used from sketchfab website and the license is attached in the source code folder
            <p>For second model the original model's some parts were not used in source code and only some parts were displayed.</p>
            <br/>
            Command: npx gltfjsx@6.1.4 laptop1.gltf --transform
            <br/>
            Author: gozdemrl (https://sketchfab.com/gozdemrl)
            <br/>
            License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
            <br/>
            Source: https://sketchfab.com/3d-models/ordinary-behavior-laptop-05ad8ea622744bd69aeefacb41ea466c
            <br/>
            Title: Ordinary Behavior | Laptop
            </p>
        </CreditSection>
    </CreditContainer>
    )
}

export default Credits;