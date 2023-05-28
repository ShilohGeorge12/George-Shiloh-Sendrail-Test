import { useState } from 'react'
import {BrowserRouter as  Router, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import { Box, Flex } from '@chakra-ui/react';
import Nav from './pages/navBar';
import SideBar from './pages/sideBar';
import ErrorBoundary from './container/Error';


function App() {
  const [count, setCount] = useState(0)

  return (
    <Flex w='100%' h='100vh' as='section'>
      <Router>
        <SideBar />
        <Flex w={'full'} direction={'column'}>
          <Nav />
          <Routes>
            <Route path='/' element={
              <ErrorBoundary>
                <Home />
              </ErrorBoundary>
              } />
          </Routes>
        </Flex>
      </Router>
    </Flex>
  )
}

export default App
