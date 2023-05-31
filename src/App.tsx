import {BrowserRouter as  Router, Routes, Route} from 'react-router-dom';
import { Flex, SystemStyleObject } from '@chakra-ui/react';
import useContextApi from './context';
import ErrorBoundary from './container/Error';
import Home from './pages/home';
import Nav from './pages/navBar';
import SideBar from './pages/sideBar';
import Courier from './pages/courier';
import Payroll from './pages/payroll';
import NotFound from './pages/NotFound';
import Transaction from './pages/transaction';
import Settings from './pages/settings';


function App() {
  const { state } = useContextApi()
  const ContainerStyles: SystemStyleObject = {
    filter: state.modal ? 'blur(2px)' : 'none',
  }
  return (
    <Flex w='100%' h='100vh' as='section' sx={ContainerStyles}>
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
