import { useState } from 'react';
import {BrowserRouter as  Router, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import { Flex } from '@chakra-ui/react';
import Nav from './pages/navBar';
import SideBar from './pages/sideBar';
import ErrorBoundary from './container/Error';
import Courier from './pages/courier';
import Payroll from './pages/payroll';
import NotFound from './container/NotFound';
import Transaction from './pages/transaction';
import Settings from './pages/settings';


function App() {
  // const [count, setCount] = useState(0)

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
            <Route path='courier' element={
              <ErrorBoundary>
                <Courier />
              </ErrorBoundary>
            } />
            <Route path='payroll' element={
              <ErrorBoundary>
                <Payroll />
              </ErrorBoundary>
            } />
            <Route path='transaction' element={
              <ErrorBoundary>
                <Transaction />
              </ErrorBoundary>
            } />
            <Route path='setting' element={
              <ErrorBoundary>
                <Settings />
              </ErrorBoundary>
            } />
            <Route path='*' element={
              <ErrorBoundary>
                <NotFound />
              </ErrorBoundary>
            } />
          </Routes>
        </Flex>
      </Router>
    </Flex>
  )
}

export default App
