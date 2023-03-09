
import './App.css';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Who from './components/Who';
import Works from './components/Works';
import styled from "styled-components";
import Credits from './components/Credits';

const Container = styled.div`
  scroll-snap-type: y mandatory;
  scroll-behaviour: smooth;
  overflow-y: auto;
  height: 100vh;
  color: white;
  background-repeat: no-repeat;
  background-size: cover;
  overflow-X: hidden;
`



function App() {
  return (
    <Container>
      <Hero/>
      <Who/>
      <Works/>
      <Contact/>
      <Credits/>
    </Container>
  );
}

export default App;
