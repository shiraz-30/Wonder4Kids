import React from "react"
import { ChakraProvider } from '@chakra-ui/react'
import 'bootstrap/dist/css/bootstrap.min.css';
import theme from './theme';
import Body from "./components/Body/Body.js"
import Header from "./components/Header/Header.js"
import Login from "./components/Login/Login.js"
import Nvbar from "./components/Navbar/Nvbar.js"
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <ChakraProvider theme={theme}>
//       <h1> Working </h1>
//       <Nvbar/>
      <Login/>
      <Footer />
    </ChakraProvider>
  )
}

export default App;
